import React, { useState } from "react";
import Validator from "validatorjs";
import axios from "axios";
import { Button } from "../../Button";
import { Text } from "../../Text";

const fields = {
  role: "",
};

const RollForm = () => {
  const [params, setParams] = useState(fields);
  const [errors, setErrors] = useState(fields);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("alankartoken");

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

    axios
      .post(
        `${BASE_URL}/admin/role`,
        { name: params.role },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        alert(" Role created Successfully");
      })
      .then((error) => {
        // alert("Please check whether you filled all details correctly");
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="h-[70vh]">
      <p className="text-base font-semibold font-sans mb-2">Role</p>
      <Text
        name="role"
        value={params.role}
        handleChange={handleChange}
        error={errors.role}
        placeholder=""
        className="w-2/5 h-16"
      />
      <div className=" mt-28  flex justify-center items-center">
        <Button text="Create Role" className="pl-10 pr-10"></Button>
      </div>
    </form>
  );
};

export default RollForm;
