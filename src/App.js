import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from './actions.js'
import Shelf from './Shelf'


class App extends Component {
  render () {
      const shoppingBag = this.props.cart.map((item, idx) => {
        return <li key={idx}>{item}</li>
      })
      return (
      <div className='Cart'>
        <Shelf addItem={this.props.action.addToCart}/>
        <h2>Cart Items</h2>
        <ol>
            {shoppingBag}
        </ol>
      </div>
    )
  }
}

function mapStateToProps (state, prop) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)