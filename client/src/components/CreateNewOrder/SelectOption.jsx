import { useState } from "react";
import { AddItems } from "./AddItems";
import "./createneworder.scss";
import { CustomerDetails } from "./CustomerDetails";

export const SelectOption = () => {
  const [isButton, setIsButton] = useState(true);

  const customerDetailsButton = () => {
    setIsButton(true);
  };

  const addItemsButton = () => {
    setIsButton(false);
  };
  return (
    <div className="w-screen h-screen bg-background">
      <div className=" flex flex-col gap-3 Bg pl-11 pt-10">
        <h2 className=" font-bold text-darkyellow text-3xl">
          Create New Order
        </h2>
        <p className=" text-xl">Dine-On {">"} Active Orders</p>
        <div className="flex gap-11 mb-11">
          <button
            onClick={customerDetailsButton}
            className={`w-[210px] h-16 font-semibold text-xl text-white ${
              isButton ? "orangeBackground" : "grayBackground"
            }`}
          >
            Customer Details
          </button>
          <button
            onClick={addItemsButton}
            className={`w-[210px] h-16 font-semibold text-xl text-white ${
              !isButton ? "orangeBackground" : "grayBackground"
            }`}
          >
            Add Items
          </button>
        </div>
      </div>
      <div>{isButton ? <CustomerDetails /> : <AddItems />}</div>
    </div>
  );
};
