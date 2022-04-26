import React from "react";
import "./style.scss";
import search from "../../Images/ActiveOrder/Search_fill.png";
import refresh from "../../Images/TakeAway/Refresh.svg";
import sales from "../../Images/Reports/Sales.svg";
import { Link } from "react-router-dom";
import { SearchField } from "../SearchField";
import { Button } from "../Button";
import axios from "axios";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const PartyBody = () => {
  const [open, setOpen] = useState(false);
  const [partyData, setPartyData] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("alankartoken");

  const menuArr = [
    "S.No",
    "Customer Name",
    "Phone No",
    "Delivery Date & Time",
    "Occassion",
    "Order ID",
    "Grand Total",
    "Advance Received",
    "Pending",
  ];

  useEffect(() => {
    getPartyOrderData();
  }, []);

  const getPartyOrderData = () => {
    axios
      .get(`${BASE_URL}/orders/active-orders?order_type=3&page=3`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        const addStatus = res.data.data.data.map((item) => {
          return {
            ...item,
            status: false,
          };
        });
        setPartyData(addStatus);
      })
      .then((err) => {
        console.log("Error in Specfic Category Data :", err);
      });
  };

  const handleClick = (item) => {
    setPartyData(
      partyData.map((e) => {
        if (e.id === item.id) {
          e.status = !e.status;
          setOpen(!open);
        } else {
          e.status = false;
        }
        return e;
      })
    );
  };

  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <p className="font-semibold text-orange mb-1 text-xl font-sans">
        Active Order
      </p>
      <p className=" font-semibold text-lg font-sans">
        Party Order &nbsp; &#8250; &nbsp; Active Order{" "}
      </p>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <div className="flex flex-row justify-between">
        <div className="w-1/4 flex gap-6  flex-row">
          <div className="w-2/5 bg-white pb-2 box flex items-center justify-center flex-col">
            <div className="h-14 rounded-full w-14  mt-3 bg-red-100">
              <img src={sales} alt="sales icon " className="ml-3 mt-3" />
            </div>
            <p className="text-3xl text-center mt-2 font-sans font-semibold">
              50
            </p>
            <p className=" text-xs text-center mt-1 font-sans">
              Pending Orders
            </p>
          </div>
        </div>
        <div className="w-9/12 h-1/2 flex flex-col pl-4 pt-2">
          <div className="">
            <div className="h-14 pl-24  flex  justify-between flex-row">
              <div className=" w-6/12 bg-search   h-15 focus-within:border-2 border-button_border text-orange  flex justify-between pl-2 pr-2  rounded-lg ">
                <SearchField className="w-7/12" />
                <div className=" bg-search pt-2 pb-2">
                  <img src={search} alt="search_icon" />
                </div>
              </div>
              <input
                type="date"
                className="text-orange w-2/12 h-15 border-2 pl-3 pr-6 border-button_border rounded-lg"
              />
              <Link to="/menu/party-order/customer">
                <Button text="Create New Order" className="pl-4 pr-4"></Button>
              </Link>
            </div>
          </div>
          <div className="h-1/2 w-full mt-6 flex flex-row justify-end items-end">
            <p className="text-orange text-lg">
              <u>Refresh Orders</u>
            </p>
            <img src={refresh} alt="refresh icon" />
          </div>
        </div>
      </div>
      <div className=" pt-4 pl-6 h-[60vh] pr-6 mt-6 rounded-lg">
        <h1 className="font-sans font-semibold text-xl  mb-4 text-orange">
          All Orders
        </h1>
        <div className="h-[55vh] text-center  overflow-y-scroll  pt-2 ">
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  {menuArr.map((e) => (
                    <TableCell>{e}</TableCell>
                  ))}
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {partyData.map((e, index) => (
                  <>
                    <TableRow
                      key={index + 1}
                      sx={{ "& > *": { borderBottom: "unset" } }}
                    >
                      <TableCell component="th">{index + 1}</TableCell>
                      <TableCell>{e?.name}</TableCell>
                      <TableCell>+91 {e?.phone}</TableCell>
                      <TableCell>{e?.created_at}</TableCell>
                      <TableCell>{e?.occassion}</TableCell>
                      <TableCell>{e?.id}</TableCell>
                      <TableCell>₹ {e?.total}</TableCell>
                      <TableCell className=" text-green-500">
                        ₹ {e?.advance_received}
                      </TableCell>
                      <TableCell className=" text-red-500">₹ 000</TableCell>
                      <TableCell align="right">
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => handleClick(e)}
                        >
                          {open && e.status ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse
                          in={open && e.status}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow>
                                  <TableCell align="center">Sno</TableCell>
                                  <TableCell align="center">Name</TableCell>
                                  <TableCell align="center">Price</TableCell>
                                  <TableCell align="center">Quantity</TableCell>
                                  <TableCell align="center">Total</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {e?.meta_order?.map((historyRow, index) => (
                                  <TableRow key={index + 1}>
                                    <TableCell align="center" component="th">
                                      {index + 1}
                                    </TableCell>
                                    <TableCell align="center">
                                      {historyRow?.menus?.name}
                                    </TableCell>
                                    <TableCell align="center">
                                      {historyRow?.price}
                                    </TableCell>
                                    <TableCell align="center">000000</TableCell>
                                    <TableCell align="center">
                                      {historyRow?.quantity}
                                    </TableCell>
                                    <TableCell align="center">
                                      {parseInt(historyRow?.price) *
                                        parseInt(historyRow?.quantity)}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default PartyBody;
