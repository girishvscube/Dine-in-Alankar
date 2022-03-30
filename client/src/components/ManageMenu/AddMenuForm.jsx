import React from 'react'

const AddMenuForm = () => {
  return (
    <div className=' h-[530px] w-11/12 ml-14 flex flex-col'>
    <div className=' h-4/6 w-full mt-1 grid grid-rows-4  grid-flow-col gap-1 pr-32'>
          <div className=' mr-14'>
              <p className='text-xs font-semibold font-sans'>Name</p>
              <input placeholder='' type="text" className='w-11/12 h-1/2 bg-input_color mt-2 border-2 outline-none border-orange rounded-md'/>
          </div>
          <div className='mr-14'>
              <p className='text-xs font-semibold font-sans'>Time</p>
              <input placeholder='' type="text" className='w-11/12 h-1/2 bg-input_color outline-none mt-2 rounded-md'/>
          </div>
          <div className=' mr-14'>
              <p className='text-xs font-semibold font-sans'>Sub Category</p>
              <input placeholder='' type="text" className='w-11/12 h-1/2 bg-input_color outline-none mt-2 rounded-md'/>
          </div>
          <div  className='mr-14'>
              <p className='text-xs font-semibold font-sans'>Dine - In Price</p>
              <input placeholder='' type="text" className='w-11/12 h-1/2 bg-input_color outline-none border-2 border-orange mt-2 rounded-md'/>
          </div>
          <div className=' mr-14'>
              <p className='text-xs font-semibold font-sans'>Meal Type</p>
              <div className='w-5/6 h-12  flex justify-between flex-row'>
                  <div className='w-1/3 h-full pt-2  flex felx-row'>
                      <input type="checkbox" className='h-4/5 check  w-2/12'/>
                      <p className='mt-2 ml-2 text-xs font-sans'>Breakfast</p>
                  </div>
                  <div className='w-1/3 h-full pt-2  flex felx-row'>
                  <input type="checkbox" className='h-4/5 w-2/12'/>
                      <p className='mt-2 ml-2 text-xs font-sans'>Lunch</p>
                  </div>
                  <div className='w-1/3 h-full pt-2  flex felx-row'>
                  <input type="checkbox" className='h-4/5 w-2/12'/>
                      <p className='mt-2 ml-2 text-xs font-sans'>Dinner</p>
                  </div>
              </div>
          </div>
          <div  className='mr-14'>
              <p className='text-xs font-semibold font-sans'>Category</p>
              <input placeholder='' type="text" className='w-11/12 h-1/2 bg-input_color outline-none mt-2 rounded-md'/>
          </div>
          <div className=' mr-14'>
              <p className='text-xs font-semibold font-sans'>Take Away Price</p>
              <input placeholder='' type="text" className='w-11/12 h-1/2 bg-input_color outline-none mt-2 rounded-md'/>
          </div>
          <div  className='mr-14'>
              <p className='text-xs font-semibold font-sans'>Availability Count</p>
              <input placeholder='' type="text" className='w-11/12 h-1/2 bg-input_color outline-none mt-2 rounded-md'/>
          </div>
               
         
    </div>
    <div className='flex flex-col w-full h-2/6'>
    <div className=' h-2/3 w-full mt-1 flex flex-col'>
          <p className='font-semibold font-sans'>Upload Image</p>
          <div className='h-5/6 w-1/12 mt-1 bg-red-400'>
          
          </div>
    </div>
    <div className=' h-1/3 w-full mt-1'>
        <button className='h-5/6 w-2/12 ml-[40%] mt-1 add rounded-md text-white font-semibold  bg-red-500 font-sans'>Update Menu</button>
    </div>
    </div>
  </div>
  )
}

export default AddMenuForm
