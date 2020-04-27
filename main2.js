

 /*   2. Comparison: Do they match? Handle Case: Yes or No
*****************************************************
Event Listener: onClick (concept used: callbacks)
- track how many cards are selected to compare (max: 2 cards)
- compare the card's data-attributes to see if they are the same PLUS check to see if they match the color
- if the cards match, add 'card-matched' css to items, return a true boolean
- if the cards don't match, add 'card-start' css to items, return a false boolean, resetting the two cards that don't match
*/

const buttonElement = document.getElementById('btn');

// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, a pop-up with "Element clicked!" will
// appear.
buttonElement.addEventListener('click', function (event) {
  alert('Element clicked through function!');
});

// For compatibility, a non-function object with a `handleEvent` property is
// treated just the same as a function itself.
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    alert('Element clicked through handleEvent property!');
  }
});

function pushMatchedPairToMatchedArray(if cardMatch == true){
    cardsMatchedArray.push(matchedPair);
}

function cardsMismatch (if cardMatch == false){
    "flip" firstCardSelected && secondCardSelected;


}

if (cardsMatchedArray.length == 11) {
    console.log(Winner!)
}

/*
    Universal Variables
    Local Storage Variables



    firstCardSelected = looks for color in cardsArray @ [i] which == firstUserCardChoice
    secondCardSelected = looks for color in cardsArray @ [i] which == secondUserCardChoice


    cardMatch[@attempt#] = Boolean
    How to determine value: True, if firstCSC == secondCSC


    flipped[@specificCard#] = Boolean
    How to determine value: 
    NOT NECESSARY CSS TAKES CARE OF FLIPPING

    firstPairAttempt = [firstCardSelectedColor, secondCardSelectedColor ]
    secondPairAttempt = [firstCardSelectedColor, secondCardSelectedColor]


    gamePlayTime = [minutes,seconds]
    How to determine value: TBA



    Universal Storage Variables
    cardsArray = [color, color, color, color... color12] (position of color is the index)
    cardsMatchedArray = []
    gameWon = Boolean

    Functions:

        cardsMismatch {hides all cards}
        invoked when: cardMatch = false
        actual code:

        pushMatchedPairToMatchedArray {pushes matchedPair to cardsMatchedArray}
        invoked when: cardMatch = true
        actual code:

        endGame {creates celebratory message with gamePlayTime displayed}
        invoked when: gameWon = True

        */