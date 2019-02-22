import {ADD_NUMBER, REMOVE_NUMBER, UPDATE_RECIPES} from "../actions/actionTypes";

const initialState = {
    counter: 0,
    recipes: [],
    recipesLoaded: false

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_RECIPES: {
            console.log("xx");
            return {
                ...state,
                recipes: action.recipes,
                recipesLoaded: true
            }
        }
        case ADD_NUMBER: {
            return {
                ...state,
                counter: state.counter + action.number
            }
        }
        case REMOVE_NUMBER: {
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