import React from 'react'
 import { useForm } from "react-hook-form";
import "./style.scss";
import { TextField } from '../../TextField';
import { Button } from '../../Button';

const StoreForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-[70vh]">
    <div className="h-[40vh] grid  grid-rows-3 pr-20 grid-flow-col">
      <div className=" mr-10 flex flex-col">
        <p className="font-sans text-base font-semibold mb-1">Store Name</p>
        <TextField className="w-10/12 h-16"/>
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Email</p>
        <TextField className="w-10/12 h-16"/>
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">GST Percent</p>
        <TextField className="w-10/12 h-16"/>
        
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base mb-1">Phone No.</p>
        <TextField className="w-10/12 h-16"/>
      </div>
      
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Store Address</p>
        <TextField className="w-10/12 h-16"/>
       
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">GST No.</p>
        <TextField className="w-10/12 h-16"/>
      </div>
    </div>
   
    <div className=" mt-20 mr-28 flex items-center justify-center">
     <Button className='pl-14 pr-14'>Update</Button>
    </div>
  </form>
  )
}

export default StoreForm
