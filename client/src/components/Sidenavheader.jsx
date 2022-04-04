import { obj } from "../data";
import { useState } from "react";
import alankarnav from "../Images/alan.png";
import scube from "../Images/scube.png";
import { Link, Outlet } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export const Sidenavheader = () => {
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
  const sadmin = {
    picture: require("../Images/alan.png"),
    name: "Ramya",
    role: "Super Admin",
  };
  return (
    <>
      {/* SideMenu */}
      <div
        className={`h-screen  bg-white float-left  ${
          showNavbar
            ? " translate-x-1 ease-in duration-300 w-1/4 xl:w-[300px] 2xl:w-1/6 "
            : " -translate-x-full ease-in duration-300 opacity-10 w-0"
        }`}
      >
        <div className=" flex justify-center pt-2 2xl:mb-14">
          <img className=" h-40" src={alankarnav} alt="navbar" />
        </div>
        <div className="">
          {menuItems.map((e, index) => (
            <div key={index} className="flex place-items-start mt-5 2xl:mt-6 ">
              <img
                className=" text-lg font-normal mr-7 ml-14 2xl:ml-10"
                src={e.img}
                alt="menuitems"
              />
              <Link to={`/menu/${e.link}`}>
                <p className=" w-36 relative bottom-[1px]">{e.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-10">
          <img src={scube} alt="powered" />
        </div>
      </div>

      {/* Header */}
      <div className="bg-white flex h-20 justify-end pr-9 shadow-lg">
        <div>
          <div className=" w-11 h-11 rounded-[22px] mr-4 bg-slate-600 relative top-3">
            {/* src={obj.picture}
       alt="profile" */}
          </div>
        </div>
        <div className="relative top-2">
          <p className=" text-lg font-semibold mb-1">{sadmin.name}</p>
          <p className=" text-sm font-normal">{sadmin.role}</p>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
