import { CartSliceState } from "../redux/cartSlice";


export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const cartItems:CartSliceState = data ? JSON.parse(data) : [];


  return {
    cartItems,
  };
};
