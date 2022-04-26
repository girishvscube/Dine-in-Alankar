import "./style.scss";
import React, { useState } from "react";
import Validator from "validatorjs";
import swal from "sweetalert";
import axios from "axios";
import { Text } from "../Text";
import { Button } from "../Button";

const fields = {
  name: "",
  email: "",
  phone: "",
  address: "",
  gst_no: "",
};

const StoreBody = () => {
  const [params, setParams] = useState(fields);
  const [errors, setErrors] = useState(fields);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  let token = localStorage.getItem("alankartoken");

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
      email: "required|email",
      phone: "required|numeric",
      address: "required",
      gst_no: "required|numeric",
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

    

    const obj = {
      name:params.name,
      email: params.email,
      phone: params.phone,
      address: params.address,
      gst_no: params.gst_no,
    };

    console.log("params store", params)

    axios
      .post(`${BASE_URL}/admin/stores`, obj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then(() => {
        swal(
          "Thanks for creating store!",
          "success"
        ).then(() => {
          setParams(fields);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <p className="font-semibold text-xl text-orange mb-1 font-sans">
        Store Setting
      </p>
      <p className=" font-semibold text-lg font-sans">
        Setting &nbsp; &#8250; &nbsp; Store
      </p>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <form onSubmit={handleSubmit} className="h-[70vh]">
        <div className="h-[40vh] grid  grid-rows-3 pr-20 grid-flow-col">
          <div className=" mr-10 flex flex-col">
            <p className="font-sans text-base font-semibold mb-1">Store Name</p>
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
            <p className="font-sans font-semibold text-base  mb-1">Email</p>
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
            <p className="font-sans font-semibold text-base  mb-1">
              GST Percent
            </p>
            <Text
              name="gstpercent"
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
            <p className="font-sans font-semibold text-base  mb-1">
              Store Address
            </p>
            <Text
              name="address"
              value={params.address}
              handleChange={handleChange}
              error={errors.address}
              placeholder=""
              className="h-16"
            />
          </div>
          <div className=" mr-10 flex flex-col">
            <p className="font-sans font-semibold text-base  mb-1">GST No.</p>
            <Text
              name="gst_no"
              value={params.gst_no}
              handleChange={handleChange}
              error={errors.gst_no}
              placeholder=""
              className="h-16"
            />
          </div>
        </div>

        <div className=" mt-20 mr-28 flex items-center justify-center">
          <Button text="Update"  className="pl-14 pr-14"></Button>
        </div>
      </form>
    </div>
  );
};

export default StoreBody;
