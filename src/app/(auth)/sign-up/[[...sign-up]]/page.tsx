import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <SignUp appearance={{ elements: { logoBox: { height: '100px', width: '315px' } } }}/>
  )
}

export default SignUpPage
