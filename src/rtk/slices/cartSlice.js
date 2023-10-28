import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem('cart-Products') ? JSON.parse(localStorage.getItem('cart-Products')) : [],
}

const cartSlice = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {
    addToCart: (state, action) => {
      const productExist = state.cartItems.find(product => product.id === action.payload.id);
      if(productExist) {
        productExist.quantity += 1;
        toast.info('increase product Quantity', {
          position: 'bottom-left',
          autoClose: 1500,
        });
      } else {
        const productClone = {...action.payload, quantity: 1};
        state.cartItems.push(productClone);
        toast.success(`${action.payload.category} added to cart`, {
          position: 'bottom-left',
          autoClose: 1500,
        });
      }
      localStorage.setItem('cart-Products', JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(product => product.id !== action.payload.id);
      state.cartItems = removeItem;
      localStorage.setItem('cart-Products', JSON.stringify(state.cartItems));
      toast.warning('Item has removed', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    },
    decreaseQuantity: (state, action) => {
      const productExist = state.cartItems.find(product => product.id === action.payload.id);
      if(productExist.quantity != 0) {
        productExist.quantity -= 1;
      }
      localStorage.setItem('cart-Products', JSON.stringify(state.cartItems));
      toast.info('decrease product Quantity', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    },
    clearItemsFromCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem('cart-Products', JSON.stringify(state.cartItems));
      toast.warning('you removed all items', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    }
  }
});

export const {addToCart, removeItemFromCart, decreaseQuantity, clearItemsFromCart} = cartSlice.actions;
export default cartSlice.reducer;