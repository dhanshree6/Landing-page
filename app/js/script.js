!function ($) {
    "use strict";
    // *********************************************
    //     document ready start 🚩
    // ****************************
    //  console.log("Script loaded!");
   
    
    // Your Code 🗒️!function ($) {
    "use strict";
    // *********************************************
    //     document ready start 🚩
    // ****************************
     console.log("Script loaded!");
    $(document).ready(function () {
        // *********************************************
        //     Slider start 🚩
        // ****************************
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow:  `<button class="prev" type="button">←</button>`,
        nextArrow:   `<button class="next" type="button">→</button>`
});
    });

    // *********************************************
    //     Do not write your code below. ✋😠
    // ****************************
}.call(window, window.jQuery); // jquery initializer
