$(function(){
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: false,
        // mousewheel: {
        //     invert: false
        // },
        speed: 300,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    $('.page_btn li').click(function(){
        var num = $(this).index();
        console.log(num);
        if(num==0){
            $('body,html').animate({'scrollTop':0},1000);
        }else if(num==1){
            $('body,html').animate({'scrollTop':1150},1000);
        }else if(num==2){
            $('body,html').animate({'scrollTop':2260},1000);
        }else if(num==3){
            $('body,html').animate({'scrollTop':3330},1000);
        }else if(num==4){
            $('body,html').animate({'scrollTop':4400},1000);
        }
    });

    var html = $('.html').innerWidth()/700*100;
    var css = $('.css').innerWidth()/700*100;
    var js = $('.js').innerWidth()/700*100;
    var jq = $('.jq').innerWidth()/700*100;
    var ps = $('.ps').innerWidth()/700*100;
    var ai = $('.ai').innerWidth()/700*100;

    $('.html').animate({width:"0%"},0).delay(3000).animate({width:"95%"},2000);
    // $('.html').text(html + "%");

    $('.css').animate({width:"0%"},0).delay(3000).animate({width:"90%"},2000);
    // $('.css').text(css + "%");

    $('.js').animate({width:"0%"},0).delay(3000).animate({width:"70%"},2000);
    // $('.js').text(js + "%");

    $('.jq').animate({width:"0%"},0).delay(3000).animate({width:"85%"},2000);
    // $('.jq').text(jq + "%");

    $('.ps').animate({width:"0%"},0).delay(3000).animate({width:"90%"},2000);
    // $('.ps').text(html + "%");

    $('.ai').animate({width:"0%"},0).delay(3000).animate({width:"80%"},2000);
    // $('.ai').text(ai + "%");
});


