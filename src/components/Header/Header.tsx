import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import burger from '../../assets/images/pic.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/you-meal/">
          <img src={logo} alt="logo" />
        </Link>

        <div className={styles.content}>
          <div>
            <img src={burger} alt="burger" />
          </div>
          <div className={styles.title}>
            <h1>
              Только самые <span>сочные бургеры!</span>
            </h1>
            <span>
              Бесплатная доставка от <b>599₽</b>{' '}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
