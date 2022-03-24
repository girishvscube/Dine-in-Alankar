import { obj } from "../data";
import { useState } from "react";
import alankarnav from "../Images/alan.png";
import scube from "../Images/scube.png";

export const SideNavbar = () => {
  const [menuItems, setMenuItems] = useState(obj);

  return (
    <div className="w-[306px] h-screen ">
      <div className=" flex justify-center">
        <img className=" h-44 2xl:h-64" src={alankarnav} alt="navbar" />
      </div>
      <div>
        {menuItems.map((e, index) => (
          <div key={index} className="flex place-items-start mt-8 ">
            <img
              className=" text-lg font-normal mr-7 ml-14 2xl:ml-10"
              src={e.img}
              alt="menuitems"
            />
            <p className=" w-36 relative bottom-[1px]">{e.name}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-10">
        <img src={scube} alt="powered" />
      </div>
    </div>
  );
};
