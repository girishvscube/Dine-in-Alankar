import React from 'react'
import HeaderNav from '../../HeaderNav'
import DetailBody from './DetailBody'
import "./style.scss"

const DetailPage = () => {
  return (
    <div>
      <div className="main">
        <div className="bg-sidenav_pink w-1/5 h-full">
          
        </div>
        <div className="w-full h-full flex flex-col">
          <HeaderNav/>
          <DetailBody/>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
