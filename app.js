const line1 = document.querySelectorAll('#line1 div');
const line2 = document.querySelectorAll('#line2 div');
const line3 = document.querySelectorAll('#line3 div');
const line4 = document.querySelectorAll('#line4 div');

const column1 = document.querySelectorAll(".div0");
const column2 = document.querySelectorAll(".div1");
const column3 = document.querySelectorAll(".div2");
const column4 = document.querySelectorAll(".div3");

const scoreSpan = document.getElementById('score');
const buttonPlay = document.getElementById('play');

let game = Array.from(line1).concat(Array.from(line2), Array.from(line3), Array.from(line4));

function gameFull() {
    let a = 0;
    game.forEach(value => {
        if (value.innerText !== '')
            a++
    })
    return a === 16;
}

/**
 * change background color following the number
 * @param div
 */
function changeColor(div) {
    switch (div.innerText) {
    }
}

// pick a random case
function randomCase(g) {
    const randomCaseIndex = Math.floor(Math.random() * g.length);
    if (g[randomCaseIndex].innerText === '') {
        return randomCaseIndex;
    } else {
        return randomCase(g);
    }
}

// add 2 or 4
function newNumber() {
    if (!gameFull()) {
        let randomNumber = Math.round(Math.random() * 100);
        const randomC = randomCase(game);
        let div = game[randomC];

        if (randomNumber >= 95) {
            div.innerText = "4";
            div.style.backgroundColor = "#dcbbd9";
        } else {
            div.innerText = "2"
            div.style.backgroundColor = "#e4bacd"
        }
    }
}

let b = 0
/**
 * move right/down for each line/column
 * @param array
 */
function moveRightOrDown(array) {
    for (let j = 0;  j <= 3; j++) {
        b = 0;
        for (let i = 0; i < 4; i++) {
            if (array[i].innerText !== '' && array[i + 1] !== undefined) {

                if (array[i + 1].innerText === array[i].innerText && b === 0) {
                    b++;
                    array[i + 1].innerText = (parseInt(array[i].innerText) * 2).toString();
                    array[i].innerText = '';
                    array[i].style.backgroundColor = "#fbfafa";
                }
                if (array[i + 1].innerText === '') {
                    array[i + 1].innerText = array[i].innerText;
                    array[i + 1].style.backgroundColor = array[i].style.backgroundColor;
                    array[i].innerText = '';
                    array[i].style.backgroundColor = "#fbfafa";
                }
                changeColor(array[i]);
            }
        }
    }
}

/**
 * run move right or down for each line or column
 * @param line
 * @param column
 */
function runMoveRightOrDown (line, column) {
    if (line) {
        moveRightOrDown(line1);
        moveRightOrDown(line2);
        moveRightOrDown(line3);
        moveRightOrDown(line4);
    }
    if (column) {
        moveRightOrDown(column1);
        moveRightOrDown(column2);
        moveRightOrDown(column3);
        moveRightOrDown(column4);
    }

    newNumber();
}

let c = 0;
/**
 * move left/up for each line/column
 * @param array
 */
function moveLeftOrUp(array) {
    for (let j = 0;  j <= 3; j++) {
        c = 0;
        for (let i = 3; i >= 0; i--) {
            if (array[i].innerText !== '' && array[i - 1] !== undefined) {

                if (array[i - 1].innerText === array[i].innerText && c === 0) {
                    c++;
                    array[i - 1].innerText = (parseInt(array[i].innerText) * 2).toString();
                    array[i].innerText = '';
                    array[i].style.backgroundColor = "#fbfafa";
                }
                if (array[i - 1].innerText === '') {
                    array[i - 1].innerText = array[i].innerText;
                    array[i - 1].style.backgroundColor = array[i].style.backgroundColor;
                    array[i].innerText = '';
                    array[i].style.backgroundColor = "#fbfafa";
                }
            }
        }
    }
}

/**
 * run move left or up for each line or column
 * @param line
 * @param column
 */
function runMoveLeftOrUp (line, column) {
    if (line) {
        moveLeftOrUp(line1);
        moveLeftOrUp(line2);
        moveLeftOrUp(line3);
        moveLeftOrUp(line4);
    }
    if (column) {
        moveLeftOrUp(column1);
        moveLeftOrUp(column2);
        moveLeftOrUp(column3);
        moveLeftOrUp(column4);
    }

    newNumber();
}

buttonPlay.addEventListener("click", () => {
    newNumber();
});

// Keyboard event
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        // up
        case 'z':
            runMoveLeftOrUp(false, true);
            break
        case '8':
            runMoveLeftOrUp(false, true);
            break
        case 'ArrowUp':
            runMoveLeftOrUp(false, true);
            break
        // down
        case 's':
            runMoveRightOrDown(false, true);
            break
        case '2':
            runMoveRightOrDown(false, true);
            break
        case 'ArrowDown':
            runMoveRightOrDown(false, true);
            break
        // left
        case 'q':
            runMoveLeftOrUp(true, false);
            break
        case '4':
            runMoveLeftOrUp(true, false);
            break
        case 'ArrowLeft':
            runMoveLeftOrUp(true, false);
            break
        // right
        case 'd':
            runMoveRightOrDown(true, false);
            break
        case '6':
            runMoveRightOrDown(true, false);
            break
        case 'ArrowRight':
            runMoveRightOrDown(true, false);
            break
    }
})
