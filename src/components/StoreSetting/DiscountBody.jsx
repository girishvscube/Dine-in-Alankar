import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Data from "../Data3.json";
import ToggleButton from "../ToggleButton";
import axios from "axios";

const DiscountBody = () => {
  const [coupon, setCoupon] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const token = localStorage.getItem("alankartoken");
  console.log(token);

  var numb = 1;

  const coup = () => {
    const res = axios.get(`${BASE_URL}/admin/coupons`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      setCoupon(res.data.coupons);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  console.log("coupon data", coupon);

  useEffect(() => {
    coup();
  }, []);

  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <p className="font-semibold text-xl text-orange mb-1 font-sans">
        Discount
      </p>
      <p className=" font-semibold text-lg font-sans">
        Setting &nbsp; &#8250; &nbsp; Discount
      </p>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <div className="  flex justify-between">
        <div className="flex justify-between">
          <Link to="/menu/setting/create-coupon">
            <Button text="Create New Coupon" className="pl-4 pr-4"></Button>
          </Link>
        </div>
      </div>
      <div className="bg-white pb-4 mt-8 pt-10 box ">
        <div className=" overflow-y-scroll h-[60vh] pl-10 pr-10 pb-10  font-sans">
          <Table className="">
            <Thead className="sticky top-0 border-b-2 z-20 mb-1 bg-white head ">
              <Tr className=" text-left text-lg">
                <Th className="font-sans  pb-4">S. No.</Th>
                <Th className="font-sans pb-4 ">Name</Th>
                <Th className="font-sans pb-4">Date</Th>
                <Th className="font-sans pb-4 pr-56">Status</Th>
              </Tr>
            </Thead>
            {coupon.map((data, i) => {
              return (
                <Tbody>
                  <Tr className="row border-b-2 font-sans">
                    <Td key={i} className="pt-8 pb-8">
                      {numb++}.
                    </Td>
                    <Td key={i} className=" text-left  ">
                      {data.code}
                    </Td>
                    <Td key={i} className="text-left">
                      {data.created_at.substring(0,10)}
                    </Td>
                    <Td key={i} className=" text-left">
                      <ToggleButton defaultChecked="true" />
                    </Td>
                  </Tr>
                </Tbody>
              );
            })}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DiscountBody;
