import React from "react";
import CouponForm from "./CouponForm";
import CouponList from "./CouponList";
import "./style.scss";

const CouponBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <CouponList />
      <hr className=" mt-3 mb-6 border-2 bord" />
      <CouponForm />
    </div>
  );
};

export default CouponBody;
