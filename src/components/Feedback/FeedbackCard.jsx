import { FeedbackDonutChart } from "./FeedbackDonutChart";
import StarIcon from "@mui/icons-material/Star";
import { useEffect,useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const FeedbackCard = (props) => {
  const [data,setdata] = useState(0)
  useEffect(() => {
    getData();
  }, []);

  const token = localStorage.getItem("alankartoken");
  // const getData = async () =>{
  //   const data = await axios.get(`${process.env.REACT_APP_BASE_URL}/feedback-sum`,{
  //     headers:{
  //       'Content-Type': 'application/json',
  //       'Authorization': `bearer ${localStorage.getItem("alankartoken")}`
  //     }
  //   })
  //  setdata(data.data.data[0].id)
  //  console.log(data.data.data[0].id);

  // }

  const getData = async () =>{
    const data = await axios.get(`${process.env.REACT_APP_BASE_URL}/feedback-sum`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
      }
    })
   setdata(data.data.data[0].rating)
   console.log(data.data.data[0].rating);

  }
  return (
    <div className=" flex flex-col gap-8 w-3/12  shadow-xl bg-white text-center justify-center py-4 xl:w-2/12">
      <p className=" text-xl font-semibold">{props.data}</p>
      <div className=" ml-[25%]">
        <FeedbackDonutChart />
      </div>
      <p className=" text-sm font-semibold "> {data} Ratings</p>
      <div className="flex gap-[2px] justify-center">
        <StarIcon fontSize="medium" className=" text-yellowstar" />
        <StarIcon fontSize="medium" className=" text-yellowstar" />
        <StarIcon fontSize="medium" className=" text-yellowstar" />
        <StarIcon fontSize="medium" className=" text-yellowstar" />
        <StarIcon fontSize="medium" className=" text-gray-400" />
      </div>
    </div>
  );
};
