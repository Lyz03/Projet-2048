const line1 = document.querySelectorAll('#line1 div');
const line2 = document.querySelectorAll('#line2 div');
const line3 = document.querySelectorAll('#line3 div');
const line4 = document.querySelectorAll('#line4 div');

let game = Array.from(line1).concat(Array.from(line2), Array.from(line3), Array.from(line4));


const scoreSpan = document.getElementById('score');
const buttonPlay = document.getElementById('play');

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
    let randomNumber = Math.round(Math.random() * 100);
    const randomC = randomCase(game);
    let div = game[randomC];

    if (randomNumber >= 95) {
        div.innerText = "4";
        div.style.backgroundColor = "#dcbbd9";
    } else {
        try {
            div.innerText = "2"
            div.style.backgroundColor = "#e4bacd"
        }
        catch (e) {

        }
    }

}

buttonPlay.addEventListener("click", () => {
    newNumber();
});
