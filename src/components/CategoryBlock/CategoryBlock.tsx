import React from 'react';
import Category from '../Category/Category';
import styles from './CategoryBlock.module.scss';


type Category = {
  title: string
  category: number;
};

const categories: Category[] = [
  {
    title:"Бургеры",
    category: 1,
  },
  {
    title: 'Закуски',
    category: 2,
  },
  {
    title: 'Хот-доги',
    category: 3,
  },
  {
    title: 'Комбо',
    category: 4,
  },
  {
    title: 'Шаурма',
    category: 5,
  },
  {
    title: 'Пицца',
    category: 6,
  },
  {
    title: 'Вок',
    category: 7,
  },
  {
    title: 'Десерты',
    category: 8,
  },
  {
    title: 'Соусы',
    category: 9,
  },
];

const CategoryBlock: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.categories}>
        {categories.map((el, id) => (
          <Category key={id} title={el.title} category={el.category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryBlock;
