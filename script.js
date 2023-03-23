let n = 3;
let game = [];
let symbol = "x";
const board = document.querySelector(".board");

const cells = document.getElementsByClassName("cell");
const initGame = () => {
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${n}, auto)`;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            game.push("");
            board.innerHTML += `<div class="cell"></div>`;
        }
    }
    setStep();
}

const setStep = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", e => {
            e.currentTarget.classList.add(symbol);
            game[i] = symbol;
            checkWin(symbol);
            symbol = symbol === "x" ? "o" : "x";
        });
    }
}

initGame();

const checkWin = (char) => {
    let flag = true;
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            let num = i * n + j;
            if(game[num] === char) {
                cnt++;
            }
            // console.log(i, j, num);
        }
        if (cnt === n) {
            flag = false;
            break;
        }
    }

    for (let j = 0; j < n; j++) {
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            let num = i * n + j;
            // console.log(i, j, num);
            if(game[num] === char) {
                cnt++;
            }
        }
        if (cnt === n) {
            flag = false;
            break;
        }
    }

    // diag;
    let d1 = 0;
    for (let i = 0; i < n; i++) {
        let num = i * n + i;
        if (game[num] === char) {
            d1++;
        }
    }
    if (d1 === n) {
        flag = false;
    }

    let d2 = 0;
    for (let i = 0; i < n; i++) {
        let j = n - i - 1;
        let num = i * n + j;
        if (game[num] === char) {
            d2++;
        }
    }
    if (d2 === n) {
        flag = false;
    }

    if (!flag) {
        alert(char + " победил!");
    }
}