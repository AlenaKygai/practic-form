import React from 'react';
import {Field,ErrorMessage} from 'formik';
import styles from './InputWrapper.module.css';
// import cx from 'classnames';

const InputWrapper = (props) => {
  const {name} = props;
  return(
    <label>
      <Field {...props} className={styles.inputWrapper}/>
      <ErrorMessage name={name} component='span' className={styles.error}/>
    </label>

  )
}

export default InputWrapper;