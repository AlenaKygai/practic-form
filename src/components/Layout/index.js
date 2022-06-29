import React from 'react';
import Header from '../Header';
import cx from 'classnames';
import styles from './Layout.module.css'


const Layout = ({children}) =>{
  return(
    <div className={styles.Layout}>
      <div className='container'>
      <Header/>
      <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout;