import React from 'react'
import PaymentButtons from './PaymentButtons';
import PaymentForm from './PaymentForm';
import PaymentList from './PaymentList';
import "./style.scss";

const PaymentBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <PaymentList/>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <PaymentButtons/>
      <PaymentForm/>
    </div>
  )
}

export default PaymentBody
