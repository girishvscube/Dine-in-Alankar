import React from 'react'
import DetailForm from './DetailForm'
import DetailList from './DetailList'
import "./style.scss"

const DetailBody = () => {
  return (
    <div  className='w-full bg-darkwhite managemenu_body'>
      <DetailList/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
      <DetailForm/>
    </div>
  )
}

export default DetailBody
