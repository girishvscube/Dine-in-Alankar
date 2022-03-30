export const CreateKDSContainer = () => {
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
      <div className="flex flex-col gap-4 pl-20 pr-11 mt-6">
        <p className=" font-bold text-2xl text-darkyellow">View KDS</p>
        <p className=" text-lg font-normal">
          Dine-In {">"} KDS {">"} CreateKDS
        </p>
        <p className=" border-b-2 border-darkyellow mt-4"></p>
      </div>
    </div>
  );
};
