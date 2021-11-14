import React from 'react';

import SignIn from '../../components/signin/signin';
import './signin-signup.scss';
import SignUp from '../../components/signup/signup';

export const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp/>
  </div>
);

