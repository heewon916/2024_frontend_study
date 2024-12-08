let userList = [
    {name: 'tom', age:30},
    {name: 'mike', age:10},
    {name: 'jane', age:27},
    {name: 'sue', age:26},
    {name: 'harry', age:42},
    {name: 'steve', age:60},
];
// 성인인 객체의 name만 뽑아와보자
let result = userList.reduce((prev, curr) => {
    if(curr.age > 19){
        prev.push(curr.name);
    }
    return prev;
    // 나이를 전부 더하고 싶으면, 
    // return (prev += curr.age);
    /**이름이 3자인 사람만 찾는다면?
     * if(curr.name.length === 3){
     *  prev.push(curr.name);
     * }
     * return prev;
     */
}, []);

console.log(result); //[ 'tom', 'jane', 'sue', 'harry', 'steve' ]