'use strict'

//Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
//? -> Add a class to a element
diceEL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', ()=> {
    
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `/img/dice-${dice}.png`;

    //!3. Check for rolled 1: if true, switch to next player
    if(dice !== 1){
    //Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        //Switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0EL.classList.toggle('player--active');
        player1EL.classList.toggle('player--active');
    }
});





