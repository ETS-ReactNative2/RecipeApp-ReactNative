import {ADD_NUMBER} from "./actionTypes"
import {REMOVE_NUMBER} from "./actionTypes";
import {UPDATE_RECIPES} from "./actionTypes";
import {SELECT_RECIPE} from "./actionTypes";

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