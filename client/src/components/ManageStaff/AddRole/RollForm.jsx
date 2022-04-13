import React from 'react'
import { Button } from '../../Button'
 import { TextField } from '../../TextField'

const RollForm = () => {
  return (
    <div className='h-[70vh]'>
        <p className='text-base font-semibold font-sans mb-2'>Role</p>
      <TextField className='w-2/5 h-16'/>
      <div className=' mt-28  flex justify-center items-center'>
          <Button className='pl-10 pr-10'>Create Role</Button>
      </div>
    </div>
  )
}

export default RollForm
