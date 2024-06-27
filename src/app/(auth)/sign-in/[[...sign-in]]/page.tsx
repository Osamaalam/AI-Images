import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (<SignIn appearance={{ elements: { logoBox: { height: '100px', width: '315px' } } }} />);
}

export default SignInPage
