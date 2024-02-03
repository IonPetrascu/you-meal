import { CartItemProps } from "../components/cartItem/CartItem";



export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const cartItems:CartItemProps[] = data ? JSON.parse(data) : [];


  return {
    cartItems,
  };
};
