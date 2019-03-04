import {ADD_NUMBER} from "./actionTypes"
import {REMOVE_NUMBER} from "./actionTypes";
import {UPDATE_RECIPES} from "./actionTypes";
import {SELECT_RECIPE} from "./actionTypes";
import {ADD_SHOPPING_LIST_ITEM} from "./actionTypes";
import {REMOVE_SHOPPING_LIST_ITEM} from "./actionTypes";
import {ARCHIVE_SHOPPING_LIST_ITEM} from "./actionTypes";

export const addNumber = (value) => {
    return {
        type: ADD_NUMBER,
        number: value
    };
};

export const removeNumber = (value) => {
    return {
        type: REMOVE_NUMBER,
        number: value
    };
};

export const updateRecipes = (data) => {
    return {
        type: UPDATE_RECIPES,
        recipes: data
    };
};

export const selectRecipe = (data) => {
    return {
        type: SELECT_RECIPE,
        recipeSelected: data
    };
};

export const addShoppingListItem = (item) => {
    return {
        type: ADD_SHOPPING_LIST_ITEM,
        data: item
    };
};

export const removeShoppingListItem = (item) => {
    return {
        type: REMOVE_SHOPPING_LIST_ITEM,
        shoppingList: item
    };
};
export const archiveShoppingListItem = (item) => {
    return {
        type: ARCHIVE_SHOPPING_LIST_ITEM,
        shoppingList: item
    };
};
