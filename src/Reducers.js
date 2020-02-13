import {
    ADD_MANTRA
} from './Actions';


// our default state is nothing
// we want to fetch a mantra
const defaultState= [];
export function mantra(state=defaultState, action){
    let newState = [...state];
    switch(action.type){
        case ADD_MANTRA:
            newState.push()
            break;
        default:
            break;
    }
    return newState;
}