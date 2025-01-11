function* gen1(){
    yield 'w';
    yield 'o';
    yield 'r';
    yield 'l';
    yield 'd';
}
function* gen2(){
    yield 'Hello,';
    yield* gen1(); 
    yield '!';
}

console.log(...gen2()); // Hello, W o r l d !
// ... 은 반복가능한 객체를 let-of 처럼 done:true가 될때까지 펼쳐놓는 역할을 한다. 

