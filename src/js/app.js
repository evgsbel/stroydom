$('.js-hover-project').hover(function () {
    $('.project__hide').removeClass('is-active')
    $(this).find('.project__hide').toggleClass('is-active')
})

const arrow_prev = "<svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px'> <path fill-rule='evenodd'  fill='rgb(0, 0, 0)' d='M14.629,0.984 L16.197,2.614 L4.201,14.381 L30.012,14.381 L30.012,16.723 L4.341,16.723 L16.090,28.487 L14.633,29.985 L-0.015,15.519 L14.629,0.984 Z'/></svg>",
    arrow_next = "<svg xmlns='http://www.w3.org/2000/svg' width='31px' height='30px'><path fill-rule='evenodd'  fill='rgb(0, 0, 0)' d='M15.402,0.171 L13.834,1.802 L25.830,13.568 L0.019,13.568 L0.019,15.910 L25.690,15.910 L13.941,27.674 L15.399,29.172 L30.046,14.707 L15.402,0.171 Z'/></svg>"
    arrow_prev_green = "<svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px'> <path fill-rule='evenodd'  fill='#269b39' d='M14.629,0.984 L16.197,2.614 L4.201,14.381 L30.012,14.381 L30.012,16.723 L4.341,16.723 L16.090,28.487 L14.633,29.985 L-0.015,15.519 L14.629,0.984 Z'/></svg>",
    arrow_next_green = "<svg xmlns='http://www.w3.org/2000/svg' width='31px' height='30px'><path fill-rule='evenodd'  fill='#269b39' d='M15.402,0.171 L13.834,1.802 L25.830,13.568 L0.019,13.568 L0.019,15.910 L25.690,15.910 L13.941,27.674 L15.399,29.172 L30.046,14.707 L15.402,0.171 Z'/></svg>"

// main product slider
$(document).ready(function () {
    initialize_owl($('#owl-home'));

    let tabs = [
        {target: '#home', owl: '#owl-home'},
        {target: '#bath', owl: '#owl-bath'},
    ];

    // Setup 'bs.tab' event listeners for each tab
    tabs.forEach((tab) => {
        $(`button[href="${tab.target}"]`)
            .on('shown.bs.tab', () => initialize_owl($(tab.owl)))
            .on('hide.bs.tab', () => destroy_owl($(tab.owl)));
    });
});

function initialize_owl(el) {
    el.owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
        navContainerClass: 'slider-arrow__wrp',
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
}

function destroy_owl(el) {
    el.trigger('destroy.owl.carousel');
}

$('.js-stocks-slider').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="27px" height="70px"><path fill-rule="evenodd"  opacity="0.502" fill="rgb(255, 255, 255)" d="M4.341,36.723 L26.090,68.486 L24.633,69.984 L-0.015,35.519 L24.629,0.984 L26.197,2.614 L4.201,34.381 "/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="26px" height="70px"><path fill-rule="evenodd"  opacity="0.502" fill="rgb(255, 255, 255)" d="M21.690,36.723 L0.097,68.486 L1.544,69.984 L26.015,35.519 L1.547,0.984 L-0.010,2.614 L21.829,34.381 "/></svg>'],
    navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
    navContainerClass: 'slider-arrow__wrp',
});
$('.js-partners-slider').owlCarousel({
    loop: true,
    margin: 50,
    dots: false,
    nav: true,
    navText: [arrow_prev_green, arrow_next_green],
    navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
    navContainerClass: 'slider-arrow__wrp',
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
});

$(() => {
    var $range = $(".js-range-slider"),
        $inputFrom = $(".js-input-from"),
        $inputTo = $(".js-input-to"),
        instance,
        min = 0.1,
        max = 100,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        type: "double",
        min: 0.1,
        max: 150,
        from: 0.2,
        to: 100,
        step: 0.1,
        postfix: ' млн руб.',
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from * 10000000;
        to = data.to * 10000000;


        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
})
$(() => {
    var $range = $(".js-square-slider"),
        $inputFrom = $(".js-square-from"),
        $inputTo = $(".js-square-to"),
        instanceSq,
        min = 0,
        max = 2000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 2000,
        from: 50,
        to: 1500,
        step: 1,
        postfix: ' м<sup>2</sup>',
        onStart: updateSquare,
        onChange: updateSquare
    });
    instanceSq = $range.data("ionRangeSlider");

    function updateSquare(data) {
        from = data.from;
        to = data.to;


        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instanceSq.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instanceSq.update({
            to: val
        });
    });
})


