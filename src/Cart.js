// Cart container component 

import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as cartActions from './actions' 
// An action function that takes an item returns an action object.

import Shelf from './Shelf'
// A presentational component that gets its state from props.

class Cart extends Component {

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
// So the children will receive a props object with the key-value of cart

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(cartActions, dispatch)
    }
}
// So the children will receive an action object with the key=value of my action's name = my function
// that returns an action object wrapped by a dispatch method attached to the store.  

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
// `connect()` simply injects store variables and `dispatch` into a component
// connect() returns a function that is then called on the component Cart