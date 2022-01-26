let MainHeader2 = document.querySelector('.title2'),
    stage2 = 0,
    DefaultColor = "black";
function changeColor2() {
    stage2++;
    
    if (stage2 === 1) {
        MainHeader2.style.color = "red";
    };

    if (stage2 == 2) {
        MainHeader2.style.color = "blue";
    };

    if (stage2 == 3) {
        MainHeader2.style.color = "green";
    };

    if (stage2 == 4) {
        MainHeader2.style.color = "yellow";
    };

    if (stage2 == 5) {
        MainHeader2.style.color = "purple";
        stage2 = 0;
    };
    
}
function resetColor2() {
    stage2 = 0;
    MainHeader2.style.color = DefaultColor;
}