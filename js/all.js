$('document').ready(function() {
    $('.back-to-top').click(function(e) {
        e.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
    })

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
})