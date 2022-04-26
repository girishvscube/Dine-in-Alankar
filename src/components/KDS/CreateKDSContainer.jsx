import { useState, useEffect } from "react";
import { Button } from "../Button";
import Validator from "validatorjs";
import axios from "axios";

export const CreateKDSContainer = () => {
  const intialValues = {
    kname: "",
    order: "",
    hall: "",
  };

  const [params, setParams] = useState(intialValues);
  const [formErrors, setFormErrors] = useState(intialValues);
  const [isSubmit, setisSubmit] = useState(false);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("alankartoken");

  useEffect(() => {
    if (Object.keys(formErrors).len === 0 && isSubmit)
      console.log("params : ", params);
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newParams = { ...params };
    newParams[name] = value;
    setParams(newParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = new Validator(params, {
      kname: "required|max:100",
      order: "required",
      hall: "required",
    });
    if (validation.fails()) {
      const fieldErrors = {};
      for (let key in validation.errors.errors) {
        fieldErrors[key] = validation.errors.errors[key][0];
      }
      setFormErrors(fieldErrors);
      return;
    }
    setFormErrors({});

    handleCreatekds();
  };

  const handleCreatekds = () => {
    const postdata = {};
    axios
      .post(`${BASE_URL}/kds`, postdata, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pt-11 bg-background">
      <div className="flex flex-col gap-4 px-11 mt-2">
        <p className=" font-bold text-2xl text-darkyellow">View KDS</p>
        <p className=" text-lg font-normal">
          Dine-In {">"} KDS {">"} CreateKDS
        </p>
        <p className=" border-b-2 border-darkyellow mt-4"></p>
      </div>
      <form onSubmit={handleSubmit} className="formContainer mt-9">
        <div className=" pl-11">
          <label className="block text-lg  font-semibold mb-2 ">
            Kitchen Name
          </label>
          <input
            className="w-3/4 h-18 bg-search rounded-[10px] outline-none"
            type="text"
            name="kname"
            value={params.kname}
            onChange={handleChange}
          />
          <p className=" mb-6 text-[12px] pl-1 text-[#FF0000] font-medium">
            {formErrors.kname}
          </p>
        </div>

        <div className="pl-11">
          <label className=" block text-lg  font-semibold mb-2">Order</label>
          <input
            className="w-3/4 h-18 bg-search rounded-[10px] outline-none"
            type="text"
            name="order"
            value={params.order}
            onChange={handleChange}
          />
        </div>

        <div className="pl-11">
          <label className=" block text-lg  font-semibold mb-2">
            Hall(Optional)
          </label>
          <input
            className="w-3/4 h-18 bg-search rounded-[10px] outline-none"
            type="text"
            name="hall"
            value={params.hall}
            onChange={handleChange}
          />
        </div>
        <div></div>

        <Button text="Create" className="w-1/4 justify-self-end my-11"></Button>
      </form>
    </div>
  );
};
