import React, { Component } from 'react'

import Cart from './Cart'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import  rootReducer  from './reducer.js'

const storeInstance = createStore(rootReducer)

class App extends Component {
  render () {
    return (
        <Provider store={storeInstance}>
            <div className='App'>
                <Cart />
            </div>
        </Provider>
    )
  }
}

export default App