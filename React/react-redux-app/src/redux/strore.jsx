import counterReducer from "./reducers";
import { legacy_createStore as createStore } from "redux";


const store = createStore(counterReducer);
export default store;