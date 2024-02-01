import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {
    productSlice,
    cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>