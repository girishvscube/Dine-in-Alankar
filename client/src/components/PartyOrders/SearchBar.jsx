import fooditem from "../../Images/Dashboard/fooditem.png";
import search from "../../Images/ActiveOrder/Search_fill.png";
import { SelectDate } from "./SelectDate";

export const SearchBar = () => {
  return (
    <div className="px-11 mt-3">
      {/* FoodItem */}
      <div className="bg-white drop-shadow-md w-2/12 flex flex-col gap-3">
        <div className="w-16 h-16 bgColor rounded-[31px] mt-4 grid place-items-center mx-auto">
          <img className=" w-8 h-8   object-contain" src={fooditem} alt="img" />
        </div>
        <p className=" w-5 mx-auto font-semibold text-4xl">5</p>
        <p className=" font-semibold text-xs mb-4 pl-2 w-24 mx-auto ">
          Pending Orders
        </p>
      </div>

      <div>
        {/* Search Bar  */}
        <div className=" bg-search w-3/4 focus-within:border-2 border-button_border text-orange flex justify-between px-3  rounded-lg ">
          <div className=" pl-2  font-semibold">
            <input
              type="text"
              className=" text-lg  bg-search font-semibold placeholder-orange outline-none"
              placeholder="Search"
            />
          </div>
          <div className=" bg-search ">
            <img className="relative top-1" src={search} alt="search_icon" />
          </div>
        </div>
        {/* DatePicker */}
        <SelectDate />
      </div>
    </div>
  );
};
