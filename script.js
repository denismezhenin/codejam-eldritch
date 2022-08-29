import Ancients from '/assets/ancients/index.js'
import ancientsData from '/data/ancients.js'
import difficulties from '/data/difficulties.js'
import {brownCard, greenCard, blueCard} from '/data/MythicCards/index.js'

let card = document.querySelector('.last-card')
const shuffleButton = document.querySelector('.shuffle-button')
const selecteddifficult = document.querySelectorAll('.difficulty') 
const deck = document.querySelector('.deck') 
let difficult;
let ancient;
let firstStageCards = []
let secondStageCards = []
let thirdStageCards = []
const selectedAncient = document.querySelectorAll('.ancient-card') 
const greenDots =  document.querySelectorAll('.green') 
const brownDots =  document.querySelectorAll('.brown') 
const blueDots =  document.querySelectorAll('.blue') 
const difficultyContainer = document.querySelector('.difficulty-container')
const currentState = document.querySelector('.current-state')

// const difficultyContainer = document.querySelector('.difficulty-container')
let brownCardQuantity;
let greenCardQuantity;
let blueCardQuantity;

selectedAncient.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (difficultyContainer.style.visibility == 'visible') {
            shuffleButton.style.visibility = 'visible'
         }
         ancient =  index;
         card.style.backgroundImage = ''
         difficultyContainer.style.visibility = 'visible'
         deck.style.visibility = 'hidden'
         currentState.style.visibility = 'hidden'
        addActiveAncient()
         })  
});

const addActiveAncient = () => {
    selectedAncient.forEach((element, index) => {
 index ==  ancient ? element.classList.add('active') :  element.classList.remove('active')
    });
}

selecteddifficult.forEach((element, index) => {
 element.addEventListener(('click'), () => {
difficult = `${difficulties[index].id}`
card.style.backgroundImage = ''
shuffleButton.style.visibility = 'visible'
deck.style.visibility = 'hidden'
currentState.style.visibility = 'hidden'
addActiveDifficult()
 })   
});

const addActiveDifficult = () => {
    selecteddifficult.forEach((element, index) => {
difficult ==  difficulties[index].id ? element.classList.add('active') :  element.classList.remove('active')
    });
}

shuffleButton.onclick = () => {
    shuffleCards()
    deck.style.visibility = 'visible'
    currentState.style.visibility = 'visible'
    shuffleButton.style.visibility = 'hidden'
}
let shuffleCards = () => {
firstStageCards = []
secondStageCards = []
thirdStageCards = []
qount()
getDotNumber()

switch(difficult) {
    case 'normal':
        shuffleNormal();
        break;
    case 'easy':
        shuffleEasy();
        break;
    case 'hard':
        shuffleHard();
        break;
    case 'very easy':
         shuffleVeryEasy();
         break;
    case 'very hard':
        shuffleVeryHard();
        break;   
}
}

deck.onclick = () => {
    nextCard()
}

let nextCard = () => {
    if (firstStageCards.length > 0) {
        card.style.backgroundImage = `url('${firstStageCards[0]}')`
       firstStageCards.shift()
       
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
    }
    if (firstStageCards.length == 0 && secondStageCards.length > 0) {
        card.style.backgroundImage = `url('${secondStageCards[0]}')`
        secondStageCards.shift()
      
        if(card.style.backgroundImage.indexOf('brown') != -1) {
            brownDots[1].innerHTML =  brownDots[1].innerHTML - 1;
           }
           if(card.style.backgroundImage.indexOf('green') != -1) {
            greenDots[1].innerHTML =  greenDots[1].innerHTML - 1;
           }
           if(card.style.backgroundImage.indexOf('blue') != -1) {
            blueDots[1].innerHTML =  blueDots[1].innerHTML - 1;
           }
        return
    }
    if (firstStageCards.length == 0 && secondStageCards.length == 0 && thirdStageCards.length > 0) {
        card.style.backgroundImage = `url('${thirdStageCards[0]}')`
        thirdStageCards.shift()
        
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
    } 
    if (thirdStageCards.length == 0) {
        deck.style.visibility = 'hidden'
    }
}

let qount = () => {
brownCardQuantity = `${ancientsData[ancient].firstStage.brownCards + ancientsData[ancient].secondStage.brownCards + ancientsData[ancient].thirdStage.brownCards}`;
greenCardQuantity = `${ancientsData[ancient].firstStage.greenCards + ancientsData[ancient].secondStage.greenCards + ancientsData[ancient].thirdStage.greenCards}`;
blueCardQuantity = `${ancientsData[ancient].firstStage.blueCards + ancientsData[ancient].secondStage.blueCards + ancientsData[ancient].thirdStage.blueCards}`;
return brownCardQuantity
}

let shuffleNormal = () => {
    let brownCardsArray = [];
    let blueCardsArray = [];
    let greenCardsArray = [];
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

}

