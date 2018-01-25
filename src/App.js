import React, { Component } from 'react'

import { Provider } from 'react-redux'
// a parent container created by react-redux that allows store to be passed down to child components

import { createStore } from 'redux'
import  rootReducer  from './reducer.js'
// Redux method to create the store and a rootReducer I wrote to use to make the store.

import Cart from './Cart'
// A container component that's subscribed to store.  

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