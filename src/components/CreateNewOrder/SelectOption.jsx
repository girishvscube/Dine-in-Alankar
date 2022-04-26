import { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="h-[91vh] mt-2 bg-background">
      <div className=" flex flex-col gap-3 Bg pl-11 pt-3">
        <h2 className=" font-bold text-darkyellow text-3xl">
          Create New Order
        </h2>
        <p className=" text-xl">Dine-On {">"} Active Orders</p>
        <div className="flex gap-11 mb-11">
          <Link to="/menu/dinein/create-new-order">
            <button
              onClick={customerDetailsButton}
              className={`w-[210px] h-16 font-semibold text-xl text-white orangeBackground`}
            >
              Customer Details
            </button>
          </Link>
          <button
            onClick={addItemsButton}
            className={`w-[210px] h-16 font-semibold text-xl text-white grayBackground`}
          >
            Add Items
          </button>
        </div>
      </div>
      <div>
        <CustomerDetails />
      </div>
    </div>
  );
};
