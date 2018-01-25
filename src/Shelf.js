import React, { Component } from 'react'

// presentational component 

class Shelf extends Component {
  constructor(props){
      super(props)
      this.state = {
          shelfItems: [
              'shampoo',
              'chocolate',
              'yogurt'
          ]
      }
  }

  render () {
      const shelfItems = this.state.shelfItems.map((item, idx) => {
          return <li key={idx}><button onClick={()=>this.props.addItem(item)}>+</button>{item}</li>
          // The onClick needs to be a callback method that calls the function from prop.
          // Otherwise, you get an error that the onClick expected a function and got an object.
          // And it seems to also create an endless loop that crashes the server.  Why?
      })
    return (
      <div>
        <h2>Shelf</h2>
        <ul>
        {shelfItems}
        </ul>
      </div>
    )
  }
}

export default Shelf