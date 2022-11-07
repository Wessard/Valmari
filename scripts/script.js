const headerTimerExtra = document.querySelector('.header__timer-span');
const headerTimerExtrasec = document.querySelector('.header__timer-span2');
const headerTimerExtraThird = document.querySelector('.header__timer-span3');
const headerTimerExtraFour = document.querySelector('.header__timer-span4');
let speed = 40;

function level(i = 3950) {
    headerTimerExtra.innerHTML = i;
    i++
    if(i <= 4000) {
        setTimeout(() => {
            level(i)
        } , speed)
    }
} 
level()
function level2(i = 3450) {
    headerTimerExtrasec.innerHTML = i;
    i++
    if(i <= 3500) {
        setTimeout(() => {
            level2(i)
        } , speed)
    }
} 
level2()
function level3(i = 1450) {
    headerTimerExtraThird.innerHTML = i;
    i++
    if(i <= 1500) {
        setTimeout(() => {
            level3(i)
        } , speed)
    }
} 
level3()
function level4(i = 5450) {
    headerTimerExtraFour.innerHTML = i;
    i++
    if(i <= 5500) {
        setTimeout(() => {
            level4(i)
        } , speed)
    }
} 
level4()

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1200,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:'true',
      dynamicBullets:'true',
      slideToClickedSlide:'true',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
