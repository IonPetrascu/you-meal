import React from 'react';
import styles from './ButtonAdd.module.scss';

type ButtonAddProps = {
  addToCart: () => void;
};

const ButtonAdd: React.FC<ButtonAddProps> = ({ addToCart }) => {
  return (
    <button onClick={addToCart} className={`${styles.button}`}>
      Добавить
    </button>
  );
};

export default ButtonAdd;
