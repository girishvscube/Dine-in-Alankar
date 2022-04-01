import { FeedbackDonutChart } from "./FeedbackDonutChart";
import StarIcon from "@mui/icons-material/Star";

export const FeedbackCard = () => {
  return (
    <div className=" flex flex-col gap-8 w-3/12  shadow-xl bg-white text-center justify-center py-4 xl:w-2/12">
      <p className=" text-2xl font-semibold">Food Quality</p>
      <div className=" ml-[25%]">
        <FeedbackDonutChart />
      </div>
      <p className=" text-sm font-semibold "> 25 Ratings</p>
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
