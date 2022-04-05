import edit from "../../Images/KDS/edit.png";
import "./managetables.scss";

export const ManageTables = () => {
  var obj = [
    {
      tableno: 21,
      waiter: "Sam",
      status: "Ready to Occupy",
      members: "0/4",
      orderStatus: "",
      paymentStatus: "",
      orderDuration: "00:00",
    },
    {
      tableno: 21,
      waiter: "Sam",
      status: "Occupied",
      members: "4/4",
      orderStatus: "In Progress",
      paymentStatus: "Bill Not Generated",
      orderDuration: "00:30",
    },
  ];
  return (
    <div>
      {/* Manage Table Container */}
      <div className="grid grid-flow-row gap-1 pl-11 mt-11">
        <p className=" text-[26px] font-bold text-darkyellow">Manage Table</p>
        <p className="text-xl font-normal">Dine-In {">"} Manage Table</p>
        <p className="border-b-2 Border mr-11 mt-4"></p>
      </div>

      {/* Manage Table Data */}
      <div className="flex flex-grow gap-10 pl-11 mt-11">
        {obj.map((e) => (
          <div className="w-1/4">
            <div
              className={`flex justify-around text-white text-xl font-semibold rounded-t-lg ${
                e.status === "Occupied" ? " bg-darkyellow" : " bg-managetable"
              }`}
            >
              <p className="py-6">Table : {e.tableno}</p>
              <p className="py-6">Waiter : {e.waiter}</p>
              <img className=" w-5 object-contain" src={edit} alt="edit" />
            </div>
            <div className="font-semibold text-[#000000] text-base flex flex-col gap-2 mt-3 pl-5">
              <div className="flex">
                <p className="w-[130px] ">Status:</p>
                <p className=" text-lg font-normal relative bottom-[1px]">
                  {e.status}
                </p>
              </div>
              <div className="flex">
                <p className="w-[130px]">Members:</p>
                <p className=" text-lg font-normal relative bottom-[1px]">
                  {e.members}
                </p>
              </div>
              {e.status === "Occupied" ? (
                <div>
                  <div className="flex mb-2">
                    <p className="w-[130px]">Order Status:</p>
                    <p className=" text-lg font-normal relative bottom-[1px]">
                      {e.orderStatus}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="w-[130px]">Payment Status:</p>
                    <p className=" text-lg font-normal relative bottom-[1px]">
                      {e.paymentStatus}
                    </p>
                  </div>
                </div>
              ) : (
                <div className=" invisible mb-2">
                  <p>
                    Order Status:{" "}
                    <sapn className=" text-lg font-normal">
                      {e.orderStatus}
                    </sapn>
                  </p>
                  <p>
                    Payment Status:{" "}
                    <sapn className=" text-lg font-normal">
                      {e.paymentStatus}
                    </sapn>
                  </p>
                </div>
              )}
              <div className=" flex justify-between mt-9">
                <p className=" font-semibold mb-5 text-xl">Order Duration:</p>
                <p></p>
                <p className=" mr-5 digitalFont text-xl">{e.orderDuration}</p>
              </div>
            </div>
            <button
              className={`w-full py-1 border-2 text-white ${
                e.status === "Occupied"
                  ? "unOccupiedGradient"
                  : "occupiedGradient"
              }`}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
