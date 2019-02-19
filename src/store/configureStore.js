import {createStore, combineReducers} from "redux";
import valueReducer from "./reducers/root";

const rootReducer = combineReducers({
   values: valueReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};


export default configureStore;