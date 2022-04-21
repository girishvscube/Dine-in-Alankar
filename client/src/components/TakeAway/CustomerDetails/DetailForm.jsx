import React, { useState } from "react";
import  Validator from "validatorjs";
import swal from "sweetalert";
import axiosInstance from "../../helpers/axios";
import "./style.scss";
import { useForm } from "react-hook-form";
import { Text } from "../../Text";
import { Button } from "../../Button";



const fields = {
  customername: "",
  phone: "",
};

const DetailForm = () => {

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
			customername: "required|max:100",
			phone: "required",
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
     <form onSubmit={handleSubmit} className="h-[70vh]">
      <div className="h-[45vh] field grid  mt-10 grid-col-1 pr-20 grid-flow-col">
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Customer Name</p>
          <Text
						name="customername"
						value={params.customername}
						handleChange={handleChange}
						error={errors.customername}
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
        
      </div>
      <div className="w-11/12  h-1/6 mt-18 flex items-center justify-center">
        <Button text="Next" className="pl-16 pr-16"></Button>
      </div>
    </form>
  )
}

export default DetailForm
