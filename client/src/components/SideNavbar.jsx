import { obj } from "../data";
import { useState } from "react";
import alankarnav from "../Images/alan.png";
import scube from "../Images/scube.png";

export const SideNavbar = () => {
  const [menuItems, setMenuItems] = useState(obj);

  return (
    <div className="w-[306px]">
      <div className=" flex justify-center">
        <img className="" src={alankarnav} alt="navbar" />
      </div>
      <div>
        {menuItems.map((e, index) => (
          <div key={index} className="flex place-items-start mt-10">
            <img
              className=" text-lg font-normal mr-7 ml-10"
              src={e.img}
              alt="menuitems"
            />
            <p className=" w-36 relative bottom-[1px]">{e.name}</p>
          </div>
        ))}
      </div>
      <div className=" mt-52 flex justify-center">
        <img src={scube} alt="powered" />
      </div>
    </div>
  );
};
