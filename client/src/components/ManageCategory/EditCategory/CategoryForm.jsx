import React, { useState } from "react";
import  Validator from "validatorjs";
import swal from "sweetalert";
import axiosInstance from "../../helpers/axios";
import "./style.scss";
import { orange } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import { color } from "@mui/system";
import food from "../../../Images/ManageCategory/fast-food.png"
import Plus from "../Plus/Plus";
import { Button } from "../../Button";
import { Text } from "../../Text";

const fields = {
  category: "",
};

const CategoryForm = () => {

  const [selectedValue, setSelectedValue] = React.useState("a");
  const [params, setParams] = useState(fields);
	const [errors, setErrors] = useState(fields);

	const handleValue = (e) => {
		const { name, value } = e.target;
		const newParams = { ...params };
		newParams[name] = value;
		setParams(newParams);
	};

  
  const handleSubmit = (e) => {
		e.preventDefault();
		let validation = new Validator(params, {
			category: "required|max:100",
		
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

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: "color-radio-button-demo",
      inputProps: { "aria-label": item },
    });

  return (
    <form onSubmit={handleSubmit} className="mt-8 h-[70vh]">
      <div className=' name mb-14  flex flex-col'>
       <p className='font-semibold font-sans text-base'>Category Name</p>
       <Text
						name="category"
						value={params.category}
						handleChange={handleValue}
						error={errors.category}
						placeholder=""
            className="w-2/6 h-16 "
					/>
      </div>
        <div className="w-full h-1/4 grid grid-cols-9 pr-28">
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("a")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("b")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("c")}
            sx={{
              color:orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("d")}
            sx={{
              color:orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("e")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("f")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("g")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("h")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("i")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("j")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("k")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("l")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("m")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("n")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("o")}
            sx={{
              color: orange[100],

              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
      </div>
      <div className="mb-10 mt-10 w-1/3">
       <Plus/>
      </div>
      <div className="w-full h-1/6 flex justify-center items-center">
           <Button text="Update Category" className="pl-6 pr-6"></Button>
      </div>
    </form>
  )
}

export default CategoryForm
