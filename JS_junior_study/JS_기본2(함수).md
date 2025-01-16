<!-- TOC -->

- [함수](#%ED%95%A8%EC%88%98)
    - [예시](#%EC%98%88%EC%8B%9C)
- [함수 표현식](#%ED%95%A8%EC%88%98-%ED%91%9C%ED%98%84%EC%8B%9D)
    - [함수 선언문 vs 함수 표현식](#%ED%95%A8%EC%88%98-%EC%84%A0%EC%96%B8%EB%AC%B8-vs-%ED%95%A8%EC%88%98-%ED%91%9C%ED%98%84%EC%8B%9D)
    - [화살표 함수](#%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98)

<!-- /TOC -->

# 함수 

## 예시
```js
// 매개변수가 없는 함수 
function showError(){
    alert("에러가 발생했습니다. 새로고침해주세요");
}

// 매개변수가 있는 함수 
function sayHello(name){
    let msg = `Hello`;
    if(name){ 
        // msg = `Hello ${name}`;
        // msg += ', '+name; 
        msg += `, ${name}`;
    }
    console.log(msg);
}

sayHello(); // "Hello"; name <- undefined; if 조건문 false로 처리
sayHello('Mike'); //"Hello Mike"
```
<hr>

```js
// 전역변수와 지역변수 

let msg = "welcome"; // 전역변수 
console.log(msg); //welcome 

function sayHello(name){
    let msg = "Hello"; // 지역변수
    console.log(msg + ' ' + name); // Hello Mike
}

sayHello('Mike');
console.log(msg); // welcome 
```
<hr>

```js
// 전역변수와 매개변수2 
// 매개변수는 함수 내부의 지역변수가 된다.
let name = "Mike";

function sayHello(name){ 
    console.log(name);
}

sayHello(); // undefined 
sayHello("Jane"); // Jane 
```

**지역변수 쓰는 습관을 들이기. 전역변수가 많아지면 관리가 어려워진다.**

<hr>

```js
// 매개변수 기본값 설정
// OR 연산자 사용하기 
function sayHello(name){
    let newName = name || 'friend';
    let msg = `Hello ${newName}`;
    console.log(msg);
}

sayHello(); // Hello friend 
sayHello("Jane"); // Hello Jane 

// 위의 함수 변환 
function sayHello(name = "friend"){
    // let newName = name || 'friend';
    let msg = `Hello ${name}`;
    console.log(msg);
}
```
<hr>

```js
// return문 
function add(n1, n2){
    return n1 + n2; 
}
let result = add(2,3);
console.log(result); // 5

// return값이 없으면, undefined를 리턴한다.
function showError(){
    alert('에러가 발생했습니다.');
    return; // -> undefined 동일하게 반환. 
    alert('이 코드는 절대 실행되지 않습니다.');
}
result = showError();
console.log(result); // undefined
```

**<정리>**
- 한번에 한 작업에 집중한다. 
- 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍한다. 

<br><br>

# 함수 표현식 
## 함수 선언문 vs 함수 표현식 
```js 
// 함수 선언문 
sayHello(); // 실행됨 
function sayHello(){
    console.log('Hello');
}
sayHello(); // 실행됨 

// 함수 표현식
// sayHello2(); // 실행불가
let sayHello2 = function(){
    console.log('Hello');
}
sayHello2(); // 실행됨 
```

**함수 선언문**
- 어디서든 호출 가능 
- 이유: 초기화 단계에서, `선언된 함수 모임`에 함수를 미리 정의해두기 때문
- 따라서, 사용가능범위가 넓어지게 된다. 이를 `호이스팅`이라고 부름. 

**함수 표현식**
- 코드에 도달하면 함수가 생성된다. 따라서, 그 이후에만 사용할 수 있다.

=> 뭐가 더 좋냐? 비슷비슷; 신경 쓰기 싫다 하면 함수 선언문을 사용 

## 화살표 함수 
```js
// 두 함수 모두 동일 기능을 수행한다. 
function add(n1, n2){
    return n1 + n2; 
}
let result = add(2,3);
console.log(result); // 5

let add2 = (n1, n2) =>{
    return n1+n2; 
}
console.log(add2(2,3)); // 5
```
<hr>

- 매개변수가 1개이고, return문도 1줄일 떄 아래와 같이 괄호 생략이 가능하다. 

```js 
let add = num => num+1;
console.log(add(1)); //2

let sayHello = (name)=> `Hello, ${name}`;

// 인수가 없는 함수는 () 생략 불가 
let showError = () => {
    alert('error');
}
```