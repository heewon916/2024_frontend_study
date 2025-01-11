# async, wait 

프로미스의 `then`메소드를 체인 형식으로 호출하는 것보다 가독성이 좋아진다. 

## async 
아래처럼 함수 앞에 `async`를 붙여주면 항상 `프로미스`를 반환한다. 
```js 
async function getName(){
    // return "mike"; 
    // ex2. 반환값이 프로미스라면 
    // return Promise.resolve('Tom'); 
    // ex3. error를 던져야 할 때 
    throw new Error('error...');
}

console.log(getName()); 

getName().then((name)=>{
    console.log(name);
    // mike를 console창에 출력한다. 
    // ex2의 경우 Tom을 출력한다.
    // ex3의 경우 에러를 출력한다. 
}) 

getName().catch((err) => {
    console.log(err); 
    // 에러는 catch로 잡을 수 있다. 
})
```

## await 

- `await`는 `async 내부`에서만 사용할 수 있다.
  - 일반 함수 안에서 사용하면 에러가 발생한다. 
- await 키워드 옆에는 프로미스가 온다. 해당 프로미스가 처리될 때까지 기다린다.

- 예시 
  - result에 getName()에서 resolve 된 값을 기다렸다가(await) 넣어준다. 
  
```js
// await 

function getName(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(name);
        }, 1000); // 1초 후에 실행된다. 
    });
}

async function showName(){
    const result = await getName("mike");
    console.log(result);
}

console.log('start');
showName();// 1sec 후에 mike가 찍힌다. 
```

### 예시 1

16프로미스 파일일에서 다룬 마지막 예시에서 
f1 함수 호출을 async, await을 이용해 바꿔보자. 

```js
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1th order complete.');
        }, 1000);
    });
};
const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('2rd order complete.');
        }, 3000);
    });
};
const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3rd order complete.');
        }, 2000);
    });
};

// f1()
// .then((res)=>f2(res))
// .then((res)=>f3(res))
// .then((res)=>console.log(res))
// .catch(console.log);

console.log('start');
async function order(){
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);

    console.log(result3);
    console.log('end');
}

order();
```
- 실행결과
```
start
1th order complete.
2rd order complete.
3rd order complete.
end
```

### 예시 2

f2 안에서 reject된다고 했을 때, 기존대로 order함수를 작성하면 에러가 발생하고 실행이 멈춘다. 16프로미스 파일에서는 `then-catch`를 사용했지만, order 함수에서는 `try-catch`문을 사용하면 된다. 

```js
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1th order complete.');
        }, 1000);
    });
};
const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res('2rd order complete.');
            rej(new Error('err...'));
        }, 3000);
    });
};
const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3rd order complete.');
        }, 2000);
    });
};

// f1()
// .then((res)=>f2(res))
// .then((res)=>f3(res))
// .then((res)=>console.log(res))
// .catch(console.log);

console.log('start');
async function order(){
    try{
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);

        console.log(result3);
    } catch(e){
        console.log(e);
    }
    console.log('end');
}

order();
```

- 실행결과 
```
start
1th order complete.
Error: err...
    at @@@
end
```

### 예시 3 - Promise.all()



```js
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1th order complete.');
        }, 1000);
    });
};
const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('2rd order complete.');
            // rej(new Error('err...'));
        }, 3000);
    });
};
const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3rd order complete.');
        }, 2000);
    });
};

// f1()
// .then((res)=>f2(res))
// .then((res)=>f3(res))
// .then((res)=>console.log(res))
// .catch(console.log);

console.log('start');
async function order(){
    try{
        const result = await Promise.all([f1(), f2(), f3()]);
        console.log(result);
    } catch(e){
        console.log(e);
    }
    console.log('end');
}

order();
```

- 실행결과 
```
start
undefined
undefined
[ '1th order complete.', '2rd order complete.', '3rd order complete.' ]
end
```
