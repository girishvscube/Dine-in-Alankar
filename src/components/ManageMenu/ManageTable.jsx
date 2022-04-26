import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ToggleSwitch from "../ToggleSwitch";
import { Link } from "react-router-dom";
import edit from "../../Images/ManageMenu/EDIT ICON.svg";
import "./style.scss";
import ToggleButton from "../ToggleButton";

const ManageTable = () => {
  const [design, setDesign] = useState("adding");
  const [menu, setMenu] = useState([]);
  const [value, setValue] = useState(true);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleClick = () => {
    if (value === false) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  const { data, handleData } = useContext(AuthContext);

  const token = localStorage.getItem("alankartoken");
  var number = 1;

  const stats = () => {
    const res = axios.get(`${BASE_URL}/admin/menus?page=1`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      handleData(res.data.data);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  const handleid = (data) => {
    // console.log("id data", data);
  };

  useEffect(() => {
    stats();
  }, []);

  return (
    <div className=" h-[65vh] box bg-white pt-2 pl-6 mt-10  rounded-lg">
      {/* {console.log("menu data", menu)} */}
      <div className="text-orange text-xl  mt-5 mb-4 font-semibold font-sans">
        All Items
      </div>
      <div className="h-[56vh] overflow-y-scroll font-sans">
        <Table className="relative">
          <Thead className="sticky top-0 border-b-2 mb-1 z-20 bg-white head ">
            <Tr className=" text-left text-lg ">
              <Th className="font-sans pb-2">S. No.</Th>
              <Th className="font-sans pl-10 pb-2">Item Name</Th>
              <Th className="font-sans pl-12 pb-2">Price</Th>
              <Th className="font-sans pb-2 pl-12">Category</Th>
              <Th className="font-sans pl-12 pb-2">Today's Stock</Th>
              <Th className="font-sans pb-2 pl-6">Availability</Th>
              <Th className="font-sans pb-2 pl-6">Action</Th>
            </Tr>
          </Thead>
          {data.map((data, i) => {
            return (
              <Tbody>
                <Tr className="row border-b-2 font-sans">
                  <Td key={i} className="pt-9 pb-9">
                    {number++}.
                  </Td>
                  <Td key={i} className=" text-left pl-12 ">
                    <img
                      src={data.image}
                      className="h-12 w-12"
                      alt="item image"
                    />
                    {data.name} &#40;{data.availability_count}&#41;
                  </Td>
                  <Td key={i} className="text-left pl-12">
                    <p className="font-sans text-sm">
                      &#8377; {data.dinein_price} &#40; Dine - In &#41;
                    </p>
                    <p className="font-sans text-sm">
                      &#8377; {data.takeaway_price} &#40; Take Away &#41;
                    </p>
                  </Td>
                  <Td key={i} className="pl-12 text-left ">
                    {data.category.name}
                  </Td>
                  <Td key={i} className="  pl-12 ">
                    <div className="flex flex-row update">
                      <input
                        onClick={handleClick}
                        type="number"
                        className="w-14 h-9 rounded pl-1 pr-1 outline-none border-2 border-button_border"
                      />
                      {value ? (
                        <div>
                          <button className="adding ml-3 text-xs text-white font-semibold pl-1.5 pr-1.5 pt-2.5 pb-2.5">
                            Update
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button className="add ml-3 text-xs text-white font-semibold pl-2 pr-2 pt-2.5 pb-2.5">
                            Update
                          </button>
                        </div>
                      )}
                    </div>
                  </Td>
                  <Td key={i} className="pl-10">
                    <ToggleButton defaultChecked="true" />
                  </Td>
                  <Td className=" flex justify-center pr-12 pt-6 ">
                    <Link to={`/menu/edit-menu/${data.id}`}>
                      <img
                        src={edit}
                        onClick={() => {
                          handleid(data.id);
                        }}
                        className="mt-1"
                        alt="edit icon"
                      />
                    </Link>
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </div>
    </div>
  );
};

export default ManageTable;
