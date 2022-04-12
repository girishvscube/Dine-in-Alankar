import React from 'react'
import "./style.scss";
import { useForm } from "react-hook-form";
import { TextField } from '../../TextField';
import { Button } from '../../Button';

const PCustomerForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-[70vh]">
      <div className="h-[60vh] w-11/12 mt-16  rounded-lg bg-white  flex flex-col">
        <div className="menu_box w-full mt-1 grid grid-rows-3  grid-flow-col gap-1 pr-1/12">
          <div className="">
            <p className="text-base font-semibold font-sans">Customer Name</p>
            <TextField className="w-10/12 h-16"/>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Total Amount</p>
            <TextField className="w-10/12 h-16"/>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Occassion</p>
            <TextField className="w-10/12 h-16"/>
          </div>
         
          
          <div className="">
            <p className="text-base font-semibold font-sans">Phone No.</p>
            <TextField className="w-10/12 h-16"/>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Advance Received</p>
            <TextField className="w-10/12 h-16"/>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">
              Date Of Occassion
            </p>
            <input type="date" className='w-10/12 h-16 bg-search'/>
          </div>
        </div>
        <div className="flex flex-col w-full h-2/6">
          <div className=" h-1/3 w-full mt-20 flex justify-center items-center">
            <Button className='pl-16 pr-16'>Next</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PCustomerForm
