import Ancients from '/assets/ancients/index.js'
import ancientsData from '/data/ancients.js'
import difficulties from '/data/difficulties.js'
import {brownCard, greenCard, blueCard} from '/data/MythicCards/index.js'
// import greenCard from '/data/MythicCards/index.js'
// import blueCard from '/data/MythicCards/index.js'
// console.log(`${greenCard[0].cardFace}`)
// console.log(`${blueCard[0].cardFace}`)
// console.log(`${brownCard[0].cardFace}`)
let b = blueCard [0].cardFace
// console.log(b)
let card = document.querySelector('.last-card')

// console.log(c)
// console.log(ancientsData[0])
// console.log('hello world')
// console.log(blueCards)
const shuffleButton = document.querySelector('.shuffle-button')
const selecteddifficult = document.querySelectorAll('.difficulty') 
const deck = document.querySelector('.deck') 
let difficult;
let ancient;
let firstStageCards = []
let secondStageCards = []
let thirdStageCards = []
// let firstStage = [];
// let secondStage = [];
// let thirdStage = [];
const selectedAncient = document.querySelectorAll('.ancient-card') 
const greenDots =  document.querySelectorAll('.green') 
const brownDots =  document.querySelectorAll('.brown') 
const blueDots =  document.querySelectorAll('.blue') 

// console.log(selecteddifficult[0].innerHTML)

selectedAncient.forEach((element, index) => {
    element.addEventListener('click', () => {
        // ancient = `${ancientsData[index].id}`
         ancient =  index;
         card.style.backgroundImage = ''
        console.log(ancient)
        return ancient
         })  
});
selecteddifficult.forEach((element, index) => {
 element.onclick = () => {
difficult = `${difficulties[index].id}`

return difficult
 }   
});
shuffleButton.onclick = () => {
    shuffleCards()
}
let shuffleCards = () => {
firstStageCards = []
secondStageCards = []
thirdStageCards = []
// firstStage.greenCards = `${ancientsData[ancient].firstStage.greenCards}`;
// firstStage.blueCards = `${ancientsData[ancient].firstStage.blueCards}`;
// firstStage.brownCards = `${ancientsData[ancient].firstStage.brownCards}`;
// console.log(firstStage)

let brownCardQuantity = `${ancientsData[ancient].firstStage.brownCards + ancientsData[ancient].secondStage.brownCards + ancientsData[ancient].thirdStage.brownCards}`;
let greenCardQuantity = `${ancientsData[ancient].firstStage.greenCards + ancientsData[ancient].secondStage.greenCards + ancientsData[ancient].thirdStage.greenCards}`;
let blueCardQuantity = `${ancientsData[ancient].firstStage.blueCards + ancientsData[ancient].secondStage.blueCards + ancientsData[ancient].thirdStage.blueCards}`;
console.log(`green ${greenCardQuantity}`)
console.log(`brown ${brownCardQuantity}`)
console.log(`blue ${blueCardQuantity}`)
console.log(difficult)
if (difficult == 'normal') {
shuffleNormal()
}

}

deck.onclick = () => {
    nextCard()
}

let nextCard = () => {
    // console.log(`first ${firstStageCards.length}`)
    // console.log(`second ${secondStageCards.length}`)
    // console.log(`third ${thirdStageCards.length}`)
    console.log()
    if (firstStageCards.length > 0) {
        console.log(firstStageCards[0])
        card.style.backgroundImage = `url('${firstStageCards[0]}')`
       firstStageCards.shift()
       console.log(card.style.backgroundImage)
       if(card.style.backgroundImage.indexOf('brown') != -1) {
        brownDots[0].innerHTML =  brownDots[0].innerHTML - 1;
       }
       if(card.style.backgroundImage.indexOf('green') != -1) {
        greenDots[0].innerHTML =  greenDots[0].innerHTML - 1;
       }
       if(card.style.backgroundImage.indexOf('blue') != -1) {
        blueDots[0].innerHTML =  blueDots[0].innerHTML - 1;
       }
       return
    //    console.log(`first ${firstStageCards.length}`)
    }
    if (firstStageCards.length == 0 && secondStageCards.length > 0) {
        console.log(secondStageCards[0])
        card.style.backgroundImage = `url('${secondStageCards[0]}')`
        secondStageCards.shift()
        console.log(card.style.backgroundImage)
        if(card.style.backgroundImage.indexOf('brown') != -1) {
            brownDots[1].innerHTML =  brownDots[1].innerHTML - 1;
           }
           if(card.style.backgroundImage.indexOf('green') != -1) {
            greenDots[1].innerHTML =  greenDots[1].innerHTML - 1;
           }
           if(card.style.backgroundImage.indexOf('blue') != -1) {
            blueDots[1].innerHTML =  blueDots[1].innerHTML - 1;
           }
        // console.log(`second ${secondStageCards.length}`)
        return
    }
    if (firstStageCards.length == 0 && secondStageCards.length == 0 && thirdStageCards.length > 0) {
        console.log(thirdStageCards[0])
        card.style.backgroundImage = `url('${thirdStageCards[0]}')`

        thirdStageCards.shift()
        console.log(card.style.backgroundImage)
        if(card.style.backgroundImage.indexOf('brown') != -1) {
            brownDots[2].innerHTML =  brownDots[2].innerHTML - 1;
           }
           if(card.style.backgroundImage.indexOf('green') != -1) {
            greenDots[2].innerHTML =  greenDots[2].innerHTML - 1;
           }
           if(card.style.backgroundImage.indexOf('blue') != -1) {
            blueDots[2].innerHTML =  blueDots[2].innerHTML - 1;
           }
        return
        // console.log(`third ${thirdStageCards.length}`)
    }
  
}

