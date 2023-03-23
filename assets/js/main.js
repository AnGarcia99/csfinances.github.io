$(function () {
    "use strict"
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if(scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky");
        }
    })
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })

    // VenoBox JS
    new VenoBox();

    // WOW JS
    new WOW().init();

    // Tiny Slider JS
    var slider = tns({
        container: '.testimonial-active',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        controlsText: ['<i class="fa-solid fa-angle-left prev"></i>', '<i class="fa-solid fa-angle-right next"></i>'],
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayButtonOutput: false,
        autoplayHoverPause: true
    });

    // Scrollit JS
    $.scrollIt();
});