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
  join: 'joinBuyer',
  allowMarketingPromoOffers: false,
}

const SignUpForm = (props) =>{
  const onSubmit = (formikBag) =>{
    alert('Done');
  }
  return(
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_UP_SCHEMA}>{
        ({values,dirty,isSubmitting,isValid, ...rest})=>{
          console.log(values,dirty,isSubmitting,isValid)
          return(
            <Form className={styles.singUpForm}>
              <h2 className={styles.signUpTitle}>CREATE AN ACCOUNT</h2>
              <h4 className={styles.signUpSubTitle}>We always keep your name and email address private.</h4>
              <div className={styles.columInputWrapper}>
                <InputWrapper name='fname' placeholder='First name'/>
                <InputWrapper name='lname' placeholder='Last name'/>
                <InputWrapper name='dname' placeholder='Display Name'/>
                <InputWrapper name='email' placeholder='Email address'/>
                <InputWrapper name='password' placeholder='Password'/>
                <InputWrapper name='passwordConfirm' placeholder='Password Confirmation'/>
              </div>
              <div>
                <div className={styles.joinWrapper}>
                  <Field type='radio' name='join' value='joinBuyer' id='joinBuyer'/>
                  <label htmlFor='joinBuyer' className={styles.joinLabel}>
                    <p className={styles.joinLabelTitile}>Join As a Buyer</p>
                    <p className={styles.joinLabelDiscription}>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                  </label>
                </div>
                <div className={styles.joinWrapper}>
                  <Field type='radio' name='join' value='joinSeller' id='joinSeller' />
                  <label htmlFor='joinSeller' className={styles.joinLabel}>
                    <p className={styles.joinLabelTitile}>Join As a Creative or Marketplace Seller</p>
                    <p className={styles.joinLabelDiscription}>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                  </label>
                </div>               
              </div>
              <label className={styles.allowCheckBoxWrapper}>
                <Field type='checkbox' name='allowMarketingPromoOffers' className={styles.allowCheckBox}/>
                Allow Squadhelp to send marketing/promotional offers from time to time
              </label>  
              <input type="submit"  
                value='Creat account'  
                className={styles.buttonLogin} 
                disabled={isSubmitting || !isValid || !dirty || !values.allowMarketingPromoOffers}/>
              <div className={styles.termsOfService}>
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