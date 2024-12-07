// 페이지가 다 로딩된 이후에 실행되는
window.addEventListener('load', function(){
    // alert('페이지 로딩 완료');
    clearMessages();

    var formElem = document.querySelector("form"); // form태그 객체를 가져옴
    formElem.onsubmit = submitForm; // 이벤트 리스너를 등록하는 또 다른 방법
    // onsubmit 이라는 속성은 submit 되었을 때 동작할 함수를 지정할 수 있게 해준다.

    /// 월 추가 --> 동적으로 월을 추가하는 법
    var selectInput = document.querySelector("select[name='birth-month']");

    for (var i=1; i<=12; i++){
        var option = document.createElement('option');
        option.innerHTML = i + '월';
        option.value = i; 

        selectInput.appendChild(option);

    }
});

// TEST 문구를 지워주는 함수; 페이지가 로딩되는 시점에
function clearMessages(){
    var messages = document.getElementsByClassName('alert-message');
    for(var i=0; i<messages.length; i++){
        messages[i].style.display = 'none';
    }
} 
// 각 입력의 유효성을 검증해본다. 
function showMessage(inputElement, message){
    var messageElem = inputElement.parentNode.querySelector('span');
    messageElem.style.display = 'inline';
    messageElem.innerText = message;

    inputElement.focus();
}

// form에 대해 submit 이벤트가 발생했을 때의 이벤트의 리스너를 등록하고, 이벤트 리스너가 실행됐을 때의 검증 함수까지 작성
function submitForm(){
    // account 필드 가져오기 
    var accountInput = document.querySelector('input[name="account"]');
    var passwordInput = document.querySelector('input[name="password"]');
    var passwordConfirmInput = document.querySelector("input[name='password2']");

    // select, radio, checkbox 값 가져오기
    var selectInput = document.querySelector("select[name='birth-month']");
    var radioInput = document.querySelector("input[name='gender']:checked");
    var checkboxInput = document.querySelector("input[name='agree']"); // radio와 다르게 켜졌다 꺼졌다이므로 checked 필요 없음 
    
    // 값 출력하기 
    console.log(accountInput.value);
    console.log(passwordInput.value);
    console.log(passwordConfirmInput.value);

    console.log(selectInput.value);
    console.log(radioInput.value);
    console.log(checkboxInput.value);

    var success = true; 
    if (accountInput.value.length < 6){
        showMessage(accountInput, "아이디는 6자리 이상");
        success = false;
    }
    if (passwordInput.value.length < 10){
        showMessage(passwordInput, "비밀번호는 10자리 이상");
        success = false;
    }
    if (passwordConfirmInput.value !== passwordInput.value){
        showMessage(passwordConfirmInput, "비밀번호를 동일하게 입력해주세요.");
        success = false;
    }


    return success;
}

