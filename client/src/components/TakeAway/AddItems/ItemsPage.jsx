import React from 'react'
import HeaderNav from '../../HeaderNav'
import ItemsBody from './ItemsBody'
import "./style.scss";

const ItemsPage = () => {
  return (
<div>
      <div className="main">
        <div className="bg-sidenav_pink w-1/5 h-full">
          
        </div>
        <div className="w-full h-full flex flex-col">
          <HeaderNav/>
          <ItemsBody/>
        </div>
      </div>
    </div>
  )
}

export default ItemsPage
