import { Kitchen } from "./Kitchen";
import { useEffect, useState } from "react";
import axios from "axios";

export const SuperAdminContainer = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const token = localStorage.getItem("alankartoken");

  const [kdsData, setkdsData] = useState([]);

  useEffect(() => {
    getKitchens();
  }, []);

  const getKitchens = () => {
    axios
      .get(`${BASE_URL}/kds`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })

      .then((res) => {
        console.log(res);
        setkdsData(res);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" pt-11">
      <div className="flex flex-col gap-4 px-11 mt-2">
        <p className=" font-bold text-2xl text-darkyellow">View KDS</p>
        <p className=" text-lg font-normal">
          Dine-In {">"} KDS {">"} ViewKDS
        </p>
        <p className=" border-b-2 border-darkyellow mt-4"></p>
      </div>
      <div className="flex gap-10 pl-11 mt-10 flex-wrap">
        <Kitchen
          data={{
            img: require("../../Images/KDS/north.png"),
            type: "North Indian",
          }}
        />
        <Kitchen
          data={{
            img: require("../../Images/KDS/south.png"),
            type: "South Indian",
          }}
        />
        <Kitchen
          data={{
            img: require("../../Images/KDS/chinese.png"),
            type: "Chinese",
          }}
        />
      </div>
    </div>
  );
};
