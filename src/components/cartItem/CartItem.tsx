import React from 'react';
import styles from './CartItem.module.scss';
import { removeItem, addItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

export type CartItemProps = {
  idProduct: number;
  title: string;
  price: number;
  mass: number;
  description: string;
  compound: string[];
  category: number;
  imgUrl: string;
  count: number;
};

const CartItem: React.FC<CartItemProps> = ({
  idProduct,
  title,
  price,
  mass,
  description,
  compound,
  category,
  imgUrl,
  count,
}) => {
  const dispatch = useDispatch();
  const dellItem = () => {
    dispatch(removeItem(idProduct));
  };
  const addItemCart = () => {


    const obj = {
      idProduct,
      title,
      price,
      mass,
      description,
      compound,
      category,
      imgUrl,
      count,
    };
    dispatch(addItem(obj));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.img}>
        <img src={imgUrl} alt={title} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.mass}>{mass}г</span>
        <span className={styles.price}>{price}₽</span>
      </div>
      <div className={styles.count}>
        <button onClick={dellItem}>-</button>
        <span>{count}</span>
        <button onClick={addItemCart}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
