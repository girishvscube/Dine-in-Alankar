import React, { useState } from "react";
import  Validator from "validatorjs";
import swal from "sweetalert";
import axiosInstance from "../../helpers/axios"
import "./style.scss";
import { Button } from "../../Button";
import { Text } from "../../Text";
import { useForm } from "react-hook-form";



const fields = {
  name: "",
  phone: "",
  role: "",
  email: "",
  password: "",
  table: "",
  
};

const AddNewStaffForm = () => {
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
			name: "required|max:100",
			phone: "required|numeric",
			role: "required|max:150",
      email: "required|email",
			password: "required|password",
      table: "required",
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
      <div className="h-[40vh] grid  grid-rows-3 pr-20 grid-flow-col">
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Name</p>
          <Text
						name="name"
						value={params.name}
						handleChange={handleChange}
						error={errors.name}
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
          <p className="font-sans font-semibold text-base mb-1">Role</p>
          <Text
						name="role"
						value={params.role}
						handleChange={handleChange}
						error={errors.role}
						placeholder=""
            className="h-16"
					/>
        </div>
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Email</p>
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
          <p className="font-sans font-semibold text-base mb-1">Password</p>
          <Text
						name="password"
						value={params.password}
						handleChange={handleChange}
						error={errors.password}
						placeholder=""
            className="h-16"
					/>
        </div>
        <div className=" mr-10 flex flex-col">
          <p className="font-sans font-semibold text-base mb-1">Table</p>
          <Text
						name="table"
						value={params.table}
						handleChange={handleChange}
						error={errors.table}
						placeholder=""
            className="h-16"
					/>
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
        <Button text="Create Staff" className="pl-12 pr-12"></Button>
      </div>
    </form>
  );
};

export default AddNewStaffForm;
