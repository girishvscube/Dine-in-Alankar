import React from 'react'
 import { useForm } from "react-hook-form";
import { Button } from '../../Button';
import "./style.scss";
import { TextField } from '../../TextField';

const TableForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);


  return (
     <form onSubmit={handleSubmit(onSubmit)} className="h-[70vh]">
    <div className=" h-[26vh] grid grid-rows-2 pr-20 grid-flow-col">
      <div className=" mr-10 flex flex-col">
        <p className="font-sans text-base font-semibold  mb-1">Table Name</p>
        <TextField className="w-10/12 h-16"/>
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans text-base font-semibold   mb-1">Floor No.</p>
        <TextField className="w-10/12 h-16"/>
      </div>
     
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Hall Name</p>
        <TextField className="w-10/12 h-16"/>
       
      </div>
      
    </div>
   
    <div className="w-10/12 ml-12 h-1/6 mt-24 flex items-center justify-center">
     <Button className='pl-16 pr-16'>Create</Button>
    </div>
  </form>
  )
}

export default TableForm
