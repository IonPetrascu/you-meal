import React, { useState } from 'react';
import styles from './PopUpProduct.module.scss';
import ButtonAdd from '../button/buttonAdd/ButtonAdd';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { addItemFromPopUp } from '../../redux/cartSlice';

type PopUpProductProps = {
  popUpProduct: Boolean;
  setPopUpProduct: (value:boolean) => void;
  price: number;
  mass: number;
  compound: string[];
  title: string;
  imgUrl: string;
  description: string;
  category: number;
  idProduct: number;
};

const PopUpProduct: React.FC<PopUpProductProps> = ({
  popUpProduct,
  setPopUpProduct,
  price,
  mass,
  compound,
  title,
  imgUrl,
  description,
  category,
  idProduct,
}) => {
  const dispatch = useDispatch();
  const modalElement = document.getElementById('modal') as Element;
  const [countProduct, setCountProduct] = useState(1);
  const priceProduct = countProduct * price;

  const increaseCount = () => {
    setCountProduct((prev) => prev + 1);
  };
  const decreaseCount = () => {
    countProduct > 1 && setCountProduct((prev) => prev - 1);
  };

  const addToCart = () => {
    const obj = {
      idProduct,
      price,
      mass,
      compound,
      title,
      imgUrl,
      description,
      category,
      count: countProduct,
    };
    console.log(obj);
    dispatch(addItemFromPopUp(obj));
  };
  return createPortal(
    <div className={styles.backgroundPopUp}>
      <div className={styles.popUpBox}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <div onClick={() => setPopUpProduct(!popUpProduct)} className={styles.close}>
            <img src="./icon-close.svg" alt="close" />
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.img}>
            <img src={imgUrl} alt={title} />
          </div>
          <div className={styles.content}>
            <p className={styles.description}>{description}</p>
            <span className={styles.compoundTitle}>Состав:</span>
            <ul className={styles.compound}>
              {compound.map((el, id) => {
                return <li key={id}>{el}</li>;
              })}
            </ul>
            <div>
              <span className={styles.mass}>{mass}г</span>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.button}>
            <ButtonAdd addToCart={addToCart} />
          </div>
          <div className={styles.statistic}>
            <div className={styles.count}>
              <button onClick={decreaseCount}>-</button>
              <span>{countProduct}</span>
              <button onClick={increaseCount}>+</button>
            </div>
            <span className={styles.price}>{priceProduct}₽</span>
          </div>
        </div>
      </div>
    </div>,
    modalElement,
  );
};

export default PopUpProduct;
