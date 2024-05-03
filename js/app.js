const cards = document.querySelectorAll('.memory-card');
const divnbCoups = document.getElementById('nbCoups');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let nbCoups = 0;
let pairs = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;
  
  
  checkForMatch();
  if (pairs === cards.length / 2) {
        alert("Victoire")
    }
}


function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    nbCoups++;
    divnbCoups.textContent='Nombre de coups : ' +nbCoups;
  isMatch ? disableCards() : unflipCards();
  if (isMatch === true){
    pairs++;
  }
  console.log(nbCoups);
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
    

    
  resetBoard();
  
  
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    
    resetBoard();
    
  }, 1500);
}
document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        resetGame();        
    };
}) 
function resetGame() {

  pairs = 0;
  nbCoups = 0;
  divnbCoups.textContent = 'Nombre de coups : ' + nbCoups;
  cards.forEach(card => card.classList.remove('flip'));
  resetBoard();
  shuffle();
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();



cards.forEach(card => card.addEventListener('click', flipCard));