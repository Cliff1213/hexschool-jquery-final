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
            // ?新手不會看官方文檔最好是知道點擊後中斷輪播效果的問題在這裡...
            disableOnInteraction: false,
            delay: 3000,
        },
    });
})