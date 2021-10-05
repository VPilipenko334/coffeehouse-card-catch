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
        // alert('you did it!')
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

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// closes the modal if you click anywhere outside of the x as well 
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})