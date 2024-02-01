import React from 'react';
import styles from './Pagination.module.scss';

type PaginationProps = {
  numberOfPages: number;
  setCurrentPage: (value:number) => void;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ numberOfPages, setCurrentPage, currentPage }) => {
  const nextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (number:number) => () => {
    setCurrentPage(number);
  };

  return (
    <div className={styles.pagination}>
      <button disabled={currentPage <= 1} className={styles.btnPage} onClick={previousPage}>
        {'<'}
      </button>
      <div className={styles.pagesList}>
        {[...Array(numberOfPages)].map((_, id) => {
          return (
            <button
              className={
                currentPage === id + 1
                  ? `${styles.btnPage} ${styles.btnPageActive}`
                  : `${styles.btnPage}`
              }
              onClick={changePage(id + 1)}
              key={id}
            >
              {id + 1}
            </button>
          );
        })}
      </div>
      <button disabled={currentPage >= numberOfPages} className={styles.btnPage} onClick={nextPage}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
