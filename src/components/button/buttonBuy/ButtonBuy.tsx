import React from 'react';
import styles from './ButtonBuy.module.scss';

const ButtonBuy: React.FC = () => {
  return <button className={`${styles.button}`}>Оформить заказ</button>;
};

export default ButtonBuy;
