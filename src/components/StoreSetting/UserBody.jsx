import React from "react";
import "./style.scss";
import { Button } from "../Button";

const UserBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
       <p className="font-semibold text-xl text-orange mb-1 font-sans">
        User Role
      </p>
      <p className=" font-semibold text-lg font-sans">
        Setting &nbsp; &#8250; &nbsp; User Role
      </p>
      <hr className=" mt-3 mb-6 border-2 bord" />
      <div className=" bg-darkwhite pr-5">
        <select className="rounded-lg pt-4 pb-4 pl-3 pr-20 text-orange outline-none border-2 text-base border-button_border">
          <option>Waiter</option>
          <option>Manager</option>
          <option>Chief</option>
        </select>
      </div>
      <div className=" flex mt-12 flex-col">
      <div className=" h-[50vh] flex flex-row gap-16">
        <div className="h-full gap-5 p-5 flex flex-col">
          <div className="flex form-group flex-row">
            <input type="checkbox" id="one" />
            <label className="text-lg  mt-1" for="one">
              Dine - In
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="two" />
            <label className="text-lg mt-1 " for="two">
              Dashbord
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="three" />
            <label className="text-lg mt-1" for="three">
              Manage Offers
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="four" />
            <label className="text-lg mt-1" for="four">
              Manage Tables
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="five" />
            <label className="text-lg mt-1" for="five">
              Active Orders
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="six" />
            <label className="text-lg mt-1" for="six">
              Past Orders
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="seven" />
            <label className="text-lg mt-1" for="seven">
              Manage Staff
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="eight" />
            <label className="text-lg mt-1" for="eight">
              KDS
            </label>
          </div>
        </div>
        <div className="  gap-5 p-5 flex flex-col">
          <div className="flex form-group flex-row">
            <input type="checkbox" id="a" />
            <label className="text-lg mt-1" for="a">
              Manage Menu
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="b" />
            <label className="text-lg mt-1" for="b">
              Manage Category
            </label>
          </div>
        </div>
        <div className="  gap-5 p-5 flex flex-col">
          <div className="flex form-group flex-row">
            <input type="checkbox" id="c" />
            <label className="text-lg mt-1" for="c">
              Take Away
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="d" />
            <label className="text-lg mt-1" for="d">
              Dashbord
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="e" />
            <label className="text-lg mt-1" for="e">
              Manage Offers
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="f" />
            <label className="text-lg mt-1" for="f">
              Active Orders
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="g" />
            <label className="text-lg mt-1" for="g">
              Past Orders
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="h" />
            <label className="text-lg mt-1" for="h">
              KDS
            </label>
          </div>
        </div>
        <div className="  gap-5 p-5 flex flex-col">
          <div className="flex form-group flex-row">
            <input type="checkbox" id="i" />
            <label className="text-lg mt-1" for="i">
              Party Orders
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="j" />
            <label className="text-lg mt-1" for="j">
              Create New Order
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="k" />
            <label className="text-lg mt-1" for="k">
              Active Orders
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="l" />
            <label className="text-lg mt-1" for="l">
              Past Orders
            </label>
          </div>
        </div>
        <div className=" gap-5 p-5 flex flex-col">
          <div className="flex form-group flex-row">
            <input type="checkbox" id="m" />
            <label className="text-lg mt-1" for="m">
              Feedback
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="n" />
            <label className="text-lg mt-1" for="n">
              Reports
            </label>
          </div>
          <div className="flex form-group flex-row">
            <input type="checkbox" id="o" />
            <label className="text-lg mt-1" for="o">
              Setting
            </label>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <Button text="Add New Role" className="pl-6 mt-4 pr-6"></Button>
      </div>
    </div>
    </div>
  );
};

export default UserBody;
