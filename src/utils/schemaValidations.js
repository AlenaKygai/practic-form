import * as Yup from 'yup';

export const NAME_SCHEMS = (fieldName) => Yup.string().matches(/[A-Z][a-z]{1,16}$/,'Must be latin letter').required(`${fieldName} is a required field`);

export const EMAIL_SCHEMS = Yup.string().email('Enter correct email').required();

export const PASSWORD_SCHEMS =Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'Enter correct password').required();

export const SIGN_IN_SCHEMA = Yup.object({
  email:EMAIL_SCHEMS,
  password:PASSWORD_SCHEMS,
})

export const SIGN_UP_SCHEMA = Yup.object({
  fname: NAME_SCHEMS('First name'),
  lname: NAME_SCHEMS('Last name'),
  dname: NAME_SCHEMS('Display name'),
  email:EMAIL_SCHEMS,
  password:PASSWORD_SCHEMS, 
  passwordConfirm:Yup.string().oneOf([Yup.ref('password')], 'Password doest match'),
})