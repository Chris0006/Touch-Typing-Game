'use strict';

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for  (let i=1; i<20; i++) letters.push(" ");

let gameChoicedLetters = [];
let mistakes = 0;
let accuracy = 100;
let wpm = 0;

function randomChar(){
    let result = letters.at(Math.floor(Math.random()*letters.length));
    gameChoicedLetters += result;
    return result;
}

function startGame(){


function addRow(){
    for (let i=1; i<67; i++){
        const p = document.createElement('p');
        p.innerHTML = `<p class="i">${randomChar()}</p>`
        document.querySelector('.main').append(p);
    }
}

for (let i=1; i<5; i++) addRow();


let turn = 0;
addEventListener('keypress', (e) => {
    if (e.key.toUpperCase() == gameChoicedLetters[turn]){
        document.querySelectorAll('.i')[turn].style.backgroundColor = 'green';
        document.body.style.backgroundColor = 'green'
        setTimeout(() => {
            document.body.style.backgroundColor = '#2D3648'
        }, 100)
    } else {
        document.body.style.backgroundColor = 'red'
        setTimeout(() => {
            document.body.style.backgroundColor = '#2D3648'
        }, 100)
    document.querySelectorAll('.i')[turn].style.backgroundColor = 'red';
    mistakes++;
    document.querySelector('.error').textContent = mistakes;
    accuracy = Math.floor((turn-mistakes) / turn *100);
    document.querySelector('.accuracy').textContent = accuracy;
    }

    wpm = Math.floor(((turn-mistakes)*totalTimeInSecs/6*accuracy/100)); // for some reason this is not accurate!
    document.querySelector('.wpm').textContent = wpm;

    

    turn++;

});

let totalTimeInSecs = 0;
let sec = 0;
let min = 0;
setInterval(() => {
    sec++;
    if (sec<10) sec = '0'+sec;
    if (sec == 59){
        sec = 0;
        min++;
        if (min<10) min = '0'+min;
        document.querySelector('.timer-min').textContent = min;
    }
    document.querySelector('.timer-sec').textContent = sec; 
    totalTimeInSecs++;
    console.log(totalTimeInSecs)
}, 1000);


};




document.querySelector('.start').addEventListener('click', function run(){
    this.remove();
    startGame();
    removeEventListener('click', run)
})
