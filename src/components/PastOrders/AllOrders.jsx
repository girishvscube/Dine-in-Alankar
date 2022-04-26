import axios from "axios";
import { useState, useEffect } from "react";
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

export const AllOrders = ({ billSearch }) => {
  console.log("billSearch:", billSearch);

  //const [showData, setShowData] = useState(false);
  // const [data, setData] = useState(pastAllOrdersData);
  const [open, setOpen] = useState(false);
  const [pastData, setPastData] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const token = localStorage.getItem("alankartoken");

  useEffect(() => {
    getData();
    handleAddStatus();
  }, []);

  useEffect(() => {
    getOrderByBill();
  }, [billSearch]);

  const menuArr = ["S.No", "Customer Name", "Date & Time", "Order ID", "Total"];

  const getData = () => {
    axios
      .get(`${BASE_URL}/admin/orders?page=1`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })

      .then((res) => {
        // console.log(res.data.data.data);
        const addStatus = res.data.data.data.map((item) => {
          return {
            ...item,
            status: false,
          };
        });
        setPastData(addStatus);
      })
      .then((error) => {
        console.log("All Orders PASt Order Error : ", error);
      });
  };

  const handleClick = (item) => {
    setPastData(
      pastData.map((e) => {
        if (e.id === item.id) {
          e.status = !e.status;
          setOpen(!open);
        } else {
          e.status = false;
        }
        // console.log(e);
        return e;
      })
    );
  };

  const handleAddStatus = () => {};

  // {{url}}/orders/past-orders?order_type=3&page=1

  const getOrderByBill = () => {
    axios
      .get(`${BASE_URL}/admin/orders?page=1&search_key=${billSearch}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })

      .then((res) => {
        console.log(res.data.data.data);
        setPastData(res.data.data.data);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-11 mt-10">
      <h1 className=" text-2xl font-bold text-darkyellow my-8 ml-11">
        All Orders
      </h1>
      <div className="h-[60vh] text-center  overflow-y-scroll  divBorder pt-2 ">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow >
                {menuArr.map((e) => (
                  <TableCell>
                  <p className="font-bold text-base font-sans">{e}</p>
                  </TableCell>
                ))}
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {pastData.map((e, index) => (
                <>
                  <TableRow
                    key={parseInt(e.sno)}
                    sx={{ "& > *": { borderBottom: "unset" } }}
                  >
                    <TableCell component="th">{index + 1}</TableCell>
                    <TableCell>{e?.name}</TableCell>
                    <TableCell>{e?.created_at}</TableCell>
                    <TableCell>#{e?.id}</TableCell>
                    <TableCell>&#x20b9;{e?.total}</TableCell>
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
                                <TableCell align="center">Token No.</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center">Total</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {e.meta_order.map((historyRow, index) => (
                                <TableRow key={index + 1}>
                                  <TableCell align="center" component="th">
                                    {index + 1}
                                  </TableCell>
                                  <TableCell align="center">
                                    {historyRow.menus.name}
                                  </TableCell>
                                  <TableCell align="center">
                                    {historyRow.price}
                                  </TableCell>
                                  <TableCell align="center">000000</TableCell>
                                  <TableCell align="center">
                                    {historyRow.quantity}
                                  </TableCell>
                                  <TableCell align="center">
                                    {parseInt(historyRow.price) *
                                      parseInt(historyRow.quantity)}
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
  );
};
