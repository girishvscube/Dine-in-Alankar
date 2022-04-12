import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { TextField } from "../../TextField";
import { Button } from "../../Button";

const DetailForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);

  return (
     <form onSubmit={handleSubmit(onSubmit)} className="h-[70vh]">
      <div className="h-[45vh] field grid  mt-10 grid-col-1 pr-20 grid-flow-col">
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Customer Name</p>
          <TextField className="w-10/12 h-16"/>
        </div>
       
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Phone No.</p>
          <TextField className="w-10/12 h-16"/>
        </div>
        
        
      </div>
      <div className="w-11/12  h-1/6 mt-18 flex items-center justify-center">
        <Button className="pl-16 pr-16">Next</Button>
      </div>
    </form>
  )
}

export default DetailForm
