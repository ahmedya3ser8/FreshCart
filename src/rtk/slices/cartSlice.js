import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  wishlist: []
}

const cartSlice = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {
    addToCart: (state, action) => {
      const productExist = state.cartItems.find(product => product.id === action.payload.id);
      if(productExist) {
        productExist.quantity += 1;
      } else {
        const productClone = {...action.payload, quantity: 1};
        state.cartItems.push(productClone)
      }
    },
    removeItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(product => product.id !== action.payload.id);
      state.cartItems = removeItem;
    },
    decreaseQuantity: (state, action) => {
      const productExist = state.cartItems.find(product => product.id === action.payload.id);
      if(productExist.quantity != 0) {
        productExist.quantity -= 1;
      }
    },
    clearItemsFromCart: (state, action) => {
      state.cartItems = [];
    }
  }
});

export const {addToCart, removeItemFromCart, decreaseQuantity, clearItemsFromCart} = cartSlice.actions;
export default cartSlice.reducer;