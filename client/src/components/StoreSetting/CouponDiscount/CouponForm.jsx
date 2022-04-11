import React from 'react'
import "./style.scss"
import { useForm } from "react-hook-form";

const CouponForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

  return (
   <form onSubmit={handleSubmit(onSubmit)} className=" for">
    <div className="h-[45vh] grid  grid-rows-3 pr-20 grid-flow-col">
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base mb-1">Coupon Code</p>
        <input
          type="text"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border"
          {...register("StoreName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.StoreName?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        {errors?.StoreName?.type === "maxLength" && (
          <p className="text-xs text-red-600">Name cannot exceed 20 characters</p>
        )}
        {errors?.StoreName?.type === "pattern" && (
          <p className="text-red-600 text-xs">Alphabetical characters only</p>
        )}
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base mb-1">Value</p>
        <input
          type="email"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border "
          {...register("Email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
         {errors?.Email?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        {errors?.Email?.type === "pattern" && (
          <p className="text-red-600 text-xs">Invalid email</p>
        )}
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Expiray Date</p>
        <input
          type="text"
          placeholder=""
          className="h-2/4 w-11/12 outline-none pl-2 rounded-lg bg-search focus:ring-2 ring-button_border"
          {...register("Gst", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
         {errors?.Gst?.type === "required" && (
          <p className="text-xs text-red-600">This field is required</p>
        )}
        {errors?.Gst?.type === "maxLength" && (
          <p className="text-xs text-red-600">Role cannot exceed 20 characters</p>
        )}
        
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Percentage/Amount</p>
       
         <div  className="h-2/4 w-11/12 outline-none pl-2 rounded-lg pr-5 bg-search focus-within:border-2 border-button_border ">
             <select className='w-full h-full outline-none bg-search '>
                 <option value="first">123295</option>
                 <option value="second">111111</option>
                 <option value="third">222222</option>
                 <option value="fourth">33333</option>
             </select>
         </div>
          
        
      </div>
      
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Status</p>
       
        <div  className="h-2/4 w-11/12 outline-none pl-2 rounded-lg pr-5 bg-search focus-within:border-2 border-button_border ">
             <select className='w-full h-full outline-none bg-search '>
                 <option value="first">123295</option>
                 <option value="second">111111</option>
                 <option value="third">222222</option>
                 <option value="fourth">33333</option>
             </select>
         </div>
      </div>
      
      
    </div>
   
    <div className="w-10/12 ml-12 h-1/6 mt-20 flex items-center justify-center">
      <button
        type="submit"
        className="add font-sans font-semibold text-base text-white pl-14 pr-14 pt-4 pb-4 rounded-lg border-orange"
      >
        Create
      </button>
    </div>
  </form>
  )
}

export default CouponForm
