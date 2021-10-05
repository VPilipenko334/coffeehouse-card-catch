const coffeeCards = document.querySelectorAll('.coffeehouse-card')

function flipCard() {
    // console.log('hello')
    this.classList.toggle('flip')
}

coffeeCards.forEach(card => card.addEventListener('click', flipCard))