let shuffleEasy = () => {
    let brownCardsArray = [];
    let blueCardsArray = [];
    let greenCardsArray = [];
    for (let cards of brownCard) {
        if (cards.difficulty != 'hard') {
            brownCardsArray.push(`${cards.cardFace}`)
        }
    }
    for (let cards of blueCard) {
        if (cards.difficulty != 'hard') {
            blueCardsArray.push(`${cards.cardFace}`)
        }
    }
    for (let cards of greenCard) {
        if (cards.difficulty != 'hard') {
            greenCardsArray.push(`${cards.cardFace}`)
        }
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

}

let shuffleHard = () => {
    let brownCardsArray = [];
    let blueCardsArray = [];
    let greenCardsArray = [];
    for (let cards of brownCard) {
        if (cards.difficulty != 'easy') {
            brownCardsArray.push(`${cards.cardFace}`)
        }
    }
    for (let cards of blueCard) {
        if (cards.difficulty != 'easy') {
            blueCardsArray.push(`${cards.cardFace}`)
        }
    }
    for (let cards of greenCard) {
        if (cards.difficulty != 'easy') {
            greenCardsArray.push(`${cards.cardFace}`)
        }
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
}
let shuffleVeryHard = () => {
    let brownCardsArray = [];
    let blueCardsArray = [];
    let greenCardsArray = [];
    let brownNormalCardsArray = [];
    let blueNormalCardsArray = [];
    let greenNormalCardsArray = [];
    for (let cards of brownCard) {
        if (cards.difficulty == 'hard') {
            brownCardsArray.push(`${cards.cardFace}`)
        } else  if (cards.difficulty == 'normal') {
            brownNormalCardsArray.push(`${cards.cardFace}`)
        }
    }
    for (let cards of blueCard) {
        if (cards.difficulty == 'hard') {
            blueCardsArray.push(`${cards.cardFace}`)
        } else  if (cards.difficulty == 'normal') {
            blueNormalCardsArray.push(`${cards.cardFace}`)
        }
    }
    for (let cards of greenCard) {
        if (cards.difficulty == 'hard') {
            greenCardsArray.push(`${cards.cardFace}`)
        } else  if (cards.difficulty == 'normal') {
           greenNormalCardsArray.push(`${cards.cardFace}`)
        }
    }
    brownCardsArray = brownCardsArray.sort(() => Math.random() - 0.5).concat(brownNormalCardsArray.sort(
        () => Math.random() - 0.5)).slice(0, brownCardQuantity).sort(() => Math.random() - 0.5)
    blueCardsArray = blueCardsArray.sort(() => Math.random() - 0.5).concat(blueNormalCardsArray.sort(
        () => Math.random() - 0.5)).slice(0, blueCardQuantity).sort(() => Math.random() - 0.5)
    greenCardsArray = greenCardsArray.sort(() => Math.random() - 0.5).concat(greenNormalCardsArray.sort(
        () => Math.random() - 0.5)).slice(0, greenCardQuantity).sort(() => Math.random() - 0.5)
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
}
let shuffleVeryEasy = () => {
    let brownCardsArray = [];
    let blueCardsArray = [];
    let greenCardsArray = [];
    let brownNormalCardsArray = [];
    let blueNormalCardsArray = [];
    let greenNormalCardsArray = [];
    for (let cards of brownCard) {
        if (cards.difficulty == 'easy') {
            brownCardsArray.push(`${cards.cardFace}`)
        } else  if (cards.difficulty == 'normal') {
            brownNormalCardsArray.push(`${cards.cardFace}`)
        }
    }
    for (let cards of blueCard) {
        if (cards.difficulty == 'easy') {
            blueCardsArray.push(`${cards.cardFace}`)
        } else  if (cards.difficulty == 'normal') {
            blueNormalCardsArray.push(`${cards.cardFace}`)
        }
    }
    for (let cards of greenCard) {
        if (cards.difficulty == 'easy') {
            greenCardsArray.push(`${cards.cardFace}`)
        } else  if (cards.difficulty == 'normal') {
           greenNormalCardsArray.push(`${cards.cardFace}`)
        }
    }
    brownCardsArray = brownCardsArray.sort(() => Math.random() - 0.5).concat(brownNormalCardsArray.sort(
        () => Math.random() - 0.5)).slice(0, brownCardQuantity).sort(() => Math.random() - 0.5)
    blueCardsArray = blueCardsArray.sort(() => Math.random() - 0.5).concat(blueNormalCardsArray.sort(
        () => Math.random() - 0.5)).slice(0, blueCardQuantity).sort(() => Math.random() - 0.5)
    greenCardsArray = greenCardsArray.sort(() => Math.random() - 0.5).concat(greenNormalCardsArray.sort(
        () => Math.random() - 0.5)).slice(0, greenCardQuantity).sort(() => Math.random() - 0.5)
   
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
}

const getDotNumber = () => {
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

console.log('по вопросам discord: denismezhenin')