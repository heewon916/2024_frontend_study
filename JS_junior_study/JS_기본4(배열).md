<!-- TOC -->

- [배열](#배열)
  - [**순서가 있는 리스트**](#순서가-있는-리스트)
  - [배열 함수](#배열-함수)
  - [반복문: for](#반복문-for)

<!-- /TOC -->
# 배열 
## **순서가 있는 리스트**

```js 
// 대표적인 예시 

// 선언 
let students = ['Amy', 'Bob', 'Caliy'];

console.log(students[0]); // "Amy"
console.log(students[2]); // "Caliy"

// 수정 
students[0] = "Tom"
console.log(students); // [ 'Tom', 'Bob', 'Caliy' ]
```

<br>

```js
let arr = [
    '민수',
    3,
    false,
    {
        name: "Mike",
        age: 30,
    },
    function(){
        console.log("TEST");
    }
];
```

<br>

## 배열 함수 
- `arr.length`: 배열의 길이; 요소의 개수 
- `arr.push(x)`: 배열 끝에 추가 (파이썬의 append())
- `arr.pop()`: 배열 끝 요소 제거 
- `arr.shift(), arr.unshift([x])`: 배열 앞에 제거/ 추가 
  - shift == 파이썬의 pop(0)
  - unshift: insert()와 비슷; 단, 한번에 여러 원소 추가 가능 

<br>

## 반복문: for
```js
let days = ['월', '화', '수'];

for(let index=0; index<days.length; index++){
    console.log(days[index]); 
    // 월 화 수 차례대로 출력 
}

// 위와 동일한 코드 
for (let day of days){
    console.log(day);
}

// for .. in 은 권장 X 
```
