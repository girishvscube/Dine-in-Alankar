import { SearchBar } from "./SearchBar";

export const PartyOrderContainer = () => {
  return (
    <div className="w-screen bg-search">
      <div className="h-[88vh] overflow-y-scroll bg-darkwhite">
        {/* Header */}
        <div className="grid grid-flow-row gap-2 pl-11 mt-8">
          <p className=" text-[26px] font-bold text-darkyellow">Active Order</p>
          <p className="text-xl font-normal">Party Order {">"} Active Order</p>
          <p className="border-b-2 headerBorder mr-11 mt-4"></p>
        </div>
        {/* Search Bar  Component*/}
        <SearchBar />
      </div>
    </div>
  );
};
