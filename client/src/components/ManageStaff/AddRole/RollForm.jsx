import React, { useState } from "react";
import  Validator from "validatorjs";
import swal from "sweetalert";
import axiosInstance from "../../helpers/axios"
import { Button } from '../../Button'
 import { Text } from '../../Text'


 const fields = {
  role: "",
};

const RollForm = () => {

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
			role: "required|max:100",
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
    <form onSubmit={handleSubmit}  className='h-[70vh]'>
        <p className='text-base font-semibold font-sans mb-2'>Role</p>
        <Text
						name="role"
						value={params.role}
						handleChange={handleChange}
						error={errors.role}
						placeholder=""
            className="w-2/5 h-16"
					/>
      <div className=' mt-28  flex justify-center items-center'>
          <Button text="Create Role" className='pl-10 pr-10'></Button>
      </div>
    </form>
  )
}

export default RollForm
