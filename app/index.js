// Load application styles
//import 'styles/index.css';

//showing 클래스를 가져와서
var SHOWING_CLASS = "showing";
//querySelector를 통해 slider__item 클래트스의 :first-child 첫번째 자식 태그를 가져오고
var firstSlide = document.querySelector(".slider__item:first-child");
var lastSlide = document.querySelector(".slider__item:last-child");
//그 자식태그에 만든 SHOWING_CLASS를 붙인다.
//firstSlide.classList.add(SHOWING_CLASS);

//다음 슬라이더로 옮기는 작업
function slide() {
  //만든 show 클래스를 가져오고
  var currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  //firstSlide.classList.add(SHOWING_CLASS);
  //currentSlide를 찾으면 showing을 없에고 ,
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    //다음슬라이드로 nextslide 명명 //5번은 다음없음 null로 리턴
    var nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      //5번은 next 없으므로 널이 나오면 1번이 다시 가져감
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
      //첫번째 슬라이드에 쇼잉 추가
    firstSlide.classList.add(SHOWING_CLASS);
  }
}
slide();
setInterval(slide, 3000);
var leftbtn = document.getElementById("left_btn");
leftbtn.addEventListener("click",function(){
  var currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    //다음슬라이드로 nextslide 명명 //5번은 다음없음 null로 리턴
    var nextSlide = currentSlide.previousElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      //5번은 next 없으므로 널이 나오면 1번이 다시 가져감
      lastSlide.classList.add(SHOWING_CLASS);
    }
  } else {
      //첫번째 슬라이드에 쇼잉 추가
    firstSlide.classList.add(SHOWING_CLASS);
  }
});
var rightbtn = document.getElementById("right_btn");
rightbtn.addEventListener("click",function(){
  var currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    //다음슬라이드로 nextslide 명명 //5번은 다음없음 null로 리턴
    var nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      //5번은 next 없으므로 널이 나오면 1번이 다시 가져감
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
      //첫번째 슬라이드에 쇼잉 추가
    firstSlide.classList.add(SHOWING_CLASS);
  }
});