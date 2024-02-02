import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Product.module.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Product = {
  imgUrl: string;
  title: string;
  description: string;
  price: number;
  compound:number[];
};

const Product: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`https://65b11669d16d31d11bde08bc.mockapi.io/burgers/${id}`);
      setProduct(data);
    };
    getProduct();
  }, []);

  if (!product) {
    return <>Error</>;
  }
  
  return (
    <>
      <Link to="/you-meal/">
        <button className={styles.btnBack}> {'<'} Вернуться обратно</button>
      </Link>
      <div className={styles.wrapper}>
        <img src={product.imgUrl} alt={product.title} />
        <div>
          <h4>{product.title}</h4>

          <p>{product.description}</p>
          <ul>
            <h5>Состав:</h5>
            {product.compound?.map((el, id) => (
              <li key={id}>{el}</li>
            ))}
          </ul>
          <span>{product.price}₽</span>
        </div>
      </div>
    </>
  );
};

export default Product;
