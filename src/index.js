const coffeeCards = document.querySelectorAll('.coffeehouse-card')

let flipped = false; 
let firstCard, secondCard; 

function flipCard() {
    // console.log('hello')
    this.classList.toggle('flip')

    if (flipped === false) {
        flipped = true; 
        firstCard = this; 
    } else { 
        flipped = false; 
        secondCard = this; 

        // console.log({firstCard, secondCard})
        // console.log(firstCard.dataset.framework)
        // console.log(secondCard.dataset.framework)
    
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard); 
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
            }, 1500);
        }
    
    }

}

coffeeCards.forEach(card => card.addEventListener('click', flipCard))
