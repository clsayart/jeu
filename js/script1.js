import { slides } from "./data.js";

let cardOneIndex = 0;
let cardOneClicked = 0;
let cardTwoIndex = 1;

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
card1.innerHTML = slides[cardOneIndex].question;
card2.innerHTML = slides[cardTwoIndex].question;

function updateCards(array) {
    cardOneIndex += 2;
    cardTwoIndex += 2;

    if (cardOneIndex >= array.length) {
        endgame()
    }
    else {
        card1.innerHTML = slides[cardOneIndex].question;
        card2.innerHTML = slides[cardTwoIndex].question;
    }
}

const btnCardOne = document.getElementById("btn-card1");
const btnCardTwo = document.getElementById("btn-card2");


btnCardOne.addEventListener('click', function (event) {
    updateCards(slides)
    cardOneClicked++;
    document.querySelector('#wrapper-glass').classList.remove("fixe")
    document.querySelector('#wrapper-glass').classList.add("ball")
    stopAnimation()
    focusOffCardOne()
});

btnCardTwo.addEventListener('click', function (event) {
    updateCards(slides)
    focusOffCardTwo()
});

function endgame() {
    if (cardOneClicked >= 4) {
        window.location.href = 'winning.html'
        
    }

    else {
        window.location.href = 'rejected.html'
       
    }
}
function stopAnimation() {
    setTimeout(function () {
        document.querySelector('#wrapper-glass').classList.remove("ball")
        document.querySelector('#wrapper-glass').classList.add("fixe")
    }, 2000);
}
function focusOffCardOne() {
    setTimeout(function () {
        btnCardOne.blur()

    },500);
}
function focusOffCardTwo() {
    setTimeout(function () {
        btnCardTwo.blur()

    },500);
}

// function backToHomepage() {
//     setTimeout(function () {
//          window.location.href = 'index.html'
//         // console.log("boo")
//     }, 6000);
// }


