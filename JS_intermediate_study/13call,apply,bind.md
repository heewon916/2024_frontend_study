# call, apply, blind 
- 함수 호출 방식과 관계없이 this를 지정할 수 있다. 

## call 메소드 
**call 메소드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.**

`fn.call(a1, a2..)`이렇게 있을 때, 

**첫번째 매개변수는 this로 사용할 값이고,** 

**두번째 매개변수부터는 이 함수(fn)가 사용할 매개변수들이다. _예시 2를 참고_**

```js 
// 예시 1
const mike = {
    name: 'mike'
}; 

const tom = {
    name: 'tom'
}; 

function showThisName(){
    console.log(this.name);
}

showThisName(); // ""
showThisName.call(mike); // "mike"

```
`console.log(this.name);` 을 실행할 때 원래 this는 window를 의미한다. 따라서 `console.log(window.name);`이 되는데, window.name은 `""` 공백이므로 아무것도 출력되지 않는다. 

따라서, `fn.call(this로 지정할 객체);`, 

즉 `showThisName.call(mike)`로 실행하게되면, 정상출력되게 된다. 

```js 
// 예시 2
// -> 매개변수가 더 있을 경우 
const mike = {
    name: 'mike'
}; 

const tom = {
    name: 'tom'
}; 

function showThisName(){
    console.log(this.name);
}

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation; 
}

update.call(mike, 1999, 'singer');

console.log(mike);
// { name: 'mike', birthYear: 1999, occupation: 'singer' }
```

## apply 메소드 
apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다. 

call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만,

**apply는 매개변수를 배열로 받는다.**

**따라서, 배열을 함수 매개변수로 사용할 때 apply가 유용하다.**

```js
const mike = {
    name: 'mike'
}; 

const tom = {
    name: 'tom'
}; 

function showThisName(){
    console.log(this.name);
}

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation; 
}
// 이것만 다른다.
update.apply(mike, [1999, 'singer']);

console.log(mike);
```

```js
// call과 apply의 동작방식의 차이를 확인할 것 
const nums = [3, 10, 1, 6, 4];
let minNum = Math.min(nums); // NaN
let maxNum = Math.max(nums); // NaN
console.log(minNum);
console.log(maxNum);

minNum = Math.min(...nums); // 1
maxNum = Math.max(...nums); // 10
console.log(minNum);
console.log(maxNum);

minNum = Math.min.apply(null, nums);
// minNum = Math.min.apply(null, [3, 10, 1, 6, 4]); 와 동일한 문장 
// Math.min은 this객체가 필요없으므로 null 
maxNum = Math.max.apply(null, nums);
console.log(minNum);
console.log(maxNum);

minNum = Math.min.call(null, ...nums);
// minNum = Math.min.call(null, 3, 10, 1, 6, 4);
maxNum = Math.max.call(null, ...nums);
console.log(minNum);
console.log(maxNum);
```

## bind 메소드 
**함수의 this값을 영구히 바꿀 수 있다.**

**즉, 함수의 this값이 고정된다는 뜻이다.**


```js
const user = {
    name: "mike",
    showName: function() {
        console.log(`hello, ${this.name}`);
    },
};

user.showName();  // hello, mike

let fn = user.showName; // this <- fn 
fn(); // hello, undefined

fn.call(user); // hello, mike 
fn.apply(user); // hello, mike 

let boundFn = fn.bind(user);
boundFn(); // hello, mike

```