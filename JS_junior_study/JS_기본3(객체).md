<!-- TOC -->

- [객체](#%EA%B0%9D%EC%B2%B4)
    - [생성, 접근, 추가, 삭제](#%EC%83%9D%EC%84%B1-%EC%A0%91%EA%B7%BC-%EC%B6%94%EA%B0%80-%EC%82%AD%EC%A0%9C)
    - [단축 프로퍼티](#%EB%8B%A8%EC%B6%95-%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0)
    - [프로퍼티 존재 여부 확인](#%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0-%EC%A1%B4%EC%9E%AC-%EC%97%AC%EB%B6%80-%ED%99%95%EC%9D%B8)
    - [for .. in  반복문](#for--in--%EB%B0%98%EB%B3%B5%EB%AC%B8)
    - [함수로 객체 생성하기](#%ED%95%A8%EC%88%98%EB%A1%9C-%EA%B0%9D%EC%B2%B4-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0)
    - [예제](#%EC%98%88%EC%A0%9C)
    - [method, this](#method-this)
        - [비 권장사항 화살표 함수로 method 선언](#%EB%B9%84-%EA%B6%8C%EC%9E%A5%EC%82%AC%ED%95%AD-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98%EB%A1%9C-method-%EC%84%A0%EC%96%B8)

<!-- /TOC -->

# 객체 
## 생성, 접근, 추가, 삭제 
<상황>
superman 객체의 이름은 clark, 나이는 33인 사람이 있다.
이를 JS객체로 나타내면 
```js 
// 생성 
const superman = {
    name: 'clark',
    age:33,
}

// 접근 
superman.name // 'clark'
superman['age'] // 33

// 추가 
superman.gender = 'male';
superman['hairColor'] = 'black';

// 삭제 
delete superman.hariColor;
```

## 단축 프로퍼티 
```js
const name = 'clark';
const age = 33; 

const superman = {
    name, // name: name 과 동일하다.
    age, //age: age
    gender: 'male',
}

console.log(superman.name) // clark 
```

## 프로퍼티 존재 여부 확인 
- `in` 연산자 사용
- 존재하지 않는 프로퍼티 => 에러 발생 X, `undefined` 출력
```js
const superman = {
    name: 'clark',
    age: 33,
}

console.log(superman.birthDay); // undefined
console.log('birthDay' in superman); // false
console.log('age' in superman); // true
```

## for .. in  반복문 
```js
const superman = {
    name: 'clark',
    age: 33,
}

for(let key in superman){
    console.log(key, superman[key]);
}

// 실행결과
// name clark
// age 33
```

## 함수로 객체 생성하기
```js
function makeObject(name, age){
    return {
        name: name, // name과 동일
        age: age,   // age와 동일 
        hobby: 'football'
    };
}

const Mike = makeObject('Mike', 30);
console.log(Mike);

// 실행결과: { name: 'Mike', age: 30, hobby: 'football' }
```

## 예제 

```js
function isAdult(user){
    if(!('age' in user) || user.age < 20){
        return false; 
    }
    return true; 
}

const Mike = {
    name: "Mike",
    age: 30,
}

const Jane = {
    name: "Jane",
}

console.log(isAdult(Mike)); // true
console.log(isAdult(Jane)); // false 
```

## method, this 

- **`method`는 객체 프로퍼티로 할당 된 함수를 의미한다.**
- **`this`는 현재 객체를 가리킨다.**
  - 주의사항!!! => 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않는다. 따라서 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가지고 온다. 

superman에게 `fly` 능력이 있다고 해보자. 객체에 이 능력을 함수로 추가해보면 아래와 같다. 

```js
// 함수 선언문 추가 
const superman = {
    name: 'clark',
    age:33,
    fly: function(){
        console.log("날아갑니다");
    },
    landing(){
        console.log(`${this.name} 착륙합니다.`);
    }
}

superman.fly(); // 날아갑니다. 
superman.landing(); // clark 착륙합니다.
```

```js
let boy = {
    name: "mike",
    showName: function(){ // 화살표 함수X 
        // console.log(boy.name); 
        console.log(this.name);  
    }
}

boy.showName(); // mikw

// 별명 
let man = boy;  // 객체 boy에, boy로도 man으로도 접근 가능 => 객체는 1명인데 별명이 2개인 거

// man과 boy 왔다갔다하면서 접근하기 
man.showName(); // "mike"
man.name = "tom";
console.log(boy.name); // "tom"

// 포인터 개념 
boy = null; 
man.showName(); // ERROR => boy의 name은 사라졌기 때문 => 이럴 떄 boy.name이 아니라 this.name을 사용하면 해결이 된다. => "tom"
```

**결론: method에서는 `객체명.함수()`로 호출하기보다, `this.함수()`로 호출하는 것이 바람직하다.**

### (비 권장사항) 화살표 함수로 method 선언

```js
// 기존 코드 
let boy = {
    name:'Mike',
    sayThis: function(){
        console.log(this);
    }
}
boy.sayThis(); // 실행결과: { name: 'Mike', sayThis: [Function: sayThis] } 

// 화살표 함수로 작성 시 
let boy2 = {
    name: "mike",
    sayThis:()=>{
        console.log(this);  // 전역 객체를 가리킨다. 
                            //브라우저 환경: window, Node.js: global 
    }
}

// this != boy
boy2.sayThis(); // 실행결과: {} 

```

