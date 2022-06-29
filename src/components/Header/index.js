import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <a href='/' className={styles.headerLogo}>
        <img src='/static/images/logo.png' alt='logo'/>
      </a>
      <a href='/signUp' className={styles.headerButton}>
        SignUp
      </a>
    </header>
  )
}

export default Header;