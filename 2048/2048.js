const cell = document.querySelectorAll(`.cell`);
let cellLength = cell.length;

init();
function init() {
    for()
}

function randomNum() {
    ranPlace = Math.floor(Math.random() * cellLength);
    if(cell[ranPlace].innerHTML == 0) {
        cell[ranPlace].innerHTML = 2;
    }
    else {
        randomNum();
    }
}

function moveLeft() {

}

window.addEventListener("keydown", (e)=> {
    const keyCode = e.keyCode;
    if(keyCode == 37) {
        moveLeft();
        randomNum();
    }
    else if(keyCode == 38) {
        console.log("Up");
        randomNum();
    }
    else if(keyCode == 39) {
        console.log("right");
        randomNum();
    }
    else if(keyCode == 40) {
        console.log("down");
        randomNum();
    }
});

