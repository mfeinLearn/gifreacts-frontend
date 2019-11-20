import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import gifs from './reducers/gifs.js' // I can call this w/e I want
import thunk from 'redux-thunk'

const reducer = combineReducers({
  // the key/property is what show up in store
  gifs
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // returns a function

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
