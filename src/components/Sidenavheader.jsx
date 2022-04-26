import { obj } from "../data";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.scss";

import alankarnav from "../Images/alan.png";
import scube from "../Images/scube.png";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
export const Sidenavheader = () => {
  const [menuItems, setMenuItems] = useState(obj);
  const [showNavbar, setshowNavbar] = useState(true);


  const getadminData = localStorage.getItem("adminDetails");
  const adminData = JSON.parse(getadminData);

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
          element.submenu.status = !element.submenu.status;
          if (!element.submenu.status) {
            element?.submenu?.menulist.map((el) => {
              el.status = false;
            });
          }
        } else {
          element.submenu.status = false;
        }

        return element;
      })
    );
  };

  const handleClickSubmenuItem = (item) => {
    setMenuItems(
      menuItems.map((element) => {
        element?.submenu?.menulist?.map((el) => {
          if (el.menuItem === item.menuItem) {
            el.status = true;
          } else {
            el.status = false;
          }

          return el;
        });

        return element;
      })
    );
    //console.log(item);
  };

  return (
    <>
      {/* SideMenu */}
      <div
        className={`h-screen  bg-white float-left  ${
          showNavbar
            ? " translate-x-1 ease-in duration-300 w-1/4 xl:w-[260px] 2xl:w-1/6 "
            : " -translate-x-full ease-in duration-300 opacity-10 w-0"
        }`}
      >
        <div className=" flex justify-center pt-2 mb-6 2xl:mb-14">
          <img className=" h-40" src={alankarnav} alt="navbar" />
        </div>
        <div className="  h-[61vh] overflow-y-scroll">
          {menuItems.map((e, index) => (
            <div key={index + 1}>
              <div
                onClick={() => {
                  handleClickBackground(e, index + 1);
                  // console.log(e.submenu.menulist.length);
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
                    <p className=" text-sm 2xl:text-base">{e.name}</p>
                  </Link>
                  {e.submenu.menulist.length > 0 ? (
                    <div>
                      <ArrowDropDownRoundedIcon
                        onClick={() => {
                          handleClickSubmenu(e);
                        }}
                        className={`mr-4  cursor-pointer ${
                          e.submenu.status ? "rotateAnimation" : ""
                        }`}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {e.submenu.status ? (
                <div>
                  {e.submenu.menulist.map((item, index) => (
                    <div
                      className={`flex justify-center gap-3 w-3/4 my-3  ml-4 py-3 rounded-[8px] ${
                        item.status ? " bg-submenu" : ""
                      }`}
                      key={index + 1}
                    >
                      <img
                        className="ml-2 object-contain"
                        src={item.menuimg}
                        alt="sub menu"
                      />
                      <Link
                        to={`/menu/${item?.mainmenu}/${item.menuItem
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        <p
                          onClick={() => handleClickSubmenuItem(item)}
                          className={`w-24 `}
                        >
                          {item.menuItem}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-10">
          <img className="w-44" src={scube} alt="powered" />
        </div>
      </div>

      {/* Header */}
      <div className="bg-white flex h-15 justify-end pr-9 headerShadow">
        <div>
          <div className=" w-9 h-9 rounded-[50%] mr-4 bg-slate-600 relative top-2">
            {/* src={obj.picture}
       alt="profile" */}
          </div>
        </div>
        <div className="relative">
          <p className=" text-base font-semibold my-1">{adminData.name}</p>
          <p className=" text-xs font-normal mb-1">{adminData.role}</p>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
