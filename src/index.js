const coffeeCards = document.querySelectorAll('.coffeehouse-card')

let flipped = false; 
let lockBoard = false; 
let firstCard, secondCard; 

function flipCard() {
    // console.log('hello')
    // if (lockBoard)
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
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
    }, 1500);
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
}

coffeeCards.forEach(card => card.addEventListener('click', flipCard)); 
