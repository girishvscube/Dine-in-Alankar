import React, { useState } from "react";
import  Validator from "validatorjs";
import swal from "sweetalert";
import axiosInstance from "../../../components/helpers/axios"
 import { useForm } from "react-hook-form";
import "./style.scss";
import { Text } from '../../Text';
import { Button } from '../../Button';

const fields = {
  couponcode: "",
  value: "",
};


const CouponForm = () => {

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
			couponcode: "required|max:100",
			value: "required",
		
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
    <div className="h-[40vh] grid grid-rows-3 pr-20 grid-flow-col">
      <div className=" mr-10 flex flex-col">
        <p className="font-sans text-base font-semibold mb-1">Coupon Code</p>
        <Text
						name="couponcode"
						value={params.couponcode}
						handleChange={handleChange}
						error={errors.couponcode}
						placeholder=""
            className="w-9/12 h-16"
					/>
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Value</p>
        <Text
						name="value"
						value={params.value}
						handleChange={handleChange}
						error={errors.value}
						placeholder=""
            className="w-9/12 h-16"
					/>
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Expiry Date</p>
        <input type="date" className="rounded-lg h-16 w-9/12 bg-search focus:ring-1 ring-button_border"/>
        
      </div>
      <div className="  flex flex-col">
        <p className="font-sans font-semibold text-base mb-1">Percentage / Amount</p>
        <select className="h-16 bg-search rounded-lg outline-none focus:ring-1 ring-button_border pl-2 w-full">
          <option value="one">13-34</option>
          <option value="two">13-34</option>
          <option value="three">13-34</option>
          <option value="four">13-34</option>
        </select>
      </div>
      
      <div className=" flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Status</p>
        <select className="h-16 bg-search rounded-lg outline-none focus:ring-1 ring-button_border pl-2 w-full">
          <option value="one">13-34</option>
          <option value="two">13-34</option>
          <option value="three">13-34</option>
          <option value="four">13-34</option>
        </select>
       
      </div>
      
    </div>
   
    <div className=" mt-20 mr-28 flex items-center justify-center">
     <Button text="Create" className='pl-14 pr-14'></Button>
    </div>
  </form>
  )
}

export default CouponForm
