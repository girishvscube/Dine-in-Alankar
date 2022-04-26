import React, { useEffect, useContext } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";
import "./style.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import edit from "../../../Images/ManageStaff/EDIT ICON.svg";
import ToggleButton from "../../ToggleButton";

const ManageStaffTable = () => {
  const { data, handleData } = useContext(AuthContext);

  var number = 1;

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const token = localStorage.getItem("alankartoken");
  console.log(token);

  const stats = () => {
    const res = axios.get(`${BASE_URL}/admin/users?page=1`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      // console.log(res.data.data.data);
      handleData(res.data.data.data);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    stats();
  }, []);

  const handleEditStaff = (item) => {
    localStorage.setItem("editStaff", JSON.stringify(item));
  };

  return (
    <div className="bg-white mt-8 box pt-2 pb-10 pl-5 h-[65vh]">
      <div className="text-orange  mt-5 mb-5  text-xl font-semibold font-sans">
        All Items
      </div>
      <div className="h-[58vh] overflow-y-scroll font-sans">
        <Table className="">
          <Thead className="sticky top-0 border-b-2 mb-1 z-20 bg-white head ">
            <Tr className=" text-left text-lg">
              <Th className="font-sans pb-2">S.No.</Th>
              <Th className="font-sans pl-10 pb-2">Name</Th>
              <Th className="font-sans pl-12 pb-2">Email</Th>
              <Th className="font-sans pb-2">Phone No.</Th>
              <Th className="font-sans pl-24 pb-2">Role</Th>
              <Th className="font-sans pb-2">Status</Th>
              <Th className="font-sans pb-2">Action</Th>
            </Tr>
          </Thead>
          {data.map((item, i) => {
            return (
              <Tbody>
                <Tr className="row border-b-2 font-sans">
                  <Td key={i} className="pt-8 pb-8">
                    {number++}.
                  </Td>
                  <Td key={i} className="pt-4 text-left pl-10 pb-4">
                    {item?.name}
                  </Td>
                  <Td key={i} className="pt-4 text-left pl-12 pb-4">
                    {item?.email}
                  </Td>
                  <Td key={i} className="pt-4 text-left pb-4">
                    {item?.phone}
                  </Td>
                  <Td key={i} className="pt-4 text-left pl-24 pb-4">
                    {item?.role?.name}
                  </Td>
                  <Td key={i} className="pt-4 pr-24 pb-4">
                    <ToggleButton defaultChecked="true" />
                  </Td>
                  <Td className="pt-6 flex justify-center pr-12  pb-4">
                    <Link to="/menu/editstaff">
                      <img
                        onClick={() => {
                          handleEditStaff(item);
                        }}
                        src={edit}
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

export default ManageStaffTable;
