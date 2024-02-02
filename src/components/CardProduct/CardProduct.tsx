import React from 'react';
import styles from './CardProduct.module.scss';
import ButtonAdd from '../button/buttonAdd/ButtonAdd';
import PopUpProduct from '../popUpProduct/PopUpProduct';
import { Link } from 'react-router-dom';

export type CartProductProps = {
  id: number;
  addToCart: () => void;
  idProduct: number;
  title: string;
  price: number;
  mass: number;
  description: string;
  compound: string[];
  category: number;
  imgUrl: string;
};

const CardProduct: React.FC<CartProductProps> = ({
  id,
  addToCart,
  idProduct,
  title,
  price,
  mass,
  description,
  compound,
  category,
  imgUrl,
}) => {
  const [popUpProduct, setPopUpProduct] = React.useState(false);

  popUpProduct
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  return (
    <>
      <div className={styles.cardProduct}>
        <img onClick={() => setPopUpProduct(!popUpProduct)} src={imgUrl} alt={title} />
        <h4>{price}₽</h4>
        <Link to={`/you-meal/product/${id}`}>
          <span>{title}</span>
        </Link>

        <span>{mass}г</span>
        <ButtonAdd addToCart={addToCart} />
      </div>
      {popUpProduct && (
        <PopUpProduct
          popUpProduct={popUpProduct}
          setPopUpProduct={setPopUpProduct}
          price={price}
          mass={mass}
          compound={compound}
          title={title}
          imgUrl={imgUrl}
          description={description}
          category={category}
          idProduct={idProduct}
        />
      )}
    </>
  );
};

export default CardProduct;
