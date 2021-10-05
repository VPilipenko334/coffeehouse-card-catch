// document.addEventListener('DOMContentLoaded', () => {
    const coffeeOrders = [
        ['Sugar', ' Water', ' Cinnamon Sticks', ' Ground Cloves', ' Ground Ginger', ' 2tbs Ground Nutmeg', ' 4tbs Pumpkin Purèe', ' Whole Milk', ' Pumpkin Spice', ' Caramel Sauce', ' Pumpkin Flavored Coffee', ' Whipped Cream', ' Caramel Sauce Drizzle'],
        ['Brown Sugar', ' Water', ' Nutmeg', ' Cinnamon', ' Cold Brew', ' Oat-Milk', ' 1–2 Tbsp Brown Sugar Cinnamon Simple Syrup', ' Cinnamon stick to garnish​'],
        ['2 Tbsp Starbucks® Espresso Roast', ' 4 Tbsp Vodka', ' 2 Tbsp Coffee Liqueur', ' Ice Cubes', ' 3 Whole Coffee Beans (for garnish)'],
        [' 1 Cup ColdBrew', ' Ice', ' ¼ cup 2% milk', ' 1 Tbsp powdered sugar​', ' ¼ tsp vanilla extract'],
        [' 1 oz Vanilla Syrup​', ' ¾ cup 2% Milk​', ' Ice', ' 2 oz (about 2 shots) of Starbucks® Espresso Roast​', ' Caramel Sauce'],
        [' 1 shot (1oz) Starbucks® Espresso Roast', ' 1 cup 2% Milk', ' 3 tbsp dark chocolate sauce/syrup', ' 1.5 tbsp toffee nut syrup', ' Whipped Cream', ' Caramel sauce', ' Smoked sea salt and sugar topping (for this topping mix together ⅔ cup turbinado sugar with ⅓ cup smoked sea salt.)']
    ]
// });

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const generateBeverage = () => {
    // getRandomImage();
    return `${coffeeOrders[getRandomNumber(coffeeOrders.length)]}`
};

const setRandomDrink = () => {
    document.getElementById('result').innerText = generateBeverage();
}

//for the button

document.getElementById('generator-button').addEventListener('click', setRandomDrink);



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