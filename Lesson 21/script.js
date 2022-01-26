let MainHeader = document.querySelector('.title'),
    stage = 0;

function changeColor() {
    stage++;
    if (stage == 1) {
        if (MainHeader.classList.contains("purple") == true)
            MainHeader.classList.remove("purple");
        MainHeader.classList.add("red");        
    };

    if (stage == 2) {
        MainHeader.classList.remove("red");
        MainHeader.classList.add("blue");
    };
    
    if (stage == 3) {
        MainHeader.classList.remove("blue");
        MainHeader.classList.add("green");
    };

    if (stage == 4) {
        MainHeader.classList.remove("green");
        MainHeader.classList.add("yellow");
    };

    if (stage == 5) {
        MainHeader.classList.remove("yellow");
        MainHeader.classList.add("purple");
        stage = 0;
    };

}

function resetColor() {
    stage = 0;
    MainHeader.classList.remove("red");
    MainHeader.classList.remove("blue");
    MainHeader.classList.remove("green");
    MainHeader.classList.remove("yellow");
    MainHeader.classList.remove("purple");
}