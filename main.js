/*write a class called memorygame

within is a function called memorycard with param array and callback
function called comparecards
   a function if the cards match
and a function if cards dont match:

start function with an empty array called emptArr
function to flip cards when clicked
if match push to empArr

*/
class MemoryGame { 
    constructor(cardsArray) {
      this.cardsArray = cardsArray
      this.clicks = 0
      this.cardsToCompare = []
      this.cardsMatchedArray = []
    }

    startGame(){
      this.cardsArray = this.cardsArray
      this.clicks = 0
      this.cardToCompare = []
      this.cardsMatchedArray = []
      // hide the game-over message
      document.getElementsByClassName("restart")[0].classList.remove('visible')
      // hide all the cards
      this.cardsArray.forEach(card => {
        this.hideCards(card, 0)
      })
      // for (let i = 0; i < this.cardsArray; i++) {
      //   console.log(this)
      //   this.hideCards(this.cardsArray[i], 0)
      // }
    }

    // accepts a card to be flipped
    flipCard(card) {
      // show card
      card.classList.remove('card-start')

      // add the card to the comparison array
      this.cardsToCompare.push(card)

      // increment the card count
      this.clicks++

      // if 2 cards are selected, compare them
      if (this.clicks == 2) {
        this.compareCards()
      }
    }
    
    compareCards() {
      // reset counter
      this.clicks = 0

      let card1 = this.cardsToCompare[0]
      let card2 = this.cardsToCompare[1]

      // reset comparison array
      this.cardsToCompare = []

      if (card1.classList[1] === card2.classList[1]) {
        // if the cards match
        this.cardsMatch(card1, card2)
      } else {
        // if the cards don't match
        this.cardsMisMatch([card1, card2])
      }
    }
    
    cardsMatch (firstCard, secondCard) {
      this.cardsMatchedArray.push(firstCard)
      this.cardsMatchedArray.push(secondCard)
    }
    
    cardsMisMatch (array) {
      array.forEach(card => {
        this.hideCards(card, 700)
      })
      // for (let i = 0; i < array.length; i++) {
      //   this.hideCards(array[i], 700)
      // }  
    }
    
    hideCards(card, timeDelay) {
      // remove css class to card to hide it
      setTimeout(() => {
        card.classList.add('card-start')
      }, timeDelay)
    }
    
    endGame() {
      // check if matched cards length is equal to the original array length
      if (this.cardsMatchedArray.length === this.cardsArray.length) {
        // show final message
        document.getElementsByClassName("restart")[0].classList.add('visible')
      }
    }
}

// create an array of cards from the HTML
const cards = Array.from(document.getElementsByClassName("card"))

// initialize a new game
const game = new MemoryGame(cards) 

// iterate over the cards array, and add 'click' eventListener to card 
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    // flip the current card when clicked
    game.flipCard(cards[i]);
    // check if game is over
    game.endGame()
  })
}

// restart the game
let restartLink = document.getElementsByClassName("restart")[0]

restartLink.addEventListener('click', function() {
  game.startGame()
})