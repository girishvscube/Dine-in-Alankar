import React from 'react'

const CategoryName = () => {
  return (
   <div className='w-11/12 name ml-14 mt-4 flex flex-col'>
       <p className='font-semibold text-xs'>Category Name</p>
        <input className='w-1/3  mt-2 h-3/5 rounded-lg bg-search outline-none focus-within:border-2 border-orange pl-2' type="text" placeholder=''/>
   </div>
  )
}

export default CategoryName
