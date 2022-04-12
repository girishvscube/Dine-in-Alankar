import React from 'react'
import "./style.scss"
import { useForm } from "react-hook-form";
import { Button } from '../../Button';
import { TextField } from '../../TextField';

const CouponForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

  return (
   <form onSubmit={handleSubmit(onSubmit)} className=" for">
    <div className="h-[35vh] grid  grid-rows-3 pr-20 grid-flow-col">
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base mb-1">Coupon Code</p>
        <TextField className="w-10/12 h-16"/>
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base mb-1">Value</p>
        <TextField className="w-10/12 h-16"/>
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Expiray Date</p>
        <TextField className="w-10/12 h-16"/>
        
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Percentage/Amount</p>
       
         <div  className="h-16 w-11/12 outline-none pl-2 rounded-lg pr-5 bg-search focus-within:border-2 border-button_border ">
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
       
        <div  className="h-16 w-11/12 outline-none pl-2 rounded-lg pr-5 bg-search focus-within:border-2 border-button_border ">
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
     <Button className='pl-14 pr-14'>Create</Button>
    </div>
  </form>
  )
}

export default CouponForm
