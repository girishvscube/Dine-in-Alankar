import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import { Button } from "../../Button";
import { TextField } from "../../TextField";

const AddNewStaffForm = () => {
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
          <p className="font-sans font-semibold text-base mb-1">Name</p>
          <TextField className="w-10/12 h-16"/>
        </div>
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Phone No.</p>
          <TextField className="w-10/12 h-16"/>
        </div>
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Role</p>
          <TextField className="w-10/12 h-16"/>
        </div>
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Email</p>
          <TextField className="w-10/12 h-16"/>
        </div>
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Password</p>
          <TextField className="w-10/12 h-16"/>
        </div>
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Table</p>
          <TextField className="w-10/12 h-16"/>
        </div>
      </div>
      <div className="h-[18vh] mt-5 flex justify-between">
        <div className="w-3/6 h-10/12  flex flex-col">
          <p className="font-sans text-base font-semibold mb-2">Upload Image</p>
          <input type="file" className=" h-3/4 w-1/5 rounded-md bg-search ml-1 border-2 border-orange border-dashed"></input>
        </div>
        <div className="w-3/5 h-10/12   pt-2">
          <div className="w-8/12 h-1/2 ml-10 flex flex-row">
           <div className="form-group mr-8">
           <input className="outline-none" id="one" type="checkbox"/>
            <label className="font-sans" for="one">20A</label>
           </div>
            <div className="form-group mr-8">
            <input className="rounded-md ml-5" id="two" type="checkbox" />
            <label className="font-sans" for="two">20A</label>
            </div>
            <div className="form-group mr-8">
              <input type="checkbox" id="three"/>
              <label for="three">20A</label>
            </div>
            <div className="form-group mr-8">
              <input type="checkbox" id="four"/>
              <label for="four">20A</label>
            </div>
            <div className="form-group mr-8">
              <input type="checkbox" id="five"/>
              <label for="five">20A</label>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-1 flex items-center justify-center">
        <Button className="pl-12 pr-12">Create Staff</Button>
      </div>
    </form>
  );
};

export default AddNewStaffForm;
