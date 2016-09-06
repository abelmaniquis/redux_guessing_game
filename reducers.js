var actions = require('./actions');
var initialState = [];

var repositoryReducer = function(state,action){
    state = state || initialState;
    
    if(action.type === actions.START_GAME){
        return state.concat({
           name:action.repository,
        });
    }
    else if(action.type === actions.END_GAME){
        console.log('End Game');
    }
    return state;
}