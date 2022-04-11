import React from 'react'

const RollForm = () => {
  return (
    <div className='h-[70vh]'>
        <p className='text-base font-semibold font-sans mb-2'>Role</p>
      <input type="text" placeholder='' className='w-2/5 h-16 outline-none pl-2  rounded-lg  bg-search focus-within:border-2 border-button_border'/>
      <div className=' mt-28  flex justify-center items-center'>
          <button className='add text-white text-base  border-2 border-orange rounded-lg pl-12 pr-12 pt-4 pb-4'>Create Role</button>
      </div>
    </div>
  )
}

export default RollForm
