export const addToCart = (item) => {
    console.log('adding item', item)
    return {
        type: 'add',
        item
    }
}

// This action is for onClick later to add item to cart
// Action is an object with type and the payload