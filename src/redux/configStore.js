import { createStore, combineReducers } from "redux";
import myboard from "./modules/myboard";

const rootReducer = combineReducers({ myboard });

const store = createStore(rootReducer);

export default store;
