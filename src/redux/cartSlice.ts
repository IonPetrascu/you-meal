import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../utils/getCartFromLS';
import { CartItemProps } from '../components/cartItem/CartItem';

const { cartItems } = getCartFromLS();

export interface CartSliceState {
  cartItems: CartItemProps[];
}

const initialState: CartSliceState = {
  cartItems,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action:PayloadAction<CartItemProps>) => {
      const findItem = state.cartItems.find((obj) => obj.idProduct === action.payload.idProduct);
      if (findItem?.count) {
        findItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
    },
    addItem: (state, action:PayloadAction<CartItemProps>) => {
      const findItem = state.cartItems.find((obj) => obj.idProduct === action.payload.idProduct);
      if (findItem) {
        findItem.count++;
      }
    },
    removeItem: (state, action:PayloadAction<number>) => {
      const findItem = state.cartItems.find((el) => el.idProduct === action.payload);
      if (findItem && findItem?.count <= 1) {
        state.cartItems = state.cartItems.filter((el) => el.idProduct !== action.payload);
      } else if (findItem && findItem?.count >= 1) {
        findItem.count--;
      }
    },
    addItemFromPopUp: (state, action) => {
      const findItem = state.cartItems.find((el) => el.idProduct === action.payload.idProduct);
      console.log(action.payload.count);
      if (findItem) {
        findItem.count = findItem.count + action.payload.count;
      } else {
        state.cartItems.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemCart, removeItem, addItem, addItemFromPopUp } = cartSlice.actions;

export default cartSlice.reducer;
