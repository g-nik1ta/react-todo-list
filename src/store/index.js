import { TitleReducer } from "./TitleReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const { createStore, combineReducers } = require("redux");

const rootReducer = combineReducers({
    TitleReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())