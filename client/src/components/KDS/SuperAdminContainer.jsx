import { Kitchen } from "./Kitchen";

export const SuperAdminContainer = () => {
  const obj = {
    picture: require("../../Images/alan.png"),
    name: "Ramya",
    role: "Super Admin",
  };
  return (
    <div className="w-screen bg-background">
      <div className="flex  h-20  justify-end pr-9 shadow-lg bg-white ">
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

      {/* View KDS Container */}
      <div className=" mt-11 ml-11">
        <p className=" text-2xl font-bold text-darkyellow">View KDS</p>
        <p className=" text-lg font-normal">
          Dine-In {">"} KDS {">"} View KDS
        </p>
      </div>
      <div className="flex gap-10 ml-11 mt-16 flex-wrap">
        <Kitchen
          data={{
            img: require("../../Images/KDS/north.png"),
            type: "North Indian",
          }}
        />
        <Kitchen
          data={{
            img: require("../../Images/KDS/south.png"),
            type: "South Indian",
          }}
        />
        <Kitchen
          data={{
            img: require("../../Images/KDS/chinese.png"),
            type: "Chinese",
          }}
        />
      </div>
    </div>
  );
};
