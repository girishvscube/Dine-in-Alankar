import React from "react";
import "./style.scss";
import sales from "../../Images/Reports/Sales.svg";
import search from "../../Images/ActiveOrder/Search_fill.png";
import refresh from "../../Images/TakeAway/Refresh.svg";
import { SearchField } from "../SearchField";
import { pastAllOrdersData } from "../../pastallorders";
import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const PastOrderBody = () => {
  const [data, setData] = useState(pastAllOrdersData);
  const [open, setOpen] = useState(false);
  console.log(data);
  const menuArr = [
    "S.No",
    "Customer Name",
    "Date & Time",
    "Order ID",
    "Total",
    "Payment Mode",
  ];

  const handleClick = (item) => {
    setData(
      data.map((e) => {
        if (e.sno === item.sno) {
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
        Past Order
      </p>
      <p className=" font-semibold text-lg font-sans">
        Party Order &nbsp; &#8250; &nbsp; Past Order{" "}
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
          <p className=" text-xs text-center mt-1 font-sans">Pending Orders</p>
        </div>
      </div>
      <div className="w-7/12 h-1/2 flex flex-col pl-4 pt-2">
        <div className="">
          <div className="h-1/2 flex justify-between flex-row">
            <div className=" bg-search  w-3/4 focus-within:border-2 border-button_border text-orange  flex justify-between pl-2 pr-2  rounded-lg ">
              <SearchField className="h-14" />
              <div className=" bg-search pt-2 pb-2">
                <img src={search} alt="search_icon" />
              </div>
            </div>
            <select className="border-2 border-button_border outline-none text-base pl-2 pr-8 text-orange rounded-lg box">
              <option value="one">Today</option>
              <option value="two">Yesterday</option>
              <option value="three">2 days back</option>
            </select>
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
              {data.map((e) => (
                <>
                  <TableRow
                    key={parseInt(e.sno)}
                    sx={{ "& > *": { borderBottom: "unset" } }}
                  >
                    <TableCell component="th">{e?.sno}</TableCell>
                    <TableCell>{e?.cname}</TableCell>
                    <TableCell>{e?.dt.date}</TableCell>
                    <TableCell>{e?.orderID}</TableCell>
                    <TableCell>{e?.total}</TableCell>
                    <TableCell>{e?.paymentMode}</TableCell>
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
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Customer</TableCell>
                                <TableCell align="center">Amount</TableCell>
                                <TableCell align="center">
                                  Total price ($)
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {e.history.map((historyRow) => (
                                <TableRow key={historyRow.date}>
                                  <TableCell align="center" component="th">
                                    {historyRow.date}
                                  </TableCell>
                                  <TableCell align="center">
                                    {historyRow.customerId}
                                  </TableCell>
                                  <TableCell align="center">
                                    {historyRow.amount}
                                  </TableCell>
                                  <TableCell align="center">
                                    {Math.round(
                                      historyRow.amount * e?.price * 100
                                    ) / 100}
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

export default PastOrderBody;
