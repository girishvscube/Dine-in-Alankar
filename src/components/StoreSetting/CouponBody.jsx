import React, { useState } from "react";
import Validator from "validatorjs";
import swal from "sweetalert";
import axios from "axios";
import "./style.scss";
import { Text } from "../Text";
import { Button } from "../Button";

const fields = {
  code: "",
  expires_at: "",
  percent: "",
  status:1,
  value: "",
};

const CouponBody = () => {
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
      code: "required|max:100",
      expires_at: "required|max:100",
      percent: "required|max:50",
      status: "max:20",
      value: "required|max:200",
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
      code: params.code,
      expires_at:params.expires_at,
      percent: params.percent,
      status: 1,
      value: params.value,
    };
    axios
      .post(`${BASE_URL}/admin/coupons`,  obj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then(() => {
        swal(
          "Thanks for creating coupon!",
          "success"
        ).then(() => {
          setParams(fields);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("coupon data",params )

  const handleCetegory=(e)=>{
    params.expires_at=e.target.value
  }

  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <p className="font-semibold text-orange mb-1 text-xl font-sans">
        Create New Coupon
      </p>
      <p className=" font-semibold text-lg font-sans">
        Setting &nbsp; &#8250; &nbsp; Discount
      </p>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <form onSubmit={handleSubmit} className="h-[70vh]">
        <div className="h-[40vh] grid grid-rows-3 pr-20 grid-flow-col">
          <div className=" mr-10 flex flex-col">
            <p className="font-sans text-base font-semibold mb-1">
              Coupon Code
            </p>
            <Text
              name="code"
              value={params.code}
              handleChange={handleChange}
              error={errors.code}
              placeholder=""
              className="w-9/12 h-16"
            />
          </div>
          <div className=" mr-10 flex flex-col">
            <p className="font-sans font-semibold text-base  mb-1">Value</p>
            <Text
              name="value"
              value={params.value}
              handleChange={handleChange}
              error={errors.value}
              placeholder=""
              className="w-9/12 h-16"
            />
          </div>
          <div className=" mr-10 flex flex-col">
            <p className="font-sans font-semibold text-base  mb-1">
              Expiry Date
            </p>
            <input type="date"  name="expires_at" onChange={handleCetegory} className="rounded-lg h-16 w-9/12 bg-search focus:ring-1 ring-button_border"/>
          
          </div>
          <div className="  flex flex-col">
            <p className="font-sans font-semibold text-base mb-1">
              Percentage / Amount
            </p>
            <Text
              name="percent"
              value={params.percent}
              handleChange={handleChange}
              error={errors.percent}
              placeholder=""
              className="w-9/12 h-16"
            />
          </div>

          <div className=" flex flex-col">
            <p className="font-sans font-semibold text-base  mb-1">Status</p>
            <Text
              name="status"
              value={params.status}
              handleChange={handleChange}
              error={errors.status}
              placeholder=""
              className="w-9/12 h-16"
            />
          </div>
        </div>

        <div className=" mt-20 mr-28 flex items-center justify-center">
          <Button text="Create" className="pl-14 pr-14"></Button>
        </div>
      </form>
    </div>
  );
};

export default CouponBody;
