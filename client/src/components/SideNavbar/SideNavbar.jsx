import { obj } from "../../data";
import { useState } from "react";
import alankarnav from "../../Images/alan.png";
import scube from "../../Images/scube.png";

export const SideNavbar = () => {
  const [menuItems, setMenuItems] = useState(obj);

  return (
    <div className="w-[280px] h-screen">
      <div className=" flex justify-center pt-4">
        <img className=" h-40" src={alankarnav} alt="navbar" />
      </div>
      <div>
        {menuItems.map((e, index) => (
          <div key={index} className="flex place-items-start mt-5 ">
            <img
              className=" text-lg font-normal mr-7 ml-14"
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
//etr
