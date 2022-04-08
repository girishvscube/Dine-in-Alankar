import React from 'react'
import PCustomerButtons from './PCustomerButtons'
import PCustomerForm from './PCustomerForm'
import PCustomerList from './PCustomerList'
import "./style.scss"

const PCustomerBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <PCustomerList/>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <PCustomerButtons/>
      <PCustomerForm/>
    </div>
  )
}

export default PCustomerBody
