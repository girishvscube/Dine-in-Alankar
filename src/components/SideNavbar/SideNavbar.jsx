import { obj } from "../../data";
import { useState } from "react";
import alankarnav from "../../Images/alan.png";
import scube from "../../Images/scube.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import "./sidenavbar.scss";

export const SideNavbar = () => {
  const [menuItems, setMenuItems] = useState(obj);
  const [showNavbar, setshowNavbar] = useState(true);

  const handleClickHide = () => {
    setshowNavbar(false);
    localStorage.setItem("status", showNavbar);
  };
  const handleClickShow = () => {
    setshowNavbar(true);
    localStorage.setItem("status", showNavbar);
  };
  // export function isStatus() {
  //   return { status: showNavbar };
  // }

  return (
    <>
      <div className="absolute bg-white pl-1">
        <MenuIcon onClick={handleClickShow} className=" cursor-pointer " />
      </div>
      <div
        className={`h-screen  bg-white ${
          showNavbar
            ? " translate-x-1 ease-in duration-300"
            : " -translate-x-full ease-in duration-300 opacity-10 w-0"
        }`}
      >
        <div className="  text-right pr-2 pt-2">
          <CloseIcon onClick={handleClickHide} className="cursor-pointer " />
        </div>
        <div className=" flex justify-center pt-2">
          <img className=" h-40" src={alankarnav} alt="navbar" />
        </div>
        <div>
          {menuItems.map((e, index) => (
            <div key={index} className="flex place-items-start mt-5">
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
    </>
  );
};
//etr
