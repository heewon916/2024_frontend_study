# setTimeout/ setInterval  
- setTimeout -> 일정 시간이 지난 후 함수를 실행 
- setInterval -> 일정 시간 간격으로 함수를 반복 

## setTimeout
- setTimeout(일정시간 지난후 실행할 함수, 몇ms 뒤);
```js
function fn(){
    console.log(3);
}
setTimeout(fn, 3000); // 3000ms = 3s

// 위와 동일한 함수; 직접 써도 된다. 
setTimeout(function() {
    console.log(3)
}, 3000);

// 인수가 필요하다면, 시간 뒤에 적어준다. 
function showName(name){
    console.log(name);
}
setTimeout(showName, 3000, 'Mike');
```
- `clearTimeout(tId)`: 예정된 작업을 없앤다. 이것을 이용하면 스케줄링을 취소할 수 있다. 
  - `setTimeout`은 tId를 반환한다. 
```js
function showName(name){
    console.log(name);
}
const tId = setTimeout(showName, 3000, 'Mike');

console.log(tId);
//clearTimeout(tId);
```

## setInterval 
- 한번 실행하고 끝나는 게 아니라, 특정 시간 간격으로 함수가 실행된다. 
```js
function showName(name){
    console.log(name);
}
const tId = setInterval(showName, 3000, 'Mike');

console.log(tId);
//clearTimeout(tId);
```
### 주의할 점 
- `delay = 0`으로 준다면? 
```js
setTimeout(function(){
    console.log(2)
}, 0);
console.log(1); 
```
- 이 경우, 1이 먼저 출력되고, 2가 출력된다. delay=0이라고 해서, 바로 실행되지 않는다.

### 예시
```js
/***
 * 1초마다 문구를 출력하되
 * 5초가 지나면 종료 
 **/
let num = 0; 

function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);

    if (num > 5){
        clearInterval(tId);
    }
}

const tId = setInterval(showTime, 1000);
```