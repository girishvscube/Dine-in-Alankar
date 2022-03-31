import StarIcon from "@mui/icons-material/Star";
import calender from "../../Images/PastOrders/calender.svg";
import search from "../../Images/ActiveOrder/Search_fill.png";

export const FeedbackHeader = () => {
  return (
    <div className="px-11 mt-11">
      <div className="flex flex-col gap-2">
        <p className=" font-bold text-2xl text-darkyellow tracking-wider">
          Feedback{" "}
          <span>
            <StarIcon
              fontSize="small"
              className=" text-yellowstar ml-2 relative bottom-1"
            />
          </span>{" "}
          4.5
        </p>
        <p>(3 Rating Overall)</p>
        <p className="border-t-2 border-darkyellow mt-4"></p>
      </div>
      <div className="grid grid-cols-2 mt-10">
        <div className="bg-white w-2/6 h-14 outline-none border border-darkyellow rounded-[10px] grid grid-cols-2">
          <p></p>
          <img
            className="pr-2 justify-self-end relative top-2"
            src={calender}
            alt="calender"
          />
        </div>
        <div className="grid grid-cols-2 bg-search">
          <input
            className=" justify-self-start outline-none bg-search border-none w-full h-14 placeholder:text-xl placeholder:text-darkyellow placeholder:font-semibold placeholder:pl-4"
            type="text"
            placeholder="Search"
          />
          <div className=" justify-self-end relative top-2 pr-4">
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
};
