import React from "react";

const UserForm = () => {
  return (
    <div className="for ml-14 mt-4 mr-12 flex  p-5 flex-col">
      <div className="h-4/5 w-full flex flex-row gap-14">
        <div className="h-full gap-2.5 p-5 flex flex-col">
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Dine - In</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Dashbord</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Manage Offers</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Manage Tables</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Active Orders</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Past Orders</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Manage Staff</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">KDS</p>
          </div>
        </div>
        <div className="h-full gap-2.5 p-5 flex flex-col">
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Manage Menu</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Manage Category</p>
          </div>
          
        </div>
        <div className="h-full  gap-2.5 p-5 flex flex-col">
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Take Away</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Dashbord</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Manage Offers</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Active Orders</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Past Orders</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">KDS</p>
          </div>
         
        </div>
        <div className="h-full  gap-2 p-5 flex flex-col">
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Party Orders</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Create New Order</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Active Orders</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Past Orders</p>
          </div>
         
        </div>
        <div className="h-full gap-2 p-5 flex flex-col">
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Feedback</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Reports</p>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" className="h-6 w-6" />
            <p className="text-xs mt-1 ml-2">Setting</p>
          </div>
          </div>
      </div>
      <div className="h-1/5 w-full flex justify-center items-center">
          <button className=" pl-6 pt-3 pb-3  pr-6 add rounded-lg border-2 text-xs border-orange text-white font-semibold bg-red-600">Add User Role</button>
      </div>
    </div>
  );
};

export default UserForm;
