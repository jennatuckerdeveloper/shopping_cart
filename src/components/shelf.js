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
      this.onClickAdd = this.onClickAdd.bind(this)
  }

  onClickAdd (item) {
    this.props.addItem(item)
  }

  render () {
      const shelfItems = this.state.shelfItems.map((item, idx) => {
          return <li key={idx}><button onClick={()=>this.onClickAdd(item)}>+</button>{item}</li>
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