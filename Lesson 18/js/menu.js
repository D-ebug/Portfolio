$(document).ready(function() {
    $('.menu-open').click(function(a) {
        $('.menu').toggleClass('open-menu');
        console.log("open")
        a.preventDefault()
    });
    $('.close-menu').click(function(a) {
        $('.menu').toggleClass('open-menu');
        console.log("close")
        a.preventDefault()
    });
});