import { createStore } from 'redux'
import  rootReducer  from './reducer.js'

export default (initialState) => {
    return createStore(rootReducer, initialState)
}