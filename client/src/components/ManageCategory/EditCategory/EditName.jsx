import React from 'react'
import { useForm } from "react-hook-form";


const EditName = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

  return (
    <div className=' name  mt-4 flex flex-col'>
       <p className='font-semibold font-sans text-base'>Category Name</p>
        <input className='w-2/5  mt-2 h-16 rounded-lg bg-search outline-none focus-within:border-2 border-button_border font-sans pl-2' type="text" placeholder='' {...register("Name", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.Name?.type === "required" && (
              <p className="text-xs text-red-600">This field is required</p>
            )}
   </div>
  )
}

export default EditName
