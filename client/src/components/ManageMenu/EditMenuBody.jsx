import React from 'react'
import EditMenuForm from './EditMenuForm'
import EditMenuList from './EditMenuList'
import "./style.scss";


const EditMenuBody = () => {
  return (
    <div className='w-full h-full bg-darkwhite'>
        <EditMenuList/>
        <hr className='w-11/12 ml-14 mt-1 mb-3 border-2 bord'/>
        <EditMenuForm/>
    </div>
  )
}

export default EditMenuBody
