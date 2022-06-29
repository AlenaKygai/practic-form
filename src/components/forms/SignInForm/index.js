import React from 'react';
import { Form, Formik,Field } from 'formik';
import InputWrapper from '../InputWrapper';
import {SIGN_IN_SCHEMA} from '../../../utils/schemaValidations';
import styles from '../SignInForm/SignInForm.module.css';

const initialValues ={
  email: '',
  password:'',
  rememberMe: false,
}

const SignInForm = (props) =>{
  const onSubmit = (formikBag) =>{
    formikBag.resetForm();
  }
  return(
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_IN_SCHEMA}>{
        (formikProps)=>{
        return( 
      <Form className={styles.singInForm}> 

        <h2 className={styles.signInTitle}>LOGIN TO YOUR ACCOUNT</h2>

        <InputWrapper name='email' placeholder='Email address'/>
        <InputWrapper name='password' placeholder='Password'/>

        <div className={styles.fieldContainer}>
          <label className={styles.rememberMe}>
            <Field type='checkbox' name='rememberMe' value='rememberMe'/>
            Remember Me
          </label>
          <a href="https://accounts.google.com/" className={styles.forgotPass}> Forgot Password</a>
        </div>

        <input type="submit"  value='Login'  className={styles.buttonLogin}/>
        
        <a href="https://accounts.google.com/" className={styles.googleSignIn}> Sign in with Google</a>

      </Form>)
      }}
    </Formik>
  )
}

export default SignInForm;