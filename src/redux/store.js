import rootReducer from "./reducers/index"
import {createStore, compose} from "redux"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());