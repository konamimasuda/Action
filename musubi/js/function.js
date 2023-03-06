$(function(){
    // jQueryの記述

    $(window).on('scroll', function(){

        const pack = $('#header__pack').offset().top;
        const about = $('#about').offset().top;
        const mv = $('#mv').height();
        const menu = $('#header__burgermenu').offset().top;
        
        if (pack > about) {
            $('.header__insta, .header__linktop').addClass('changeBlack');
            $('.header__svg').addClass('changePathColor');
        } else {
            $('.header__insta, .header__linktop').removeClass('changeBlack');
            $('.header__svg').removeClass('changePathColor');
        }


        if (menu > mv) {
            $('#header__burgermenu').addClass('changeMenuColor');
            $('#header__top, #header__middle, #header__bottom').addClass('changeBorders');
        } else {
            $('#header__burgermenu').removeClass('changeMenuColor');
            $('#header__top, #header__middle, #header__bottom').removeClass('changeBorders');
        };
    });


    $('.gnav__link, .slide__link').on('click', function(){

        const target = $(this).attr('href');
        const targetPos = $(target).offset().top-80;

        $('html, body').animate({scrollTop: targetPos}, 800);
        
        return false;
    });
    
    $('.header__linktop, .header__link, .footer__link').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 800);
    });
    

    $('#header__burgermenu').on('click', function(){
        
        $(this).toggleClass('changeColor');
        $('#header__top').toggleClass('rotateTop');
        $('#header__middle').toggleClass('hideMiddle');
        $('#header__bottom').toggleClass('rotateBottom');
        $('#slide').toggleClass('showNav');
        
        $('.slide__link, .header__link, .slide, .main').on('click', function(){
            $('#header__burgermenu').removeClass('changeColor');
            $('#header__top').removeClass('rotateTop');
            $('#header__middle').removeClass('hideMiddle');
            $('#header__bottom').removeClass('rotateBottom');
            $('#slide').removeClass('showNav');
        });
    });

    //ここまで
});