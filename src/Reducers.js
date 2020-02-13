import {
    ADD_MANTRA
} from './Actions';


// our default state is nothing
// we want to fetch a mantra
const defaultState= ['a', 'b', 'c'];
export function mantras(state=defaultState, action){
    let newState = [...state];
    switch(action.type){
        case ADD_MANTRA:
            newState.push(action.payload.mantra)
            break;
        default:
            break;
    }
    return newState;
}