import "./style.scss";
import React, { useState } from "react";
import Validator from "validatorjs";
import swal from "sweetalert";
import { Button } from "../Button";
import { Text } from "../Text";
import axios from "axios";

const fields = {
 floor:"",
 hall:"",
 type:1,
 status:1,
};

const TableBody = () => {
  const [params, setParams] = useState(fields);
  const [errors, setErrors] = useState(fields);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("alankartoken");
  console.log(token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newParams = { ...params };
    newParams[name] = value;
    setParams(newParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = new Validator(params, {
      name:"max:150",
      floor:"required|max:100",
      hall:"required|max:150",
      type:"max:50",
      status:"max:50",
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

    const obj={
      floor:params.floor,
      hall:params.hall,
      type:1,
      status:1,
    }
    axios
    .post(`${BASE_URL}/admin/tables`, obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
      .then(() => {
        swal(
          "Thanks for creating table!",
          "success"
        ).then(() => {
          setParams(fields);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("data table",params)

  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <p className="font-semibold  text-orange mb-1 text-xl font-sans">Table</p>
      <p className=" font-semibold text-lg font-sans ">
        Setting &nbsp; &#8250; &nbsp; Table
      </p>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <form onSubmit={handleSubmit} className="h-[70vh]">
        <div className=" h-[26vh] grid grid-rows-2 pr-20 grid-flow-col">
          <div className=" mr-10 flex flex-col">
            <p className="font-sans text-base font-semibold  mb-1">
              Table Name
            </p>
             <Text
              name=""
              placeholder=""
              className="h-16"
            /> 
          </div>
          <div className=" mr-10 flex flex-col">
            <p className="font-sans text-base font-semibold   mb-1">
              Floor No.
            </p>
            <Text
              name="floor"
              value={params.floor}
              handleChange={handleChange}
              error={errors.floor}
              placeholder=""
              className="h-16"
            />
          </div>

          <div className=" mr-10 flex flex-col">
            <p className="font-sans font-semibold text-base  mb-1">Hall Name</p>
            <Text
              name="hall"
              value={params.hall}
              handleChange={handleChange}
              error={errors.hall}
              placeholder=""
              className="h-16"
            />
          </div>
        </div>

        <div className="w-10/12 ml-12 h-1/6 mt-24 flex items-center justify-center">
          <Button text="Create" onClick={handleSubmit} className="pl-16 pr-16"></Button>
        </div>
      </form>
    </div>
  );
};

export default TableBody;
