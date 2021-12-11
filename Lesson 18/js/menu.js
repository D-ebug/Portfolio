var list = $('.burger', '.close-menu')
$(document).ready(function() {
    $('.burger').click(function(a) {
        $('.menu').toggleClass('open-menu');
        console.log("open")
        a.preventDefault()
    });
});
$(document).ready(function() {
    $('.close-menu').click(function(a) {
        $('.menu').toggleClass('open-menu');
        console.log("close")
        a.preventDefault()
    });
});