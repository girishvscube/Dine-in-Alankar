import React from 'react'
import HeaderNav from '../../HeaderNav'
import RollBody from './RollBody'
import "./style.scss"

const RollPage = () => {
  return (
    <div>
    <div className="main">
      <div className="bg-sidenav_pink w-1/5 h-full">
        
      </div>
      <div className="w-full h-full flex flex-col">
        <HeaderNav/>
        <RollBody/>
      </div>
    </div>
  </div>
  )
}

export default RollPage
