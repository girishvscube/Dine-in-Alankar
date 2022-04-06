import { Kitchen } from "./Kitchen";

export const SuperAdminContainer = () => {
  return (
    <div className=" bg-background border-2 border-red-400">
      {/* View KDS Container */}
      <div className=" mt-11">
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
