import "./style.scss";
import { useState } from "react";
import search from "../../Images/ActiveOrder/Search_fill.png";
import refresh from "../../Images/TakeAway/Refresh.svg";
import { Link } from "react-router-dom";
import { SearchField } from "../SearchField";
import { Button } from "../Button";
import { pastAllOrdersData } from "../../pastallorders";
import axios from "axios";
import { useEffect } from "react";
import * as React from "react";
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

const ManageOrderBody = () => {
  const [data, setData] = useState(pastAllOrdersData);
  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState([]);
  //console.log("order Data", orderData);

  var num = 1;
  const getData = () => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/orders/type?page=1&order_type=2`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${localStorage.getItem("alankartoken")}`,
          },
        }
      )
      .then((res) => {
        setOrderData(res.data.data.data);
        console.log("order Data", res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const menuArr = [
    "Customer Name",
    "Phone No.",
    "Data & Time",
    "Order ID",
    "Grand Total",
    "Order Status",
  ];

  const handleClick = (item) => {
    setOrderData(
      orderData.map((e) => {
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
    <div className="h-[88vh] pt-6 mt-2 bg-darkwhite pl-12 pr-8 overflow-y-scroll">
      <p className="font-semibold text-xl text-orange mb-1 font-sans">
        Manage Order
      </p>
      <p className=" font-semibold text-lg font-sans">
        Take Away &#8250; Manage Order
      </p>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <div className="  flex justify-between">
        <div className="w-1/6">
          <input
            type="date"
            className="outline-none text-orange text-base  pl-6 pr-6 rounded-lg bg-search border-2 border-button_border pt-4 pb-4"
          />
        </div>
        <div className="w-3/4 flex flex-row justify-end items-end">
          <div className=" bg-search w-2/4 focus-within:border-2 border-button_border text-orange flex flex-row rounded-lg mr-8 ">
            <SearchField />
            <div className="pt-2.5 mr-2 bg-search ">
              <img src={search} alt="search_icon" />
            </div>
            
          </div>
          <Link to="/menu/take-away/select-buttons">
            <Button text="Create New Order" className="pl-6 pr-6"></Button>
          </Link>
        </div>
      </div>
      <div className="float-right flex flex-row">
        <p className="text-base font-sans text-orange mt-3">
          <u>Refresh Orders</u>
        </p>
        <img className="mt-2" src={refresh} alt="refresh_icon" />
      </div>
      <div className=" pt-4 pl-6 h-[60vh] pr-6 mt-6 rounded-lg">
        <h1 className="font-sans font-semibold text-xl  mb-4 text-orange">
          All Orders
        </h1>
        <div className="h-[55vh] text-center  overflow-y-scroll  pt-2 ">
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead className="text-lg">
                <TableRow>
                  {menuArr.map((e) => (
                    <TableCell>{e}</TableCell>
                  ))}
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {orderData.map((e) => (
                  <>
                    <TableRow
                      key={parseInt(e.sno)}
                      sx={{ "& > *": { borderBottom: "unset" } }}
                    >
                      <TableCell component="th">{e?.name}</TableCell>
                      <TableCell>{e?.phone}</TableCell>
                      <TableCell>{e?.created_at}</TableCell>
                      <TableCell>#{e?.id}</TableCell>
                      <TableCell>&#x20b9;{e?.total}</TableCell>
                      <TableCell>{e?.payment_status}</TableCell>
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
                          <div className="flex flex-row">
                            <Box sx={{ margin: 4 }} className="w-10/12 mb-4">
                              <Table size="small" aria-label="purchases">
                                <TableHead>
                                  <TableRow>
                                    <TableCell align="center">S. No.</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">
                                      Token No.
                                    </TableCell>
                                    <TableCell align="center">
                                      Quantity
                                    </TableCell>
                                    <TableCell align="center">Total</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {e.meta_order.map((data, i) => (
                                    <TableRow key={data.id + 1}>
                                      <TableCell align="center" component="th">
                                        {num++}
                                      </TableCell>
                                      <TableCell align="center">
                                        {data.menus.name}
                                      </TableCell>
                                      <TableCell align="center">
                                        {data.menus.takeaway_price}
                                      </TableCell>
                                      <TableCell align="center">
                                        {Math.floor(Math.random() * 10)}
                                      </TableCell>
                                      <TableCell align="center">
                                        {data.quantity}
                                        
                                      </TableCell>
                                      <TableCell align="center">
                                        {data.quantity * data.menus.takeaway_price}
                                        {console.log}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                              <hr className=" mt-3 mb-6 border-2 bord" />
                              <div className="flex justify-end items-end flex-row mr-10">
                                <p className="text-sm text-gray-400">
                                  Subtotal
                                </p>
                                <p className="ml-6">{e.sub_toal}</p>
                              </div>
                              <div className="flex justify-end items-end flex-row mr-10">
                                <p className="text-sm text-gray-400">Tax@</p>
                                {console.log("gst",)}
                                <p className="ml-6">{e.tax}</p>
                              </div>
                              <div className="flex justify-end items-end flex-row mr-10">
                                <p className="text-sm font-semibold">Total</p>
                                <p className="ml-6">{e.total}</p>
                              </div>
                            </Box>
                            <div className="flex justify-end items-end mb-8 w-2/12">
                              {" "}
                              <Button
                                className="h-14 w-full "
                                text="Print"
                              ></Button>
                            </div>
                          </div>
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

export default ManageOrderBody;
