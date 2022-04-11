import "./pastorders.scss";
import search from "../../Images/ActiveOrder/Search_fill.png";
import { AllOrders } from "./AllOrders";
import { DatePickerMUI } from "../DatePickerMUI/DatePickerMUI";

export const SuperAdminContainer = () => {
  return (
    <div className="w-screen">
      <div className=" overflow-y-scroll h-[88vh]">
        {/* Past Orders Container */}
        <div className="flex flex-col gap-4 px-11 mt-6">
          <p className=" font-bold text-2xl">Past Orders - 90</p>
          <p>
            Dine-in {">"} <span className=" text-darkyellow ">Past Orders</span>
          </p>
          <p className=" border-b-2 border-line mt-4"></p>
        </div>

        {/*Sorting & Search Bill No Container */}
        <div className="flex gap-8 px-11 mt-10">
          <p className=" font-semibold text-xl relative top-4">Sort By</p>
          <p className=" text-darkyellow text-xl h-16 border-2 border-darkyellow w-2/12 rounded-lg">
            Time
          </p>
          <div className="">
            <DatePickerMUI />
          </div>
          <div className="w-2/6 ml-auto pr-11  ">
            <div className="  displayGrid bg-search border-2 border-darkyellow rounded-lg">
              <input
                className=" border-0 w-full  h-16  bg-search placeholder:text-darkyellow placeholder:font-semibold placeholder:pl-4"
                type="text"
                placeholder="Search for Bill No."
              />
              <img
                className=" justify-self-end mr-5 relative top-2"
                src={search}
                alt="search"
              />
            </div>
          </div>
        </div>
        {/* All Orders Container */}
        <AllOrders />
      </div>
    </div>
  );
};
