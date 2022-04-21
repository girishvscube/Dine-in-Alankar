import React, { useState } from "react";
import  Validator from "validatorjs";
import swal from "sweetalert";
import axiosInstance from "../../../components/helpers/axios"
 import { useForm } from "react-hook-form";
import "./style.scss";
import { Text } from '../../Text';
import { Button } from '../../Button';

const fields = {
  storename: "",
  email: "",
  gstpercent: "",
  phone: "",
  storeaddress: "",
  gstno: "",
 
};


const StoreForm = () => {

  const [params, setParams] = useState(fields);
	const [errors, setErrors] = useState(fields);

	const handleChange = (e) => {
		const { name, value } = e.target;
		const newParams = { ...params };
		newParams[name] = value;
		setParams(newParams);
	};

  const handleSubmit = (e) => {
		e.preventDefault();
		let validation = new Validator(params, {
			storename: "required|max:100",
			email: "required|email",
			gstpercent: "required|max:150",
      phone: "required|numeric",
			storeaddress: "required",
      gstno: "required|numeric",
		});
		if (validation.fails()) {
			const fieldErrors = {};
			for (let key in validation.errors.errors) {
				fieldErrors[key] = validation.errors.errors[key][0];
			}
			setErrors(fieldErrors);
			return;
		}
		setErrors({});
		axiosInstance
			.post("/bulk-order", params)
			.then((response) => {
				swal(
					"Thanks for contacting us!",
					response.data.data.message,
					"success"
				).then((value) => {
					setParams(fields);
				});
			})
			.catch((error) => {
				const fieldErrors = {};
				for (let key in error.response.data.errors) {
					fieldErrors[key] = error.response.data.errors[key][0];
				}
				setErrors(fieldErrors);
			});
	};


  return (
    <form onSubmit={handleSubmit}  className="h-[70vh]">
    <div className="h-[40vh] grid  grid-rows-3 pr-20 grid-flow-col">
      <div className=" mr-10 flex flex-col">
        <p className="font-sans text-base font-semibold mb-1">Store Name</p>
        <Text
						name="storename"
						value={params.storename}
						handleChange={handleChange}
						error={errors.storename}
						placeholder=""
            className="h-16"
					/>
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Email</p>
        <Text
						name="email"
						value={params.email}
						handleChange={handleChange}
						error={errors.email}
						placeholder=""
            className="h-16"
					/>
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">GST Percent</p>
        <Text
						name="gstpercent"
						value={params.gstpercent}
						handleChange={handleChange}
						error={errors.gstpercent}
						placeholder=""
            className="h-16"
					/>
        
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base mb-1">Phone No.</p>
        <Text
						name="phone"
						value={params.phone}
						handleChange={handleChange}
						error={errors.phone}
						placeholder=""
            className="h-16"
					/>
      </div>
      
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Store Address</p>
        <Text
						name="storeaddress"
						value={params.storeaddress}
						handleChange={handleChange}
						error={errors.storeaddress}
						placeholder=""
            className="h-16"
					/>
       
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">GST No.</p>
        <Text
						name="gstno"
						value={params.gstno}
						handleChange={handleChange}
						error={errors.gstno}
						placeholder=""
            className="h-16"
					/>
      </div>
    </div>
   
    <div className=" mt-20 mr-28 flex items-center justify-center">
     <Button text="Update" className='pl-14 pr-14'></Button>
    </div>
  </form>
  )
}

export default StoreForm
