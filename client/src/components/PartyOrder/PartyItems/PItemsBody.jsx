import React from 'react'
import PItemsButtons from './PItemsButtons'
import PItemsForm from './PItemsForm'
import PItemsList from './PItemsList'
import "./style.scss"

const PItemsBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
        <PItemsList/>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <PItemsButtons/>
      <PItemsForm/>
    </div>
  )
}

export default PItemsBody
