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

