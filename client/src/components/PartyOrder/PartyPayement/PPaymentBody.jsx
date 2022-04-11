import React from 'react'
import PPaymentButtons from './PPaymentButtons'
import PPaymentForm from './PPaymentForm'
import PPaymentList from './PPaymentList'
import "./style.scss";

const PPaymentBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
    <PPaymentList/>
    <hr className=" mt-3 mb-6 border-2 bord" />
    <PPaymentButtons/>
    <PPaymentForm/>
  </div>
  )
}

export default PPaymentBody
