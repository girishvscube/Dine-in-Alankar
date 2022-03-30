import React from 'react'
import ListOfItems from './ListOfItems'
import ManageTable from './ManageTable'
import SearchForMenu from './SearchForMenu'

const ManageMenuBody = () => {
  return (
    <div className='w-full h-full'>
        <ListOfItems/>
        <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bg-orange border-white'/>
        <SearchForMenu/>
        <div className="text-orange w-11/12 mt-10 ml-14 font-semibold font-sans">All Items</div>
        <ManageTable/>
    </div>
  )
}

export default ManageMenuBody
