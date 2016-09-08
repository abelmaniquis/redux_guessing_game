let guesses = []
let tries = 0
let actualNum = actualNum = parseInt(Math.floor((Math.random() * 100), 10));

let ADD_TRY = 'ADD_TRY'
export const addTry = () => {
    return{
        type: ADD_TRY,
        id: tries ++
    }
}

let LOG_GUESS = 'LOG_GUESS'
export const logGuess = (guess) => {
    return{
        type: LOG_GUESS,
        id: guesses.push(guess)
    }
}

let COMPARE_GUESS = 'COMPARE_GUESS'
export const compareGuess = (guess) => {
    return{
        type: COMPARE_GUESS,
        id: guess - actualNum
    }
}

function feedback(diff){
    if(diff === 0){
      console.log("correct");
    }else if (diff <= 5){
        console.log("scalding");
    }else if (diff <= 10) {
        console.log("burning");
    } else if (diff <= 20) {
        console.log("hot");
    } else if (diff <= 30) {
        console.log("warm");
    } else if (diff <= 40) {
        console.log("cool");
    } else if (diff < 50) {
        console.log("cold");
    } else if (diff >= 50) {
        console.log("freezing");
    }
};