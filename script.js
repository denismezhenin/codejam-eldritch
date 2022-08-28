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
let c = document.querySelector('.last-card').style.backgroundImage = `url('${b}')`
// console.log(c)
// console.log(ancientsData[0])
// console.log('hello world')
// console.log(blueCards)
const shuffleButton = document.querySelector('.shuffle-button')
const selecteddifficult = document.querySelectorAll('.difficulty') 
let difficult;
let ancient;
let firstStageCards = []
let secondStageCards = []
let thirdStageCards = []
let firstStage = []
;
let secondStage = [];
let thirdStage = [];
 const selectedAncient = document.querySelectorAll('.ancient-card') 
// console.log(selecteddifficult[0].innerHTML)

selectedAncient.forEach((element, index) => {
    element.onclick = () => {
        // ancient = `${ancientsData[index].id}`
         ancient =  index
        // console.log(ancient)
        return ancient
         }  
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
firstStage.greenCards = `${ancientsData[ancient].firstStage.greenCards}`;
firstStage.blueCards = `${ancientsData[ancient].firstStage.blueCards}`;
firstStage.brownCards = `${ancientsData[ancient].firstStage.brownCards}`;
let brownCardQuantity = `${ancientsData[ancient].firstStage.brownCards + ancientsData[ancient].secondStage.brownCards + ancientsData[ancient].thirdStage.brownCards}`;
let greenCardQuantity = `${ancientsData[ancient].firstStage.greenCards + ancientsData[ancient].secondStage.greenCards + ancientsData[ancient].thirdStage.greenCards}`;
let blueCardQuantity = `${ancientsData[ancient].firstStage.blueCards + ancientsData[ancient].secondStage.blueCards + ancientsData[ancient].thirdStage.blueCards}`;
// console.log(`green ${greenCardQuantity}`)
console.log(`brown ${brownCardQuantity}`)
// console.log(`blue ${blueCardQuantity}`)
let brownCardsArray = []
let greenCardsArray = []
let blueCardsArray = []
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
let fi = []
let s = []
let th = []
fi.push(brownCardsArray.slice(0, `${ancientsData[ancient].firstStage.brownCards}`), greenCardsArray.slice(0, `${ancientsData[ancient].firstStage.greenCards}`), blueCardsArray.slice(0, `${ancientsData[ancient].firstStage.blueCards}`))
s.push(brownCardsArray.slice(`${ancientsData[ancient].firstStage.brownCards}`, `${ancientsData[ancient].secondStage.brownCards + ancientsData[ancient].firstStage.brownCards}`))
th.push(brownCardsArray.slice(-`${ancientsData[ancient].thirdStage.brownCards}`))
console.log(...th)
// brownCardsArray
// console.log(brownCardsArray.length)
// console.log(brownCardsArray)
// console.log(greenCardsArray.length)
// console.log(greenCardsArray)
// console.log(blueCardsArray.length)
// console.log(blueCardsArray)
// for (let cards of brownCard) {
//     if (cards.difficulty == difficult) {
//         console.log(cards.cardFace)
//     }
// }
}
