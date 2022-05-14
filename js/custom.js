new WOW().init();

$(document).ready(function () {
    $('.menu-icon').click(function () {
        $('.side-nav, .menu-bar').toggleClass('add-menu');
        $('.menu-bg').toggleClass('menu-bg-show');
    });
});


$(document).ready(function () {
    $('.nav-list a').click(function () {
        $('.side-nav, .menu-bar').removeClass('add-menu');
        $('.menu-bg').removeClass('menu-bg-show');
    });
});





$(document).ready(function () { 
    $(Window).on('scroll', function () {
        if ($(window).scrollTop() > 100){
            $('.header-bg-sticky').addClass('sticky');
        }
        else {
            $('.header-bg-sticky').removeClass('sticky');
        }
    });
});



$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
        scro = (scroll / (dh - wh)) * 0;
        $('#progressbar').css('height', scro + '%');
    });
});


// $(document).ready(function () {
//     $("#nav-icon3, .sticky-icon").click(function () {
//         $("#nav-icon3, .sticky-icon").toggleClass('open');
//     });
// });

$(document).ready(function () {
    $('.nav-list').click(function(){
        $(this).scrollTop(1500);
    });
});

// window.oncontextmenu = (e) => {
//     e.preventDefault();
// }


// $(document).keydown(function (event) {
//     // Prevent F12 -
//     if (event.keyCode == 123) {
//         return false;
//     }
//     // Prevent Ctrl+a = disable select al
//     // Prevent Ctrl+u = disable view page source
//     // Prevent Ctrl+s = disable save
//     if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 83 || event.keyCode === 65)) {
//         return false;
//     }
//     // Prevent Ctrl+Shift+I = disabled debugger console using keys open
//     else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
//         return false;
//     }
// });

$(document).ready(function(){
    $('.sub-none, .sub-btn').click(function(){
        $('.message').addClass('mes-show');
    });
    $('.ok-btn').click(function(){
        $('.message').removeClass('mes-show');
    });
});


