$('document').ready(function() {
    // swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        autoplay: {
            // ?誰會知道點擊後中斷輪播效果的問題在這裡啦...
            disableOnInteraction: false,
            delay: 3000,
        },
    });

    // lightbox
    lightbox.option({
        'resizeDuration': 1200,
        'wrapAround': true
    })

    // navbar slideDown
    $('.navbar-products > a').click(function(e) {
        e.preventDefault();

        $('.navbar-products ul').slideToggle(300);
        $('.navbar-products-btn').toggleClass('active');
    })

    // scroll to footer-contact
    $('.navbar-contact-btn').click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('#contact').offset().top}, 300);
    });

    // back2top
    $('.back-to-top').click(function(e) {
        e.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
    })

})