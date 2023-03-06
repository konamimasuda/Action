$(function(){
    // jQueryの記述

    //バーガーメニュー開閉
    $('#header__btn').on('click', function(){
        $(this).toggleClass('activeBtn');
        $('#gnav').toggleClass('panelActive');
        $('#instagramIcon, #twitterIcon').toggleClass('activeIcon');
    });
    $('#gnav, #instagramIcon, #twitterIcon').on('click', function(){
        $('#gnav').removeClass('panelActive');
        $('#header__btn').removeClass('activeBtn');
        $('#instagramIcon, #twitterIcon').removeClass('activeIcon');
    });




    //ここまで
});