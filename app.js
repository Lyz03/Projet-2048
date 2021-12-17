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
function moveRightOrUp(array) {
    b = 0;
    for (let i = 0; i < 4; i++) {
        if (array[i].innerText !== '' && array[i + 1] !== undefined) {

            if (array[i + 1].innerText === array[i].innerText && b === 0) {
                b++;
                array[i + 1].innerText = (parseInt(array[i].innerText) * 2).toString();
                array[i].innerText = '';
                array[i].style.backgroundColor = "#fbfafa";
            } else if (array[i + 1].innerText === '') {
                array[i + 1].innerText = array[i].innerText;
                array[i + 1].style.backgroundColor = array[i].style.backgroundColor;
                array[i].innerText = '';
                array[i].style.backgroundColor = "#fbfafa";
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
        moveRightOrUp(line1);
        moveRightOrUp(line2);
        moveRightOrUp(line3);
        moveRightOrUp(line4);
    }
    if (column) {
        moveRightOrUp(column1);
        moveRightOrUp(column2);
        moveRightOrUp(column3);
        moveRightOrUp(column4);
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
            console.log('up');
            break
        case '8':
            console.log('up');
            break
        case 'ArrowUp':
            console.log('up');
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
            console.log('left');
            break
        case '4':
            console.log('left');
            break
        case 'ArrowLeft':
            console.log('left');
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
