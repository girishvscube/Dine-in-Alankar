import StarIcon from "@mui/icons-material/Star";
import calender from "../../Images/PastOrders/calender.svg";
import search from "../../Images/ActiveOrder/Search_fill.png";
import { DatePickerMUI } from "../DatePickerMUI/DatePickerMUI";
import axios from "axios";
import { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export const FeedbackHeader = () => {
  const { feedback, feedbackcontroller, handleDate, datee,handleFeedback } =
    useContext(AuthContext);
    const token = localStorage.getItem("alankartoken");
  const [searchData, setsearchData] = useState("");

  const fetchDataa = async (e) => {
    
    const data = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/feedback-date?date=${datee}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    handleFeedback(data.data.data);
  };

  const [data, setdata] = useState(0);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchData]);

  useEffect(() => {
    fetchDataa();
  }, [datee]);



  const getData = async () => {
    const data = await axios.get(`${process.env.REACT_APP_BASE_URL}/feedback-avg`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    setdata(data.data.data[0].rating.toFixed(1));
    console.log(data.data.data[0].rating);
  };

  const fetchData = async (e) => {
    
    console.log(searchData);

    const data = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/feedback-search?id=${searchData}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    handleFeedback(data.data.data);
    console.log(data.data.data);
  };
  return (
    <>
      {" "}
      <div className="flex flex-col gap-2 px-9 mt-4">
        <p className=" font-bold text-2xl text-darkyellow tracking-wider">
          Feedback{" "}
          <span>
            <StarIcon
              fontSize="small"
              className=" text-yellowstar ml-2 relative bottom-1"
            />
          </span>{" "}
          {data}
        </p>
        <p>({data} Rating Overall)</p>
        <p className="border-t-2 border-darkyellow mt-4"></p>
      </div>
      {console.log(searchData, "search")}
      <div className="grid grid-cols-2 mt-10 px-9">
        <div>
          {/* <DatePickerMUI value = {datee} onChange={(e)=>{setdate(e.target.value)}}/> */}

          <input type="date" onChange={(e)=>{handleDate(e.target.value)}} value={datee} />
        </div>
        <div className="grid grid-cols-2 bg-search">
          <input
            className=" justify-self-start outline-none bg-search border-none w-full h-14 placeholder:text-xl placeholder:text-darkyellow placeholder:font-semibold placeholder:pl-4"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setsearchData(e.target.value);
            }}
          />
          <div className=" justify-self-end relative top-2 pr-4">
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </>
  );
};
