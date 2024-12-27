import VerificationInput from '@/components/VerificationIput'
import React from 'react'

const VerifyEmail = () => {
  return (
    <div>
      <VerificationInput btnTitle='verify email' title='Verify your email' api='/api/auth/verify-email' />
    </div>
  )
}

export default VerifyEmail
