// app/payment/page.js
import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import PhonePePayment from '../components/PhonePePayment/PhonePePayment'

const page = () => {
  return (
    <MainLayout>
        <PhonePePayment/>
    </MainLayout>
  )
}

export default page