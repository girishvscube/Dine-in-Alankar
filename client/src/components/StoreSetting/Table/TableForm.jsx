import React, { useState } from "react";
import  Validator from "validatorjs";
import swal from "sweetalert";
import axiosInstance from "../../../components/helpers/axios"
 import { useForm } from "react-hook-form";
import { Button } from '../../Button';
import "./style.scss";
import { Text } from '../../Text';


const fields = {
  tablename: "",
  floorno: "",
  hallname: "",
};

const TableForm = () => {
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
			tablename: "required|max:100",
			floorno: "required",
			hallname: "required|max:150",
      
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
    <div className=" h-[26vh] grid grid-rows-2 pr-20 grid-flow-col">
      <div className=" mr-10 flex flex-col">
        <p className="font-sans text-base font-semibold  mb-1">Table Name</p>
        <Text
						name="tablename"
						value={params.tablename}
						handleChange={handleChange}
						error={errors.tablename}
						placeholder=""
            className="h-16"
					/>
      </div>
      <div className=" mr-10 flex flex-col">
        <p className="font-sans text-base font-semibold   mb-1">Floor No.</p>
        <Text
						name="floorno"
						value={params.floorno}
						handleChange={handleChange}
						error={errors.floorno}
						placeholder=""
            className="h-16"
					/>
      </div>
     
      <div className=" mr-10 flex flex-col">
        <p className="font-sans font-semibold text-base  mb-1">Hall Name</p>
        <Text
						name="hallname"
						value={params.hallname}
						handleChange={handleChange}
						error={errors.hallname}
						placeholder=""
            className="h-16"
					/>
       
      </div>
      
    </div>
   
    <div className="w-10/12 ml-12 h-1/6 mt-24 flex items-center justify-center">
     <Button text="Create" className='pl-16 pr-16'></Button>
    </div>
  </form>
  )
}

export default TableForm
