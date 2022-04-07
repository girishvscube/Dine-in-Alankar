import React from "react";
import DetailForm from "./DetailForm";
import DetailList from "./DetailList";
import DetailSearch from "./DetailSearch";
import "./style.scss";

const DetailBody = () => {
  return (
    <div className="h-[88vh] pt-3 pl-10 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <DetailList/>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <DetailSearch/>
      <DetailForm/>
    </div>
  );
};

export default DetailBody;
