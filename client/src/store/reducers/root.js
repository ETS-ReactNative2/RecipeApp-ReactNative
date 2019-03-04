import {
    ADD_NUMBER,
    REMOVE_NUMBER,
    UPDATE_RECIPES,
    SELECT_RECIPE,
    ADD_SHOPPING_LIST_ITEM,
    REMOVE_SHOPPING_LIST_ITEM,
    ARCHIVE_SHOPPING_LIST_ITEM
} from "../actions/actionTypes";

const initialState = {
    counter: 0,
    recipes: [],
    recipesLoaded: false,
    recipeSelected: "smnt",
    shoppingList:
        [{name: "xxx", archived: false}, {name: "archived", archived: true}, {name: "xxx", archived: false}]
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
        case ADD_SHOPPING_LIST_ITEM: {
            return {
                ...state,
                shoppingList: [...state.shoppingList, {name: action.data, archived: false}]
            }
        }
        case REMOVE_SHOPPING_LIST_ITEM: {
            return {
                ...state,
                shoppingList: action.item
            }
        }
        case ARCHIVE_SHOPPING_LIST_ITEM: {
            console.log(action.shoppingList);
            return {
                ...state,
                shoppingList: state.shoppingList.map((item, index) => {
                    if (index !== state.shoppingList.indexOf(action.shoppingList)) {
                        return item
                    }

                    return {
                        ...item,
                        archived: !action.shoppingList.archived
                    }
                })
            }
        }

        default:
            return state;
    }
};

export default reducer;