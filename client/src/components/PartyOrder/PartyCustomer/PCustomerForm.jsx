import React, { useState } from "react";
import  Validator from "validatorjs";
import swal from "sweetalert";
import axiosInstance from "../../helpers/axios"
import "./style.scss";
import { useForm } from "react-hook-form";
import { Text } from "../../Text";
import { Button } from '../../Button';


const fields = {
  customername: "",
  totalamount: "",
  occassion: "",
  phone: "",
  advancereceived: "",
  
};

const PCustomerForm = () => {

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
			totalamount: "required",
			occassion: "required",
      phone: "required|numeric",
			advancereceived: "required",
      
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
      <div className="h-[60vh] w-11/12 mt-16  rounded-lg bg-white  flex flex-col">
        <div className="menu_box w-full mt-1 grid grid-rows-3  grid-flow-col gap-1 pr-1/12">
          <div className="">
            <p className="text-base font-semibold font-sans">Customer Name</p>
            <Text
						name="customername"
						value={params.customername}
						handleChange={handleChange}
						error={errors.customername}
						placeholder=""
            className="h-16"
					/>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Total Amount</p>
            <Text
						name="totalamount"
						value={params.totalamount}
						handleChange={handleChange}
						error={errors.totalamount}
						placeholder=""
            className="h-16"
					/>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Occassion</p>
            <Text
						name="occassion"
						value={params.occassion}
						handleChange={handleChange}
						error={errors.occassion}
						placeholder=""
            className="h-16"
					/>
          </div>
         
          
          <div className="">
            <p className="text-base font-semibold font-sans">Phone No.</p>
            <Text
						name="phone"
						value={params.phone}
						handleChange={handleChange}
						error={errors.phone}
						placeholder=""
            className="h-16"
					/>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Advance Received</p>
            <Text
						name="advancereceived"
						value={params.advancereceived}
						handleChange={handleChange}
						error={errors.advancereceived}
						placeholder=""
            className="h-16"
					/>
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
            <Button text="Next" className='pl-16 pr-16'></Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PCustomerForm
