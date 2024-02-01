import React, { useEffect, useState } from 'react';

import Header from '../components/Header/Header';
import Cart from '../components/cart/Cart';
import CategoryBlock from '../components/CategoryBlock/CategoryBlock';
import styles from './Home.module.scss';
import CardProduct from '../components/CardProduct/CardProduct';
import Footer from '../components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addItemCart } from '../redux/cartSlice';
import { fetchProduct } from '../redux/productSlice';
import Pagination from '../components/Pagination/Pagination';
import SkeletonProduct from '../components/SkeletonProduct/SkeletonProduct';
import { RootState } from '../redux/store';
import { CartItemProps } from '../components/cartItem/CartItem';

const Home: React.FC = () => {
  const { categoryActive, items, status } = useSelector((state: RootState) => state.productSlice);
  const { cartItems } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const numberOfPages = 3;

  useEffect(() => {
    dispatch(
      //@ts-ignore
      fetchProduct({ categoryActive, currentPage, numberOfPages }),
    );
  }, [categoryActive, currentPage]);

  useEffect(() => {
    if (isMounted) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [cartItems]);

  const addToCart = (obj: CartItemProps) => {
    dispatch(addItemCart(obj));
  };

  return (
    <>
      <Header />
      <CategoryBlock />
      <div className={styles.content}>
        <Cart />

        <div className={styles.cards}>
          {status === 'succes'
            ? items.map((obj: any) => (
                <CardProduct addToCart={() => addToCart(obj)} key={obj.idProduct} {...obj} />
              ))
            : [...Array(3)].map((_, id) => <SkeletonProduct key={id} />)}
        </div>
      </div>
      <Pagination
        numberOfPages={numberOfPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Footer />
    </>
  );
};

export default Home;
