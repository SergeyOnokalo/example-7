new Swiper ('.characters__slider',{
  // slidesPerView:3.8,
  // freeMode:true,
  // slidesPerGroup:1,
  wrapperClass:"characters__slider-wrapper",
  slideClass:"characters__slider-item",
  direction:"horizontal",
  slidesPerView:'auto',
  // spaceBetween:40,
  breakpoints: {
    900: {
      spaceBetween:20,
    },
    1400: {
      spaceBetween:40,
    },
  },
  nested:true,
})
new Swiper ('.footer__slider',{
  slidesPerView:3.8,
  slidesPerGroup:1,
  spaceBetween:40,
  nested:true,
})
new Swiper ('.map__slider',{
  slidesPerView:'auto',
  freeMode:true,
  nested:true,
  // spaceBetween:40,
})




function setScrollType(){

  if (window.innerHeight > 1300){
    document.querySelector('.swiper-wrapper-0').classList.remove('arrows')

    document.querySelector('.swiper-contai').classList.remove('swiper-container-0')
    document.querySelector('.slider__wrapper').classList.remove('swiper-wrapper-0')
    // document.querySelector('.slider__wrapper').classList.remove('slider__wrapper')
    document.querySelector('.slider__scr1').classList.add('slider__wrapper--active')
    document.querySelector('.slider__scr1').classList.remove('slider__screen-0')
    document.querySelector('.slider__scr2').classList.add('slider__wrapper--active')
    document.querySelector('.slider__scr2').classList.remove('slider__screen-0')
    document.querySelector('.slider__scr3').classList.add('slider__wrapper--active')
    document.querySelector('.slider__scr3').classList.remove('slider__screen-0')
    document.querySelector('.slider__scr4').classList.add('slider__wrapper--active')
    document.querySelector('.slider__scr4').classList.remove('slider__screen-0')
    document.querySelector('.slider__scr5').classList.add('slider__wrapper--active')
    document.querySelector('.slider__scr5').classList.remove('slider__screen-0')
    document.querySelector('.slider__scr6').classList.add('slider__wrapper--active')
    document.querySelector('.slider__scr6').classList.remove('slider__screen-0')
    
    // document.querySelector('.swiper-buutton-next1').classList.add('display-none')
    // document.querySelector('.swiper-buutton-next2').classList.add('display-none')
    // document.querySelector('.swiper-buutton-prev2').classList.add('display-none')
    // document.querySelector('.swiper-buutton-next3').classList.add('display-none')
    // document.querySelector('.swiper-buutton-prev3').classList.add('display-none')
    // document.querySelector('.swiper-buutton-next4').classList.add('display-none')
    // document.querySelector('.swiper-buutton-prev4').classList.add('display-none')
    // document.querySelector('.swiper-buutton-next5').classList.add('display-none')
    // document.querySelector('.swiper-buutton-prev5').classList.add('display-none')
    // document.querySelector('.swiper-buutton-prev6').classList.add('display-none')
  }
  if (window.innerHeight < 1300){
    new Swiper ('.swiper-container-0',{
      wrapperClass:"swiper-wrapper-0",
      slideClass:"slider__screen-0",
      direction:"vertical",
      slidesPerView:'auto',
      navigation:{
        nextEl:'.swiper-buutton-next',
        prevEl:'.swiper-buutton-prev',
      },
      keyboard:{
        enebled:true,
        onlyInViewport:true,
        pageUpDown:true,
      },
      mousewheel:{
        sensitivity:1,
      },
      speed:800,
      observer:true,
      observeParents:true,
      observeSlideChildren:true,
      // on:{
      //   init: function(){
      //     setScrollType()
      //   },
      //   resize: function(){
      //     setScrollType()
      //   },
      // },
    })
  }
}
setScrollType()