const line1 = document.querySelectorAll('#line1 div');
const line2 = document.querySelectorAll('#line2 div');
const line3 = document.querySelectorAll('#line3 div');
const line4 = document.querySelectorAll('#line4 div');



const scoreSpan = document.getElementById('score');
const buttonPlay = document.getElementById('play');

let game = Array.from(line1).concat(Array.from(line2), Array.from(line3), Array.from(line4));

function gameEnd() {
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
    if (!gameEnd()) {
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

function moveRight() {
    console.log('help')
    for (let i = 0; i > 4; i++) {
        console.log('test0')
        if (line1[i].innerText !== '') {
            console.log('test1')
            if (line1[i + 1] !== undefined) {
                console.log('test2')
                if (line1[i + 1].innerText === '') {
                    console.log('test3')
                    line1[i + 1].innerText = line1[i].innerText;
                    line1[i].innerText = '';
                    line1[i].style.backgroundColor = "#fbfafa";
                }
            }
        }
    }
}

buttonPlay.addEventListener("click", () => {
    newNumber();
});

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
            console.log('down');
            break
        case '2':
            console.log('down');
            break
        case 'ArrowDown':
            console.log('down');
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
            moveRight()
            console.log('right');
            break
        case '6':
            console.log('right');
            break
        case 'ArrowRight':
            console.log('right');
            break
    }
})
