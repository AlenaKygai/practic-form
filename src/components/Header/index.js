import React from 'react';
import styles from './Header.module.css';
import {
  Link,
} from "react-router-dom";
import {ROUTES} from '../../constants/index';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.SIGN_IN} className={styles.headerLogo}>
        <img src='/static/images/logo.png' alt='logo'/>
      </Link>
      <Link to={ROUTES.SIGN_UP} className={styles.headerButton}>
        SignUp
      </Link>
    </header>
  )
}

export default Header;