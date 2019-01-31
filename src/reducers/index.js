import { combineReducers } from 'redux'

const taskReducers = (state=[], action) => {
    switch (action.type){
        case 'ADD_TASK':
            state = state.concat(action.payload);
            console.log(action.payload)
            break;
        case 'DELETE_TASK':
            state = state.slice();
            state.splice(action.payload,1);
            break; 
    }
    console.log(state);
    return state;
},
 reducers=combineReducers({
     tasks: taskReducers
 });

 export default reducers;