import { pastAllOrdersData } from "../../pastallorders";

import { useState } from "react";
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
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// function Row(props) {
//   const { row } = props;

//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell component="th" scope="row">
//           {row?.sno}
//         </TableCell>
//         <TableCell>{row?.cname}</TableCell>
//         <TableCell>{row?.dt.date}</TableCell>
//         <TableCell>{row?.orderID}</TableCell>
//         <TableCell>{row?.total}</TableCell>
//         <TableCell>{row?.paymentMode}</TableCell>
//         <TableCell align="right">
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//       </TableRow>
// <TableRow>
//   <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//     <Collapse in={open} timeout="auto" unmountOnExit>
//       <Box sx={{ margin: 1 }}>
//         <Typography variant="h6" gutterBottom component="div">
//           History
//         </Typography>
//         <Table size="small" aria-label="purchases">
//           <TableHead>
//             <TableRow>
//               <TableCell>Date</TableCell>
//               <TableCell>Customer</TableCell>
//               <TableCell align="right">Amount</TableCell>
//               <TableCell align="right">Total price ($)</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {e.history.map((historyRow) => (
//               <TableRow key={historyRow.date}>
//                 <TableCell component="th">
//                   {historyRow.date}
//                 </TableCell>
//                 <TableCell>{historyRow.customerId}</TableCell>
//                 <TableCell align="right">{historyRow.amount}</TableCell>
//                 <TableCell align="right">
//                   {Math.round(historyRow.amount * e?.price * 100) / 100}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Box>
//     </Collapse>
//   </TableCell>
// </TableRow>
//     </React.Fragment>
//   );
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

export const AllOrders = () => {
  //const [showData, setShowData] = useState(false);
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
    <div className="mx-11 mt-10">
      <h1 className=" text-2xl font-bold text-darkyellow my-8 ml-11">
        All Orders
      </h1>
      <div className="h-[60vh] text-center  overflow-y-scroll  divBorder pt-2 ">
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
                          {/* <Typography variant="h6" gutterBottom component="div">
                            History
                          </Typography> */}
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
  );
};
