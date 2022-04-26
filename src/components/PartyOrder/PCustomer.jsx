import React, { useState } from "react";
import Validator from "validatorjs";
import swal from "sweetalert";
import "./style.scss";
import { Text } from "../Text";
import { Button } from "../Button";
import axios from "axios";

const PCustomer = () => {
  const fields = {
    name: "",
    phone: "",
    total: "",
    advance_received: "",
    occassion: "",
    date_of_occassion: "",
  };
  const [params, setParams] = useState(fields);
  const [errors, setErrors] = useState(fields);
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newParams = { ...params };
    newParams[name] = value;
    setParams(newParams);
    // console.log(params);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = new Validator(params, {
      name: "required|max:100",
      phone: "required",
      total: "required",
      advance_received: "required|numeric",
      occassion: "required",
      date_of_occassion: "required",
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

    // console.log("params data", params);
  };
  const customerData = {
    name: params.name,
    phone: params.phone,
    total: params.total,
    advance_received: params.advance_received,
    occassion: params.occassion,
    // date_of_occassion: params.date_of_occassion,
    date_of_occassion: "2022-04-22",
    order_type: 3
  };
  const handleDate = (e) => {
    params.date_of_occassion = e.target.value;
  };

  const handleClick = () => {
    console.log(customerData, "customer data");
    localStorage.setItem("partyOrderData", JSON.stringify(customerData));
  };

  return (
    <form onSubmit={handleSubmit} className="h-[70vh]">
      <div className="h-[60vh] w-11/12 rounded-lg bg-white  flex flex-col">
        <div className="menu_box w-full mt-1 grid grid-rows-3  grid-flow-col gap-1 pr-1/12">
          <div className="">
            <p className="text-base font-semibold font-sans">Customer Name</p>
            <Text
              name="name"
              value={params.name}
              handleChange={handleChange}
              error={errors.name}
              placeholder=""
              className="h-16"
            />
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Total Amount</p>
            <Text
              name="total"
              value={params.total}
              handleChange={handleChange}
              error={errors.total}
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
            <p className="text-base font-semibold font-sans">
              Advance Received
            </p>
            <Text
              name="advance_received"
              value={params.advance_received}
              handleChange={handleChange}
              error={errors.advance_received}
              placeholder=""
              className="h-16"
            />
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">
              Date Of Occassion
            </p>
            <input
              type="date"
              name="date_of_occassion"
              onChange={handleDate}
              className="rounded-lg h-16 w-9/12 bg-search focus:ring-1 ring-button_border"
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-2/6">
          <div className=" h-1/3 w-full mt-20 flex justify-center items-center">
            <Button
              text="Next"
              onClick={handleClick}
              className="pl-16 pr-16"
            ></Button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default PCustomer;
