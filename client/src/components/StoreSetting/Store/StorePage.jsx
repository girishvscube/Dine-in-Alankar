import React from 'react'
import HeaderNav from '../../HeaderNav'
import StoreBody from './StoreBody'
import "./style.scss";

const StorePage = () => {
  return (
    <div>
    <div className="main">
      <div className="bg-sidenav_pink w-1/5 h-full">
        
      </div>
      <div className="w-full h-full flex flex-col">
        <HeaderNav/>
        <StoreBody/>
      </div>
    </div>
  </div>
  )
}

export default StorePage
