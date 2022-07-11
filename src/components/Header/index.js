import React from 'react';
import styles from './Header.module.css';
import {
  Link,
  useLocation,
} from "react-router-dom";
import {ROUTES} from '../../constants/index';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Link to={ROUTES.SIGN_IN} className={styles.headerLogo}>
        <img src='/static/images/logo.png' alt='logo'/>
      </Link>

      {pathname === ROUTES.SIGN_IN
      ? <Link to={ROUTES.SIGN_UP} className={styles.headerButton}>
        SignUp
      </Link>
      : <Link to={ROUTES.SIGN_IN} className={styles.headerButton}>
        Login
      </Link>      
      }
    </header>
  )
}

export default Header;