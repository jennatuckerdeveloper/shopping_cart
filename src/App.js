import React, { Component } from 'react'

import Cart from './Cart'
import { Provider } from 'react-redux'
import Store from './store.js'

const storeInstance = Store()

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