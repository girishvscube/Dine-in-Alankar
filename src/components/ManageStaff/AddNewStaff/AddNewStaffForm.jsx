import React, { useState } from "react";
import Validator from "validatorjs";
import axios from "axios";
import { Button } from "../../Button";
import { Text } from "../../Text";
import "./style.scss";

const fields = {
  name: "",
  phone: "",
  role: "",
  email: "",
  password: "",
  table: "",
};

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("alankartoken");
var checkedValues = [];

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
    console.log("hello");
    let validation = new Validator(params, {
      name: "required|max:100",
      phone: "required|numeric",
      role: "required|max:150",
      email: "required|email",
      password: "required",
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
    handleClick();
  };

  const handleChangeCheckBox = (e) => {
    const temp = e.target.value;
    const checked = e.target.checked;
    if (checked) checkedValues.push(parseInt(temp));
  };

  const handleClick = () => {
    const postdata = {
      name: params.name,
      email: params.email,
      role_id: parseInt(params.role),
      phone: params.phone,
      image: "",
      tables: [1],
      password: params.password,
    };
    console.log(postdata);
    axios
      .post(`${BASE_URL}/admin/users`, postdata, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        alert(" Created Staff Successfully");
      })
      .then((error) => {
        // alert("Please check whether you filled all details correctly");
        console.log(error);
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
          <input
            type="file"
            className=" h-3/4 w-1/5 rounded-md bg-search ml-1 border-2 border-orange border-dashed"
          ></input>
        </div>
        <div className="w-3/5 h-10/12   pt-2">
          <div className="w-8/12 h-1/2 ml-10 flex flex-row">
            <div className="form-group mr-8">
              <input
                className="outline-none"
                id="one"
                type="checkbox"
                value="20"
                onClick={handleChangeCheckBox}
              />
              <label className="font-sans" for="one">
                20A
              </label>
            </div>
            <div className="form-group mr-8">
              <input
                className="rounded-md ml-5"
                id="two"
                type="checkbox"
                value="21"
                onClick={handleChangeCheckBox}
              />
              <label className="font-sans" for="two">
                20A
              </label>
            </div>
            <div className="form-group mr-8">
              <input
                type="checkbox"
                value="23"
                onClick={handleChangeCheckBox}
                id="three"
              />
              <label for="three">20A</label>
            </div>
            <div className="form-group mr-8">
              <input
                type="checkbox"
                value="24"
                onClick={handleChangeCheckBox}
                id="four"
              />
              <label for="four">20A</label>
            </div>
            <div className="form-group mr-8">
              <input
                type="checkbox"
                value="25"
                onClick={handleChangeCheckBox}
                id="five"
              />
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
