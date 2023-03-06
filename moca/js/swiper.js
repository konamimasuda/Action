//const 変数名 = new Swiper('スライダーのクラス名', {});
//初期化処理。Sは大文字で記述する。

const swiperMv = new Swiper('.swiper__mv', {

    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    slidePerView: 1,
    centerSlides: true,


    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },

    pagination: {
        el: '.swiper__mv--pagination',
        type: 'bullets',
        clickable: true,
    },

});

const swiperTopic = new Swiper('.swiper__topic',{

    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    slidePerView: 1,
    centerSlides: true,


    speed: 800,
    autoplay: {
        delay: 4700,
        disableOnInteraction: true,
    },

    pagination: {
        el: '.swiper__topic--pagination',
        type: 'bullets',
        clickable: true,
    },
});

