const coffeeCards = document.querySelectorAll('.coffeehouse-card')

let flipped = false; 
let firstCard, secondCard; 

function flipCard() {
    // console.log('hello')
    this.classList.toggle('flip')

    if (flipped === false) {
        flipped = true; 
        firstCard = this; 
        // console.log({flipped, firstCard})
        
    }
}

coffeeCards.forEach(card => card.addEventListener('click', flipCard))
