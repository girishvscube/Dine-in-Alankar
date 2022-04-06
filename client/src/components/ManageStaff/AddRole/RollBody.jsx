import React from "react";
import RollForm from "./RollForm";
import RollList from "./RollList";
import "./style.scss";

const RollBody = () => {
  return (
    <div className="h-[88vh] pt-3 pl-10 pr-8 mt-2 bg-darkwhite overflow-y-scroll">
      <RollList />
      <hr className=" mt-1 mb-3 border-2 bord" />
      <RollForm />
    </div>
  );
};

export default RollBody;
