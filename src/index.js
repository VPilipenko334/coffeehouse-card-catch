const coffeeCards = document.querySelectorAll('.coffeehouse-card')

let flipped = false; 
let lockBoard= false; 
let firstCard, secondCard; 

function flipCard() {
    // console.log('hello')
    if (lockBoard) return; 

    if (this === firstCard) return; 
    this.classList.toggle('flip')

    if (flipped === false) {
        flipped = true; 
        firstCard = this; 
    } else { 
        flipped = false; 
        secondCard = this; 

        match();
    }
}

// console.log({firstCard, secondCard})
// console.log(firstCard.dataset.framework)
// console.log(secondCard.dataset.framework)

function unflip() {
    lockBoard = true; 
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
        lockBoard = false; 
        reset(); 
    }, 1000);
}

function match() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disable();
    } else {
        unflip();
    }
}

function disable() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard); 

    reset(); 
}

//function will be executed right after it's definition 
(function shuffleBoard() {
    coffeeCards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition; 
    })
})();

function reset() {
    flipped = false; 
    lockBoard = false; 
    firstCard = null;
    secondCard = null; 
}

coffeeCards.forEach(card => card.addEventListener('click', flipCard)); 
