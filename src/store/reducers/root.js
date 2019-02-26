import {ADD_NUMBER, REMOVE_NUMBER, UPDATE_RECIPES, SELECT_RECIPE} from "../actions/actionTypes";

const initialState = {
    counter: 0,
    recipes: [],
    recipesLoaded: false,
    recipeSelected: "smnt"

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_RECIPES: {
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

        case SELECT_RECIPE: {
            return {
                ...state,
                recipeSelected: action.data
            }
        }

        default:
            return state;
    }
};

export default reducer;