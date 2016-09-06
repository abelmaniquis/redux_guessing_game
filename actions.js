/*
game needs to load
Number needs to be generated
Random number must be stored
Player will have to make a guess
Guess will have to be stored
guess will have to be checked against number
*/

var PAGE_ACTION = 'PAGE_ACTION';
var pageAction = function(){
    return{
        type: PAGE_ACTION
    }
}

var ENTER_PRESSED = 'ENTER_PRESSED';
var enterPressed = function(){
  return{
      type: ENTER_PRESSED
  }  
};

var LOAD_GAME = 'LOAD_GAME';
var loadGame = function(){
    return{
        type: LOAD_GAME
    }
};

var NEW_GAME = 'NEW_GAME'
var newGame = function(){
    return{
        type: NEW_GAME
    }
}

var EVALUATE_GUESS = 'EVALUATE_GUESS'
var evaluateGuess = function(){
    return{
        type: EVALUATE_GUESS
    }
}

var UPDATE_INFO = 'UPDATE_INFO'
var updateInfo = function(){
    return{
        type: UPDATE_INFO
    }
}

var FEEDBACK = 'FEEDBACK'
var feedBack = function(){
    return{
        type: FEEDBACK
    }
}



