import React from 'react';
import ButtonBuy from '../button/buttonBuy/ButtonBuy';
import styles from './Cart.module.scss';
import CartItem, { CartItemProps } from '../cartItem/CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';


type Value = {
  price: number;
  count: number;
};
const Cart: React.FC = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartSlice);
  const totalPrice = cartItems.reduce(
    (ac: number, value: Value) => ac + value.price * value.count,
    0,
  );
  const countCartProducts = cartItems.reduce((ac: number, value: Value) => ac + value.count, 0);

  return (
    <div className={styles.cart}>
      <Link to="/cart">
        <div className={styles.header}>
          <h3>Корзина</h3>
          <span>{countCartProducts}</span>
        </div>
      </Link>

      {cartItems.length > 0 ? (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((el:CartItemProps) => (
              <CartItem key={el.idProduct} {...el} />
            ))}
          </div>
          <div className={styles.footer}>
            <div className={styles.results}>
              <span>Итоги</span>
              <span>{totalPrice}₽</span>
            </div>
            <ButtonBuy />
            <div className={styles.delivery}>
              <img src="icon-delivery.svg" alt="icon delivery" />
              <span>Бесплатная доставка</span>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.empty_cart}>Корзина пустая</div>
      )}
    </div>
  );
};

export default Cart;
