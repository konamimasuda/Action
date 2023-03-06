$(function(){
    // jQueryの記述

    //resize header
    $(window).on('scroll', function(){

        const ST = $(window).scrollTop();
        const MV = $('#mv').height();

        if (ST > MV) {
            $('.header__link, .gnav__link').addClass('changeColor');
            $('#btn').addClass('changeBg');
            $('#btn__top, #btn__bottom').addClass('changeLine');
            
        } else {
            $('.header__link, .gnav__link').removeClass('changeColor');
            $('#btn').removeClass('changeBg');
            $('#btn__top, #btn__bottom').removeClass('changeLine');
        }

    });

    //humbarger menu
    $('#btn').on('click', function(){
        $(this).toggleClass('activeBtn');
        $('#btn__top').toggleClass('rotateTop');
        $('#btn__bottom').toggleClass('rotateBottom');
        $('#slide').toggleClass('showSlide');
        
        $('.slide, .main').on('click', function(){
            $('#btn').removeClass('activeBtn');
            $('#btn__top').removeClass('rotateTop');
            $('#btn__bottom').removeClass('rotateBottom');
            $('#slide').removeClass('showSlide');
        });
    });

    //smooth scroll
    $('.gnav__link').on('click', function(){
        
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;

        $('html, body').animate({scrollTop:targetPos}, 900);
    });

    $('.header__link, .footer__link').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 900);
    });

    //modal window
    $('.news__link').on('click', function(){
        
        const modal = $(this).attr('data-modal');
        
        $(modal).fadeIn(600, function() {
            $(this).on('click', function() {
                console.log('hello');
                $(this).fadeOut(600);
            });

            $('.modal__link').on('click', function(clickEvent){
                clickEvent.stopPropagation();
            });
        });

        return false;
    });

    
    $(window).on('scroll', function(){
        const windowHeight = $(window).innerHeight();
        const ST = $(window).scrollTop();

        $('.fadeIn').each(function(){
            const target =  $(this).offset().top;

            if(ST > target - windowHeight*0.9) {
                $(this).addClass('showElement');
            } else {
                $(this).removeClass('showElement');
            }
        });
    });

    //ここまで
});