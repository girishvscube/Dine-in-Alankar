import { obj } from "../data";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import alankarnav from "../Images/alan.png";
import scube from "../Images/scube.png";
import arrowdown from "../Images/Sidenavbar/arrowdown.svg";

export const Sidenavheader = () => {
  const [menuItems, setMenuItems] = useState(obj);
  const [showNavbar, setshowNavbar] = useState(true);

  const sadmin = {
    picture: require("../Images/alan.png"),
    name: "Ramya",
    role: "Super Admin",
  };

  const handleClickBackground = (item) => {
    setMenuItems(
      menuItems.map((element) => {
        if (element.id === item.id) {
          element.status = true;
        } else {
          element.status = false;
        }

        return element;
      })
    );
  };

  const handleClickSubmenu = (item) => {
    setMenuItems(
      menuItems.map((element) => {
        if (element.id === item.id) {
          element.submenu.status = true;
        } else {
          element.submenu.status = false;
        }

        return element;
      })
    );
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
        <div className="  h-[69vh] overflow-y-scroll">
          {menuItems.map((e, index) => (
            <div
              key={index + 1}
              onClick={() => {
                handleClickBackground(e, index + 1);
                console.log(e.submenu.menulist.length);
              }}
              className={`flex place-items-start mt-5 2xl:mt-6 ml-4 w-3/4 gap-4 py-3 ${
                e.status ? "text-white bg-darkyellow rounded-[8px]" : ""
              }`}
            >
              <img
                className=" text-lg font-normal pl-8"
                src={e.status ? e.wimg : e.img}
                alt="menuitems"
              />

              <div className=" w-36  flex justify-between  ">
                <Link to={`/menu/${e.link}`}>
                  <p className="">{e.name}</p>
                </Link>
                {e.submenu.menulist.length > 0 ? (
                  <div>
                    <img
                      onClick={() => {
                        handleClickSubmenu(e);
                      }}
                      className="mr-4 relative top-2 cursor-pointer"
                      src={arrowdown}
                      alt="arrowup"
                    />
                    <div>{e.submenu.status}</div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
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
