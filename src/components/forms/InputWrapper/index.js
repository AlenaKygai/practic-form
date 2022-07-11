import React from 'react';
import {Field,ErrorMessage} from 'formik';
import styles from './InputWrapper.module.css';
import cx from 'classnames';

const InputWrapper = (props) => {
  const {name,...rest} = props;
  return(
    <label className={styles.inputWrapper}>
      <Field {...props}>{
        ({field,meta})=>{
          const classNames=cx(styles.input,{
            [styles.invalid]: meta.touched && meta.error
          })
          return <input {...field} {...rest} className={classNames}/>
        }
      }
      </Field>  
      <ErrorMessage name={name} component='span' className={styles.error}/>
    </label>

  )
}

export default InputWrapper;