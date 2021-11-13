let d = document;
let w = window;
let y = w.pageYOffset
let ret = d.getElementById("return")
w.onscroll = function() {
    console.log(y)
}
ret.onclick = function(y) {
    if (y != 0){
        window.scrollTo(y, 0);
    }
};
