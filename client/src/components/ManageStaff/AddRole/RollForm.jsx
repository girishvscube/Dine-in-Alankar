import React from 'react'

const RollForm = () => {
  return (
    <div className='h-[70vh]'>
        <p className='text-xs font-semibold font-sans mb-2'>Role</p>
      <input type="text" placeholder='' className='w-2/6 h-12 outline-none pl-2  rounded-lg  bg-search focus-within:border-2 border-button_border'/>
      <div className='w-11/12 h-1/6 mt-28  flex justify-center items-center'>
          <button className='add text-white text-xs  border-2 border-orange rounded-lg pl-8 pr-8 pt-3 pb-3'>Create Role</button>
      </div>
    </div>
  )
}

export default RollForm
