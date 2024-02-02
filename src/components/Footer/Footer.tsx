import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div style={{ background: '#fff' }}>
      <div className={styles.footer}>
        <div className={styles.wrapper}>
          <Link to="/you-meal/">
            <img src="logo-lg.svg" alt="YourMeal" />
          </Link>
          <div className={styles.info}>
            <div className={styles.order}>
              <h4>Номер для заказа</h4>
              <div>
                <img src="icon-phone.svg" alt="phone icon" />
                <a href="">+7(930)833-38-11</a>
              </div>
            </div>
            <div className={styles.social}>
              <h4>
                <a href="">Мы в соцсетях</a>
              </h4>
              <div className={styles.links}>
                <a href="#">
                  <img src="wk.svg" alt="wk" />
                </a>

                <img src="telegram.svg" alt="telegram" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <span>© YouMeal, 2022</span>
          <span>Design: Anastasia Ilina</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
