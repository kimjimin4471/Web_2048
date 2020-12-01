const cell = document.querySelectorAll(`.cell`);
let cellLength = cell.length;
let maxScore = 0;
let score = document.querySelector('#score');

let board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

init();
//게임의 초기 세팅을 해주는 함수
function init() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
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
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(board[i][j] > maxScore) {
                maxScore = board[i][j];
            }
            cell[cnt].innerHTML = board[i][j] == 0 ? "" : board[i][j];
            coloring(cnt);
            cnt++;
        }
    }
    SetScore();
}

//점수를 세팅해줌
function SetScore() {
    score.innerHTML = "Score : " + maxScore;
}

//값에 따라 색을 바꿔주는 함수
function coloring(cnt) { 
    switch(cell[cnt].innerHTML) {
        case "2":
            cell[cnt].style.backgroundColor = "#684A23";
            cell[cnt].style.color = "#FBEDDC";
            break;
        case "4":
            cell[cnt].style.backgroundColor = "#684A23";
            cell[cnt].style.color = "#F9E2C7";
            break;
        case "8":
            cell[cnt].style.backgroundColor = "#684A23";
            cell[cnt].style.color = "#F6D5AB";
            break;    
        case "16":
            cell[cnt].style.backgroundColor = "#684A23";
            cell[cnt].style.color = "#F2C185";
            break;
        case "32":
            cell[cnt].style.backgroundColor = "#684A23";
            cell[cnt].style.color = "#EFB46D";
            break;
        case "64":
            cell[cnt].style.backgroundColor = "#FFFFFF";
            cell[cnt].style.color = "#EBA24A";
            break;
        case "128":
            cell[cnt].style.backgroundColor = "#FFFFFF";
            cell[cnt].style.color = "#E78F24";
            break;
        case "256":
            cell[cnt].style.backgroundColor = "#FFFFFF";
            cell[cnt].style.color = "#E87032";
            break;
        case "512":
            cell[cnt].style.backgroundColor = "#FFFFFF";
            cell[cnt].style.color = "#E85532";
            break;
        case "1024":
            cell[cnt].style.backgroundColor = "#FFFFFF";
            cell[cnt].style.color = "#E84532";
            break;
        case "2048":
            cell[cnt].style.backgroundColor = "#FFFFFF";
            cell[cnt].style.color = "#E83232";
            break;
        default:
            if(cell.innerHTML > 2048) {
                cell[cnt].style.backgroundColor = "#FFFFFF";
                cell[cnt].style.color = "#E51A1A";
            }
            else {
                cell[cnt].style.backgroundColor = "#684A23";
                cell[cnt].style.color = "#FBEDDC";
            }    
    }
}

function randomNum() {
    ranPlaceX = Math.floor(Math.random() * 4);
    ranPlaceY = Math.floor(Math.random() * 4);
    if(board[ranPlaceX][ranPlaceY] == 0) {
        board[ranPlaceX][ranPlaceY] = 2;
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

