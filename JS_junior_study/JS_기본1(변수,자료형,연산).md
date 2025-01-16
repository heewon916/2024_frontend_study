<!-- TOC -->

- [변수](#%EB%B3%80%EC%88%98)
- [자료형](#%EC%9E%90%EB%A3%8C%ED%98%95)
    - [문자열](#%EB%AC%B8%EC%9E%90%EC%97%B4)
    - [숫자형](#%EC%88%AB%EC%9E%90%ED%98%95)
    - [Boolean](#boolean)
    - [null과 undefined](#null%EA%B3%BC-undefined)
    - [typeof 연산자](#typeof-%EC%97%B0%EC%82%B0%EC%9E%90)
- [대화상자](#%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90)
- [형변환](#%ED%98%95%EB%B3%80%ED%99%98)
    - [자동변환](#%EC%9E%90%EB%8F%99%EB%B3%80%ED%99%98%EB%B3%80%ED%99%98)
    - [명시적 형변환](#%EB%AA%85%EC%8B%9C%EC%A0%81-%ED%98%95%EB%B3%80%ED%99%98%EB%B3%80%ED%99%98)
- [기본 연산자](#%EA%B8%B0%EB%B3%B8-%EC%97%B0%EC%82%B0%EC%9E%90)
- [비교 연산자, 조건문](#%EB%B9%84%EA%B5%90-%EC%97%B0%EC%82%B0%EC%9E%90-%EC%A1%B0%EA%B1%B4%EB%AC%B8)
    - [조건문](#%EC%A1%B0%EA%B1%B4%EB%AC%B8)
- [논리 연산자](#%EB%85%BC%EB%A6%AC-%EC%97%B0%EC%82%B0%EC%9E%90)
    - [평가](#%ED%8F%89%EA%B0%80)
    - [우선순위](#%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)
- [반복문](#%EB%B0%98%EB%B3%B5%EB%AC%B8)
    - [for문](#for%EB%AC%B8)
    - [while문](#while%EB%AC%B8)
    - [do-while문](#do-while%EB%AC%B8)
    - [break, continue](#break-continue)
- [switch문](#switch%EB%AC%B8)

<!-- /TOC -->

# 변수 

```js
// 변수 선언
name = "mike"; // 문자열 "", ''
age = 30; 
// class = "수업";
```

**예약어**
- class 불가 

**변수 접근 함수**
- `alert()`
- `console.log()`

**변수 선언 키워드**
- `let`: 최초 사용의 모든 변수에 let을 붙이면 중복 선언 막을 수 있다. 
  ```js
  let grade = "f";
  //.. 1000 lines 
  grade = "A+"; 
  ```
- `const`: 절대 바뀌지 않는 상수, 수정x, 대문자로 선언

=> 변하지 않는 값은 const, 변할 수 있는 값은 let으로 선언한다.  

**<규칙>**
1. 변수는 문자와 숫자, $와 _만 사용
2. 첫글자 숫자 X
3. 예약어는 사용 X
4. 가급적 상수는 대문자로 알려줄 것 
5. 변수명은 읽기 쉽고 이해할 수 있게 선언

<br><br>

# 자료형 

## 문자열 
```js
const name = "Mike";
const age = 30; 

const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message = "I'm a boy";
const message2 = `I\'m a boy';

const message3 = `My name is ${name}`;

const message4 = `나는 ${30+1}살입니다.`;

console.log(name1+name2); //"Mike Mike"

const age = 30; 
console.log(name1 + age); // "Mike 30"
```

## 숫자형 
```js 
const age = 30; 
const PI = 3.14;

// 더하기 1+2
// 빼기 10-3 
// 곱하기 3*2
// 나누기 6/3 
// 나머지 6%3

const x = 1/0; // Infinity

const name = "Mike";
const y = name/2; // NaN = Not a Number 
```

## Boolean 
```js
const a = true; // 참
const b = false; // 거짓 
```

## null과 undefined
- null: 아무 값 없음 명시 
```js
let age; 
console.log(age); // undefined 

let user = null; 
```

## typeof 연산자 
변수의 자료형 알아낼 수 있음. 
```js
const name = "Mike"; 

console.log(typeof 3); // "number"
console.log(typeof name); // "string"
console.log(typeof true); // "boolean"
console.log(typeof "xxx"); // "string"
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
```

object 객체형 
- `null != 객체`

# 대화상자 
- `alert` 알려줌; 확인버튼만 존재 
- `prompt` 사용자로부터 입력 받음
  - 취소 버튼을 누르면 false -> null 리턴 
- `confirm` 확인받음
  - 확인/ 취소 버튼 존재. 각각 T/F 리턴함

```js
// prompt 
const name = prompt("이름을 입력하세요:");

// alert 
alert("환영합니다,"+name + "님");
alert(`안녕하세요, ${name}님`); // 위와 동일 

// prompt 디폴트 값 설정 
const name = prompt("예약일을 입력해주세요.", "2020-10-");

// confirm()
// 확인 -> true, 취소 -> false return 
const isAdult = confirm("당신은 성인 입니까?");

console.log(isAdult); 
// 사용자의 응답에 따라 액션을 달리 취할 수 있다. 
```

단점
- 스크립트 일시 정지 
- 스타일링 X; 위치 모양 불가 

<br><br>

# 형변환 
- `String()`~ -> 문자형으로 변환 
- `Number()` -> 숫자형으로 변환 
- `Boolean()` -> 불린형으로 변환

```js
// 점수 평균 구하기 
const mathScore = prompt("math score:"); // "90"
const engScore = prompt("eng score:"); // "80"

const result = (mathScore + engScore) / 2; // 4540 ???
```
prompt 입력 -> 문자형 리턴 
"90" + "80" => "9080" 
"9080" / 2 = 4540 
- 숫자형으로 자동변환됨. 

## 자동 형변환
- `"6"/"2" = 3` 
- 나누기 연산자처럼, 숫자 관련 연산을 할 때 자동으로 숫자형으로 바꿔 계산한다. 이는 예기치 못한 오류를 발생시킬 수 있다. 


## 명시적 형변환
1. `String()`
   ```js
   console.log(String(3), //"3"
   String(true),//"true"
   String(false),//"false"
   String(null),//"null"
   String(undefined));//"undefined"
   ```
2. `Number()`
   ```js
   console.log(
    Number("1234"), // 1234
    Number("123asg"), // NaN
    Number("adsga"), // NaN
    Number(true), //1
    Number(false), //0
    Number(null), // 0
    Number(undefined) // NaN
   );
   ```
3. `Boolean()`
   - false == 숫자 0, 빈 문자열 '', null, undefined, NaN
   - 이외에는 모두 true를 반환한다.

* 주의사항 
```js
Boolean(0) // false
Boolean('0') // true

Boolean('') // false
Boolean(' ') // true
```

<br><br>

# 기본 연산자
- `+, -, *, /, %, **`
- 연산자 줄여쓰기 가능 `+=, -=, /=, *=, %=`
- 증가 연산자`++`, 감소 연산자`--`

<br><br>

# 비교 연산자, 조건문 
- `>, <, >=, <=, ==, !=, ===`
- 동등연산자 `==` 값만 비교
- 일치연산자 `===` 값&type까지 비교 

```js
// 주의사항; ==와 ===

const a = 1;
const b = "1";

console.log(a == b); // true
console.log(a === b); // false
```

## 조건문
- if-else if-else문
  ```js
  if(){
    
  } else if(){

  } else{

  }
  ``` 

 <br><br> 

# 논리 연산자 
- `|| (OR)`: 하나라도 true이면 true. 전부 false면 false
- `&& (AND)`: 모든값이 true이면 true, 하나라도 false면 false
- `! (NOT)`: true면 false, false면 true

## 평가 
- `OR`는 첫번째 true를 발견하는 즉시 평가를 멈춤 
- `AND`는 첫번째 false를 발견하는 즉시 평가를 멈춤

## 우선순위 
- `AND >>> OR`  

```js
// 남자이고, 이름이 Mike이거나 성인이면 통과 

const gender = "F";
const name = "Jane";
const isAdult = true; 

if(gender === 'M' && name === 'Mike' || isAdult){
    console.log("pass")
}else{
    console.log("stop")
}

// 실행결과: pass 
// 이유: gender === 'M' && name === 'Mike' 를 먼저 평가하면, false이다. 여기에 || isAdult 를 평가하면, true이므로 "pass"가 출력된다. 

// 의도한 바대로 만들려면 아래의 코드가 맞다. 
if(gender === 'M' && (name === 'Mike' || isAdult)){
    console.log("pass")
}else{
    console.log("stop")
}
```

<br><br>

# 반복문 

## for문 
```js
// 1부터 10까지 로그 

for(let i=1; i<=10; i++){
    console.log(i);
}
```

## while문 
```js
// 1부터 10까지 로그 

let i=1;

while(i <= 10){
    console.log(i);
    i++;
}
```

## do-while문 
```js
// 1부터 10까지 로그 

let i = 1; 

do{
    console.log(i);
    i++
}while(i<=10);
```

## break, continue 
- break: 멈추고 빠져나옴
- continue: 멈추고 다음 반복으로 넘어감 

```js
// break 
while(true){
    let answer = confirm("계속 할까요?");

    if(!answer){
        break; // 취소 버튼을 누르면 break
    }
}

// continue, 짝수만 출력 
for(let i=0; i<10; i++){
    if(i%2){ // i%2 === 1과 동일 
        continue; 
    }else{
        console.log(i);
    }
}
```

<br><br>

# switch문 
- 보통 for문을 사용한다. 다만, 케이스가 정말 다양할 때 사용하는 편이다. 
```js
// 사과: 100원, 바나나: 200원, 키위: 300원, 멜론: 500원, 수박:500원, 사고 싶은 과일을 물어보고 가격 알려주기 


let fruit = prompt("무슨 과일을 사고 싶나요?");

switch(fruit){
    case "사과":
        console.log("100원");
        break;
    case "바나나":
        console.log("200원");
        break;
    case "키위":
        console.log("300원");
        break;
    case "멜론":
    case "수박": // 멜론이 와도, 수박이 와도 아래 콘솔이 출력된다. 
        console.log("500원");
        break;
    default: // 위의 조건에 없는 과일을 찾는 경우
        console.log("그런 과일은 없습니다");
}
```
