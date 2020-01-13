import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from 'redux-logger'

import cakeReducer from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
