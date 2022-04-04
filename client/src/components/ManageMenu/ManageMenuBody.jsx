import React from 'react'
import ListOfItems from './ListOfItems'
import ManageTable from './ManageTable'
import SearchForMenu from './SearchForMenu'
import "./style.scss";

const ManageMenuBody = () => {
  return (
    <div  className='w-full bg-darkwhite managemenu_body'>
      <ListOfItems/>
      <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
      <SearchForMenu/>
      <ManageTable/>
    </div>
  )
}

export default ManageMenuBody
