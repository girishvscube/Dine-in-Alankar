import React from 'react'
import RollForm from './RollForm'
import RollList from './RollList'
import "./style.scss"

const RollBody = () => {
  return (
    <div  className='w-full bg-darkwhite managemenu_body'>
      <RollList/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
      <RollForm/>
    </div>
  )
}

export default RollBody
