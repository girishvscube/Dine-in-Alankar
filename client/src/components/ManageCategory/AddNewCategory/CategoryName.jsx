import React from 'react'
import { useForm } from "react-hook-form";
import { TextField } from '../../TextField';


const CategoryName = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
   <div className=' name  mt-4 flex flex-col'>
       <p className='font-semibold font-sans text-base'>Category Name</p>
        <TextField className='w-1/3 h-16 mt-1'/>
   </div>
  )
}

export default CategoryName
