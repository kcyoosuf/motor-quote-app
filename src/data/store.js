
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import logger from "redux-logger";

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
}

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") middlewares.push(logger);

const persistedState = loadFromLocalStorage()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares))
)
// Comment this line for removing persisting state in local storage
store.subscribe(() => { saveToLocalStorage(store.getState())});
export default store