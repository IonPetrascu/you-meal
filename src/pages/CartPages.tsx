import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CartPages.module.scss';
import CartItem from '../components/cartItem/CartItem';
import ButtonBuy from '../components/button/buttonBuy/ButtonBuy';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { RootState } from '../redux/store';


type TotalPriceValue = {
  price: number;
  count: number;
};

const CartPages: React.FC = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartSlice);
  const totalPrice = cartItems.reduce(
    (ac: number, value: TotalPriceValue) => ac + value.price * value.count,
    0,
  );

  return (
    <div className={styles.cartPages}>
      <Link to="/">
        <button className={styles.btnBack}> {'<'} Вернуться обратно</button>
      </Link>
      <div className={styles.cart}>
        {cartItems.length > 0 ? (
          <>
            <div className={styles.cartItems}>
              {cartItems.map((el) => (
                <CartItem key={el.idProduct} {...el} />
              ))}
            </div>
            <div className={styles.footer}>
              <div className={styles.results}>
                <span>Итоги</span>
                <span>{totalPrice}₽</span>
              </div>
              <div className={styles.buttonBuy}>
                <ButtonBuy />
              </div>

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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CartPages;
