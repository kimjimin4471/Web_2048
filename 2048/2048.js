const cell = document.querySelectorAll(`.cell`);
let cellLength = cell.length;
let board=new Array(6);
const scoreText = document.querySelector('#score');

let score = 0;

let overCheck = 1;
let numCheck = 1;

for(let i=0;i<6;i++){
    board[i]=new Array(6);
}

for(let i = 0; i < 6; i++) {
    for(let j = 0; j < 6; j++) {
        if(i == 0 || j == 0 || i == 5 || j == 5) {
            board[i][j] = 1;
        }
    }
}

console.log(board);
init();
//게임의 초기 세팅을 해주는 함수
function init() {
    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 5; j++) {
            board[i][j] = 0;
        }
    }
    randomNum();
    randomNum();
    update();
}

//행동을 할 때 마다 보이는 부분을 바꾸는 함수
function update() {  
    let cnt = 0;
    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 5; j++) {
            cell[cnt].innerHTML = board[i][j] == 0 ? "" : board[i][j];
            coloring(cnt);
            cnt++;
        }
    }
    setScore();
}

function setScore() {
    scoreText.innerHTML = "Score : " + score;
}

//값에 따라 색을 바꿔주는 함수
function coloring(cnt) { 
    cell[cnt].style.border = "solid black 1px";
    switch(cell[cnt].innerHTML) {
        case "2":
            cell[cnt].style.backgroundColor = "#0278AE";
            break;
        case "4":
            cell[cnt].style.backgroundColor = "#51ADCF";
            break;
        case "8":
            cell[cnt].style.backgroundColor = "#3D72A6";
            break;    
        case "16":
            cell[cnt].style.backgroundColor = "#7579E7";
            break;
        case "32":
            cell[cnt].style.backgroundColor = "#9AB3F5";
            break;
        case "64":
            cell[cnt].style.backgroundColor = "#B088F9";
            break;
        case "128":
            cell[cnt].style.backgroundColor = "#c4fb6d";
            break;
        case "256":
            cell[cnt].style.backgroundColor = "#0be881";
            break;
        case "512":
            cell[cnt].style.backgroundColor = "#34e7e4";
            break;
        case "1024":
            cell[cnt].style.backgroundColor = "#cd84f1";
            break;
        case "2048":
            cell[cnt].style.backgroundColor = "#F8EFBA";
            break;
        default:
            if(cell.innerHTML > 2048) {
                cell[cnt].style.backgroundColor = "#7d5fff";
            }
            else {
                cell[cnt].style.backgroundColor = "#808e9b";
            }    
    }
}

function randomNum() {
    ranPlaceX = Math.floor(Math.random() * 4 + 1);
    ranPlaceY = Math.floor(Math.random() * 4 + 1);
    if(board[ranPlaceX][ranPlaceY] == 0) {
        board[ranPlaceX][ranPlaceY] = 2;
    }
    else {
        randomNum();
    }
    update();
}

function moveLeftNum() {
    let k;

    numCheck = 1

    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 5; j++) {
            if(board[i][j] != 0) {
                k = j;
                while(1) {
                    if(board[i][k-1] != 0) {
                        break;
                    }
                    board[i][k-1] = board[i][k];
                    board[i][k] = 0;
                    k--;
                    numCheck = 0;
                }
            }
        }
    }
}

function moveLeft() {
    gameOver();
    moveLeftNum();

    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 4; j++) {
            if(board[i][j] == board[i][j+1] && board[i][j] != 0) {
                score += board[i][j];
                board[i][j] *= 2;
                board[i][j+1] = 0;
            }
        }
    }
    if(!numCheck) {
        moveLeftNum();
        randomNum();
        update();
    }
}

function moveUpNum() {
    let k;

    numCheck = 1;

    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 5; j++) {
            if(board[j][i] != 0) {
                k = j;
                while(1) {
                    if(board[k-1][i] != 0) {
                        break;
                    }
                    board[k-1][i] = board[k][i];
                    board[k][i] = 0;
                    k--;
                    numCheck = 0;
                }
            }
        }
    }
}

function moveUp() {
    gameOver();
    moveUpNum();

    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 4; j++) {
            if(board[j][i] == board[j+1][i] && board[j][i] != 0) {
                score += board[j][i];
                board[j][i] *= 2;
                board[j+1][i] = 0;
            }
        }
    }
    if(!numCheck) {
        moveUpNum();
        randomNum();
        update();
    }
}

function moveRightNum() {
    let k;

    numCheck = 1;

    for(let i = 1; i < 5; i++) {
        for(let j = 4; j > 0; j--) {
            if(board[i][j] != 0) {
                k = j;
                while(1) {
                    if(board[i][k+1] != 0) {
                        break;
                    }
                    board[i][k+1] = board[i][k];
                    board[i][k] = 0;
                    k++;
                    numCheck = 0;
                }
            }
        }
    }
}

function moveRight() {
    gameOver();
    moveRightNum();

    for(let i = 1; i < 5; i++) {
        for(let j = 4; j >1; j--) {
            if(board[i][j] == board[i][j-1] && board[i][j] != 0) {
                score += board[i][j];
                board[i][j] *= 2;
                board[i][j-1] = 0;
            }
        }
    }
    if(!numCheck) {
        moveRightNum();
        randomNum();
        update();
    }
}

function moveDownNum() {
    let k;

    numCheck = 1;

    for(let i = 1; i < 5; i++) {
        for(let j = 4; j > 0; j--) {
            if(board[j][i] != 0) {
                k = j;
                while(1) {
                    if(board[k+1][i] != 0) {
                        break;
                    }
                    board[k+1][i] = board[k][i];
                    board[k][i] = 0;
                    k++; 
                    numCheck = 0;
                }
            }
        }
    }
}

function moveDown(){
    gameOver();
    moveDownNum();

    for(let i = 1; i < 5; i++) {
        for(let j = 4; j > 1; j--) {
            if(board[j][i] == board[j-1][i] && board[j][i] != 0) {
                score += board[j][i];
                board[j][i] *= 2;
                board[j-1][i] = 0;
            }
        }
    }
    if(!numCheck) {     
        moveDownNum();
        randomNum();
        update();
    }
}

function rowCheck() {
    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 4; j++) {
            if(board[i][j] == board[i][j+1]) {
                overCheck = 0;
            }
        }
    }
}

function columnCheck() {
    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 4; j++) {
            if(board[j][i] == board[j+1][i]) {
                overCheck = 0;
            }
        }
    }
}

function gameOver() {
    let fullCheck = 1;

    for(let i = 1; i < 5; i++) {
        for(let j = 1; j < 5; j++) {
            if(board[i][j] == 0) {
                fullCheck = 0;
            }
        }
    }
    rowCheck();
    columnCheck();
    if(fullCheck && overCheck) {
        alert("Gameover");
        window.location.reload();
    }

    overCheck = 1;
}

window.addEventListener("keydown", (e)=> {
    const keyCode = e.keyCode;
    if(keyCode == 37) {
        moveLeft();
    }
    else if(keyCode == 38) {
        moveUp();
    }
    else if(keyCode == 39) {
        moveRight();
    }
    else if(keyCode == 40) {
        moveDown();
    }
});

