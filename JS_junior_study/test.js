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