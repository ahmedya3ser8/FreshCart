import { createSlice } from "@reduxjs/toolkit";
import data from '../../db/productsData.json';

const initialState = {
  productsData: data
}

const productsSlice = createSlice({
  initialState,
  name: 'productsSlice',
  reducers: {}
});

export default productsSlice.reducer;