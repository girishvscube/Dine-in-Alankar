import React from "react";
import "./style.scss";
import UserButton from "./UserButton";
import UserForm from "./UserForm";
import UserList from "./UserList";

const UserBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
      <UserList />
      <hr className=" mt-3 mb-6 border-2 bord" />
      <UserButton />
      <UserForm />
    </div>
  );
};

export default UserBody;
