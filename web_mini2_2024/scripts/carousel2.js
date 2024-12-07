window.addEventListener('load', function(){
    var carousels = this.document.getElementsByClassName("carousel");

    for (var i = 0; i<carousels.length; i++){
        addEventToCarousel(carousels[i]);
    }
});

function addEventToCarousel(carouselElem){
    var ulElem = carouselElem.querySelector('ul');
    var liElems = ulElem.querySelectorAll('li');
    var liCount = liElems.length;
    var liElemWidth = liElems[0].clientWidth; //600px
    var adjustUlWidth = liElemWidth * liCount; // ul에 적용해야 되는 너비 값 
    ulElem.style.width = adjustUlWidth + 'px';

    var slideButtons = carouselElem.querySelectorAll('.slide');
    for (var i =0; i< slideButtons.length; i++){
        slideButtons[i].addEventListener('click', createListenerSlide(carouselElem)); // 현재 슬라이드 버튼의 캐러셀에 있는 슬라이드 버튼 왼쪽 / 오른쪽에 대해서만 !!!; 일종의 클로져 역할임 -> 실행 중 캐러셀은 여러개를 오고갈 텐데, 이 이벤트리스터 등록은 현재 캐러셀을 캡쳐해서 가져가니까 
    }
}

function createListenerSlide(carouselElem){
    // 클릭 이벤트가 발생했을 때 아래 함수가 호출된다. 
    // 호출되는 시점에 이벤트 발생 주체에게 event 객체를 넘긴다. 
    // 이벤트를 받으면, currentTarget은 현재 클릭한 버튼을 의미한다. 
    return function(event){
        var clickedButton = event.currentTarget; // 클릭이 발생된 슬라이드 버튼을 가져온다. 
        var liElems = carouselElem.querySelectorAll('li'); // li태그는 캐러셀에서 이미지를 담는 태그만 해당된다. 얘네를 다 들고 옴
        var liCount = liElems.length;

        var currentIndex = carouselElem.attributes.data.value; 

        if (clickedButton.className.includes('right') && currentIndex < liCount - 1) {
            currentIndex++;
            scrollDiv(currentIndex, carouselElem);
        }
        else if (clickedButton.className.includes('left') && currentIndex > 0){
            currentIndex--;
            scrollDiv(currentIndex, carouselElem);
        }

        carouselElem.attributes.data.value = currentIndex;

        updateIndicator(carouselElem, currentIndex);
        checkHideSlideButton(carouselElem, currentIndex);

    }
}

function scrollDiv(nextIndex, carouselElem){
    var divElem = carouselElem.querySelector('div'); //선택자를 받아서 선택자와 일치하는 문서 안의 첫번째 요소 반환
    // var liElems = carouselElem.querySelectorAll('li');
    // var liWidth = liElems[0].clientWidth; 
    var liWidth = divElem.clientWidth;
    var newLeft = liWidth * nextIndex; 

    divElem.scrollTo({left:newLeft, behavior:'smooth'});
}

function updateIndicator(carouselElem, currentIndex){
    var indicators = carouselElem.querySelectorAll('footer > div');
    for (var i=0; i< indicators.length; i++){
        if (currentIndex === i) {
            indicators[i].className = "active";
        } else{
            indicators[i].className = "";
        }
    }
}

function checkHideSlideButton(carouselElem, currentIndex){
    var leftButton = carouselElem.querySelector('.slide-left');
    var rightButton = carouselElem.querySelector('.slide-right');
    var liCount = carouselElem.querySelectorAll('li').length;
    if (currentIndex < liCount-1){
        rightButton.style.display='block';
    } else {
        rightButton.style.display = 'none';
    }
    if (currentIndex > 0){
        leftButton.style.display = 'block';
    } else {
        leftButton.style.display = 'none';
    }
}