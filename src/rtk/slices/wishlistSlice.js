import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  wishlistItems: localStorage.getItem('wishlist-items') ? JSON.parse(localStorage.getItem('wishlist-items')) : [],
}

const wishlistSlice = createSlice({
  initialState,
  name: 'wishlistSlice',
  reducers: {
    addToWishlist: (state, action) => {
      const productExist = state.wishlistItems.find(product => product.id === action.payload.id);
      const removeItem = state.wishlistItems.filter(product => product.id !== action.payload.id);
      if(!productExist) {
        state.wishlistItems.push(action.payload);
        toast.success(`${action.payload.category} added to cart`, {
          position: 'bottom-left',
          autoClose: 1500,
        });
      } else {
        state.wishlistItems = removeItem;
        toast.warning('Item has removed', {
          position: 'bottom-left',
          autoClose: 1500,
        });
      }
      localStorage.setItem('wishlist-items', JSON.stringify(state.wishlistItems));
    },
    removeItemFromWishlist: (state, action) => {
      const removeItem = state.wishlistItems.filter(product => product.id !== action.payload.id);
      state.wishlistItems = removeItem;
      localStorage.setItem('wishlist-items', JSON.stringify(state.wishlistItems));
      toast.warning('Item has removed', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    },
    clearItemsFromWishlist: (state, action) => {
      state.wishlistItems = [];
      localStorage.setItem('wishlist-items', JSON.stringify(state.wishlistItems));
      toast.warning('you removed all items', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    }
  }
});

export const {addToWishlist, removeItemFromWishlist, clearItemsFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;