export const SuperAdminContainer = () => {
  const obj = {
    picture: require("../../Images/alan.png"),
    name: "Ramya",
    role: "Super Admin",
  };
  return (
    <div className="flex h-20 justify-end pr-9 shadow-lg">
      <div className="">
        <div className=" w-11 h-11 rounded-[22px] mr-4 bg-slate-600 relative top-3">
          {/* src={obj.picture}
           alt="profile" */}
        </div>
      </div>
      <div className=" relative top-1">
        <p className=" text-lg font-semibold mb-1">{obj.name}</p>
        <p className=" text-sm font-normal">{obj.role}</p>
      </div>
    </div>
  );
};
