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
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
})