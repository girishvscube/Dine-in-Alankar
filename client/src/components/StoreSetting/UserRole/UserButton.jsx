import React from 'react'
import "./style.scss";

const UserButton = () => {
  return (
    <div className=''>
        <div className=' bg-darkwhite pr-5'>
            <select className='rounded-lg pt-5 pb-5 pl-3 pr-20 text-orange outline-none border-2 text-lg border-button_border'>
                <option>Waiter</option>
                <option>Manager</option>
                <option>Chief</option>
            </select>
        </div>
    </div>
  )
}

export default UserButton
