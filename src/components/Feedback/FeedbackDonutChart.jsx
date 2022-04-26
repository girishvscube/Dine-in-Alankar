import { useState,useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import React from "react";
import axios from 'axios'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export const FeedbackDonutChart = () => {
  // const [donutvalue, setDonutValue] = useState(4.5);
  const token = localStorage.getItem("alankartoken");
  const [donutvalue,setDonutValue] = useState(0)
  useEffect(() => {
    getData();
  }, []);
  const getData = async () =>{
    const data = await axios.get(`${process.env.REACT_APP_BASE_URL}/feedback-avg`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
      }
    })
   setDonutValue(data.data.data[0].rating.toFixed(1))
   console.log(data.data.data[0].rating);

  }
  
  return (
    <div className="">
      <PieChart
        data={[
          { value: donutvalue, color: "url(#gradient1)" },
          { value:  donutvalue, color: "#F0912C59" },
        ]}
        totalValue={5}
        viewBoxSize={[200, 100]}
        startAngle={200}
        center={[75, 50]}
        lineWidth={22}
        paddingAngle={4}
        rounded={false}
        label={({ dataEntry }) => {
          if (dataEntry.value > 3) return dataEntry.value;
        }}
        labelStyle={{
          fontSize: "25px",
          fontFamily: "sans-serif",
          fill: "#E38627",
        }}
        labelPosition={0}
        lengthAngle={-360}
        animate
        //color={conic-gradient(#BFA670,#99D592,#07A1C0,#FC5A39)}
      >
        {" "}
        <defs>
          <linearGradient id="gradient1">
            <stop offset="0%" stopColor="#FFBE15" />
            <stop offset="45%" stopColor="#FFBE15" />
            <stop offset="55%" stopColor="#F38B1CCC" />
            <stop offset="100%" stopColor="#F38B1CCC" />
          </linearGradient>
        </defs>
      </PieChart>
    </div>
  );
};