let qount = () => {
let brownCardQuantity = `${ancientsData[ancient].firstStage.brownCards + ancientsData[ancient].secondStage.brownCards + ancientsData[ancient].thirdStage.brownCards}`;
let greenCardQuantity = `${ancientsData[ancient].firstStage.greenCards + ancientsData[ancient].secondStage.greenCards + ancientsData[ancient].thirdStage.greenCards}`;
let blueCardQuantity = `${ancientsData[ancient].firstStage.blueCards + ancientsData[ancient].secondStage.blueCards + ancientsData[ancient].thirdStage.blueCards}`;
return brownCardQuantity
}

let shuffleNormal = () => {
    qount()

    for (let cards of brownCard) {
        brownCardsArray.push(`${cards.cardFace}`)
    }
    for (let cards of blueCard) {
        blueCardsArray.push(`${cards.cardFace}`)
    }
    for (let cards of greenCard) {
        greenCardsArray.push(`${cards.cardFace}`)
    }
    brownCardsArray = brownCardsArray.sort(() => Math.random() - 0.5).slice(0, brownCardQuantity)
    blueCardsArray = blueCardsArray.sort(() => Math.random() - 0.5).slice(0, blueCardQuantity)
    greenCardsArray = greenCardsArray.sort(() => Math.random() - 0.5).slice(0, greenCardQuantity)
    
    firstStageCards.push(brownCardsArray.slice(0, `${ancientsData[ancient].firstStage.brownCards}`), greenCardsArray.slice(0, `${ancientsData[ancient].firstStage.greenCards}`), blueCardsArray.slice(0, `${ancientsData[ancient].firstStage.blueCards}`))
    secondStageCards.push(brownCardsArray.slice(`${ancientsData[ancient].firstStage.brownCards}`, `${ancientsData[ancient].secondStage.brownCards + ancientsData[ancient].firstStage.brownCards}`), greenCardsArray.slice(`${ancientsData[ancient].firstStage.greenCards}`, `${ancientsData[ancient].secondStage.greenCards + ancientsData[ancient].firstStage.greenCards}`), blueCardsArray.slice(`${ancientsData[ancient].firstStage.blueCards}`, `${ancientsData[ancient].secondStage.blueCards + ancientsData[ancient].firstStage.blueCards}`))
    thirdStageCards.push(brownCardsArray.slice(
        `${ancientsData[ancient].secondStage.brownCards + ancientsData[ancient].firstStage.brownCards}`, `${ancientsData[ancient].thirdStage.brownCards + ancientsData[ancient].secondStage.brownCards + ancientsData[ancient].firstStage.brownCards}`), 
        blueCardsArray.slice(
            `${ancientsData[ancient].secondStage.blueCards + ancientsData[ancient].firstStage.blueCards}`, `${ancientsData[ancient].thirdStage.blueCards + ancientsData[ancient].secondStage.blueCards + ancientsData[ancient].firstStage.blueCards}`),
        greenCardsArray.slice(
            `${ancientsData[ancient].secondStage.greenCards + ancientsData[ancient].firstStage.greenCards}`, `${ancientsData[ancient].thirdStage.greenCards + ancientsData[ancient].secondStage.greenCards + ancientsData[ancient].firstStage.greenCards}`)
    );
    firstStageCards = firstStageCards.flat(2).sort(() => Math.random() - 0.5)
    secondStageCards = secondStageCards.flat(2).sort(() => Math.random() - 0.5)
    thirdStageCards = thirdStageCards.flat(2).sort(() => Math.random() - 0.5)
    console.log(...firstStageCards)
    console.log(...secondStageCards)
    console.log(...thirdStageCards)
    greenDots[0].innerHTML = ancientsData[ancient].firstStage.greenCards;
    greenDots[1].innerHTML = ancientsData[ancient].secondStage.greenCards;
    greenDots[2].innerHTML = ancientsData[ancient].thirdStage.greenCards;
    brownDots[0].innerHTML = ancientsData[ancient].firstStage.brownCards;
    brownDots[1].innerHTML = ancientsData[ancient].secondStage.brownCards;
    brownDots[2].innerHTML = ancientsData[ancient].thirdStage.brownCards;
    blueDots[0].innerHTML = ancientsData[ancient].firstStage.blueCards;
    blueDots[1].innerHTML = ancientsData[ancient].secondStage.blueCards;
    blueDots[2].innerHTML = ancientsData[ancient].thirdStage.blueCards;
}