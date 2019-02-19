import {ADD_NUMBER, REMOVE_NUMBER} from "../actions/actionTypes";

const initialState = {
    counter: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER: {
            console.log(action.number);
            return {
                ...state,
                counter: state.counter + action.number
            }
        }
        case REMOVE_NUMBER: {
            console.log(action.number);
            return {
                ...state,
                counter: state.counter - action.number
            }
        }

        default:
            return state;
    }
};

export default reducer;