import React from 'react'

const RollForm = () => {
  return (
    <div className='h-[70vh]'>
        <p className='text-lg font-semibold font-sans mb-2'>Role</p>
      <input type="text" placeholder='' className='w-2/5 h-20 outline-none pl-2  rounded-lg  bg-search focus-within:border-2 border-button_border'/>
      <div className=' mt-28  flex justify-center items-center'>
          <button className='add text-white text-lg  border-2 border-orange rounded-lg pl-12 pr-12 pt-5 pb-5'>Create Role</button>
      </div>
    </div>
  )
}

export default RollForm
