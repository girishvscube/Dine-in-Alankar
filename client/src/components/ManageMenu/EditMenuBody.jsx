import React from 'react'
import EditMenuForm from './EditMenuForm'
import EditMenuList from './EditMenuList'


const EditMenuBody = () => {
  return (
    <div className='w-full h-full'>
        <EditMenuList/>
        <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bg-orange border-white'/>
        <EditMenuForm/>
    </div>
  )
}

export default EditMenuBody
