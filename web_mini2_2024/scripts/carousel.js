window.addEventListener('load', function() {
    var carousels = this.document.getElementsByClassName("carousel");
    
    /// 캐러셀 이벤트를 등록하는 로직 
    for (var i=0; i<carousels.length; i++){
        addEventToCarousel(carousels[i]); // 각 캐러셀에 이벤트 리스너를 모두 등록한다.
    }
});

function addEventToCarousel(carouselElem) {
    var ulElem = carouselElem.querySelector("ul"); // 현재 li를 담고 있는 리스트 태그 
    var liElems = ulElem.querySelectorAll('li');

    // 너비 값 조정 
    var liWidth = liElems[0].clientWidth; // 현재 li의 너비값 가져옴 
    var adjustedWidth = liElems.length * liWidth; // 실제 ul이 가져야 할 width 값이 된다. 

    ulElem.style.width = adjustedWidth + 'px';

    // 슬라이드 버튼 이벤트 등록 
    var slideButtons = carouselElem.querySelectorAll('.slide'); // 슬라이드 버튼 전부 가져옴 
    for (var i=0; i<slideButtons.length; i++){
        slideButtons[i].addEventListener('click', createListenerSlide(carouselElem)); // 클로져에 해당함; 왼쪽, 오른쪽 슬라이드버튼에 대해서 이벤트 리스너 등록 -> 모든 캐러셀에 대한 슬라이드 버튼에 대해 리스너를 등록함.
    }
}

function createListenerSlide(carouselElem) {
    // 클릭 이벤트가 발생했을 때 아래 함수가 호출된다. 
    // 호출되는 시점에 이벤트 발생 주체에게 event 객체를 넘긴다. 
    // 이벤트를 받으면, currentTarget은 현재 클릭한 버튼을 의미한다. 
    return function(event){
        var clickedButton = event.currentTarget;
        
        // 값 가져오기 
        var liElems = carouselElem.querySelectorAll('li'); // 모든 사진 객체 가져오기 
        var liCount = liElems.length; 
        var currentIndex = carouselElem.attributes.data.value; // 캐러셀의 속성의 data에서 value => 초기에는 0이 올 거지만; 즉 현재 보여지고 있는 이미지 인덱스 

        // 슬라이드 버튼 체크 
        if (clickedButton.className.includes('right') && currentIndex < liCount -1 ) {
            // class = "slide slide-right" 이런 걸 가져오는데, right라는 값을 포함하냐 == 오른쪽 버튼이냐 && 현재 값이 마지막 인덱스 값보다 작으면 
            currentIndex++; // 옆으로 넘기기 위해 +1
            scrollDiv(carouselElem, currentIndex); // 스크롤 조정하겠다. 현재 순번 3이면, 4로 조정하겠다. 
        } else if (clickedButton.className.includes('left') && currentIndex > 0) { //왼쪽으로 스크롤하는 거
            currentIndex--; 
            scrollDiv(carouselElem, currentIndex);
        }

        // 인디케이터 업데이트 필요 => updateIndicator()
        updateIndicator(carouselElem, currentIndex);

        // 슬라이드 버튼 보여줌 여부 업데이트 필요 
        updateSlideButtonVisible(carouselElem, currentIndex, liCount);

        // 새롭게 보여지는 이미지 인덱스 값을 현재 data 값으로 업데이트 
        carouselElem.attributes.data.value = currentIndex;
    }
}

function scrollDiv(carouselElem, nextIndex){
    var scrollable = carouselElem.querySelector('div'); // 현재 캐러셀 위치에서 div를 가져온다. (스크롤 가능 객체)
    var liWidth = scrollable.clientWidth; // 현재 div의 사이즈
    var newLeft = liWidth * nextIndex;

    scrollable.scrollTo({left: newLeft, behavior: 'smooth'});
}

function updateIndicator(carouselElem, currentIndex){
    var indicators = carouselElem.querySelectorAll("footer > div");
    for (var i=0; i<indicators.length; i++){
        if (currentIndex == i) {
            // 현재 인덱스랑 순번이 같으면 
            indicators[i].className = 'active';
        } else{
            indicators[i].className = '';
        }
    }
}

function updateSlideButtonVisible(carouselElem, currentIndex, liCount){
    var left = carouselElem.querySelector('.slide-left'); // 현재 캐러셀의 왼쪽 슬라이드 버튼 
    var right = carouselElem.querySelector('.slide-right');

    if (currentIndex > 0){ 
        // 왼쪽으로 더 갈 수 있게 되면 
        left.style.display = 'block';
    } else{
        left.style.display = 'none';
    }

    if (currentIndex < liCount -1) {
        // 오른쪽으로 더 갈 수 있다. 
        right.style.display = 'block';
    } else{
        right.style.display = 'none';
    }
}