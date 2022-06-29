import React from 'react';
import { Form, Formik,Field } from 'formik';
import InputWrapper from '../InputWrapper';
import {SIGN_UP_SCHEMA} from '../../../utils/schemaValidations';
import styles from '../SignUpForm/SignUpForm.module.css';

const initialValues ={
  fname: '',
  lname:'',
  dname: '',
  email: '',
  password:'',
  passwordConfirm:'',
  joinBuyer: false,
  joinSeller: false,
  allowMarketingPromoOffers: false,
}

const SignUpForm = (props) =>{
  const onSubmit = (formikBag) =>{
    formikBag.resetForm();
  }
  return(
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_UP_SCHEMA}>{
        (formikProps)=>{
          return(
            <Form className={styles.singUpForm}>
              <h2 className={styles.signUpTitle}>CREATE AN ACCOUNT</h2>
              <h4 className={styles.signUpSubTitle}>We always keep your name and email address private.</h4>
              <div>
                <InputWrapper name='fname' placeholder='First name'/>
                <InputWrapper name='lname' placeholder='Last name'/>
                <InputWrapper name='dname' placeholder='Display Name'/>
                <InputWrapper name='email' placeholder='Email address'/>
                <InputWrapper name='password' placeholder='Password'/>
                <InputWrapper name='passwordConfirm' placeholder='Password Confirmation'/>
              </div>
              <div>
                <label>
                  <Field type='checkbox' name='joinBuyer' value='joinBuyer'/>
                  <p>Join As a Buyer</p>
                  <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                </label>
                <label>
                  <Field type='checkbox' name='joinSeller' value='joinSeller'/>
                  <p>Join As a Creative or Marketplace Seller</p>
                  <p>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                </label>               
              </div>
              <label >
                <Field type='checkbox' name='allowMarketingPromoOffers' value='allowMarketingPromoOffers'/>
                Allow Squadhelp to send marketing/promotional offers from time to time
              </label>  
              <input type="submit"  value='Creat account'  className={styles.buttonLogin}/>
              <div>
                <p>By clicking this button, you agree to our <a href='/'>Terms of Service</a>.</p>
              </div>   
              <a href="https://accounts.google.com/" className={styles.googleSignUp}> Sign up with Google</a>          
            </Form>
          )
        }
      }</Formik>
  )
}

export default SignUpForm;