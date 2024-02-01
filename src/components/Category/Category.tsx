import React from 'react';
import styles from './Category.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/productSlice';
import { RootState } from '../../redux/store';

type CategoryProps = {
  title: string;
  category: number;
};

const Category: React.FC<CategoryProps> = ({ title, category }) => {
  const { categoryActive } = useSelector((state:RootState) => state.productSlice);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(changeCategory(Number(category)))}
      className={
        categoryActive === Number(category)
          ? `${styles.category} ${styles.category_active}`
          : styles.category
      }
    >
      <img src={`categories/${category}.svg`} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default Category;
