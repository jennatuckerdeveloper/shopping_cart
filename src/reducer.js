// reducers mapped to a root Reducer 

import { combineReducers } from 'redux'

const cart = (state = [], payload) => {
    switch (payload.type) {
        case 'add':
            return [...state, payload.item]
        default:
            return [...state]
    }
}

const rootReducer = combineReducers({
    cart
})

export default rootReducer