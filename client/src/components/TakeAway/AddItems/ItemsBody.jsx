import React from 'react'
import ItemsButton from './ItemsButton'
import ItemsForm from './ItemsForm'
import ItemsList from './ItemsList'
import "./style.scss";

const ItemsBody = () => {
  return (
    <div  className='w-full bg-darkwhite managemenu_body'>
      <ItemsList/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
      <ItemsButton/>
      <ItemsForm/>
    </div>
  )
}

export default ItemsBody
