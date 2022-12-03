// Create StateCart
const stateCart = {
    carts: []
}

const CartReducer = (state = stateCart, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let itemCart = state.carts.find(item => item.id === action.product.id)
            if (itemCart) {
                itemCart.qty++
            } else {
                state.carts.push({ ...action.product, qty: 1 })
            }
            // set state redux
            state.carts = [...state.carts]
            return { ...state }
        case 'DELETE_ITEM_CART':
            let newCart = state.carts.filter(item => item.id !== action.productID)
            state.carts = [...newCart]
            return { ...state }
        case 'PLUS_QTY_ITEM':
            let itemCart_PlusQty = state.carts.find(item => item.id === action.productID)
            itemCart_PlusQty.qty++
            state.carts = [...state.carts]
            return { ...state }
        case 'MINUS_QTY_ITEM':
            let itemCart_MinusQty = state.carts.find(item => item.id === action.productID)
            if(itemCart_MinusQty.qty > 1 ) {
                itemCart_MinusQty.qty--
                state.carts = [...state.carts]
            }else {
                let cart_MinusQty_del = state.carts.filter(item => item.id !== action.productID)
                state.carts = [...cart_MinusQty_del]
            }
            
            return { ...state }
        default:
            return { ...state }
    }
}

export default CartReducer