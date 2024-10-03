
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import ProductReducer from "./reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    product : ProductReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;