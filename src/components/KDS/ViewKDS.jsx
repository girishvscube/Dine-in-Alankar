export const ViewKDS = () => {
  var obj = [
    {
      sno: "1.",
      food: "Manchurian",
      qty: "x1",
      status: "cooking",
    },
    {
      sno: "2.",
      food: "Veg Noodles",
      qty: "x1",
      status: "cooking",
    },
    {
      sno: "3.",
      food: "Manchurian",
      qty: "x1",
      status: "ReadyToServe",
    },
  ];

  return (
    <div className=" w-5/12 border-2 border-red-400">
      <div className="bg-darkyellow w-full pt-6   rounded-t-[10px]">
        <div className="flex justify-between font-semibold text-lg text-white">
          <p className=" ml-5">Table : 21</p>
          <p>Floor :3rd</p>
          <p className="mr-5">10:40 p.m.</p>
        </div>
        <div className="flex justify-between pb-6 font-semibold text-lg text-white">
          <p className="ml-5">Guests :4</p>
          <p>Hall : B</p>
          <p className="mr-5">Waiter : Ankit</p>
        </div>
      </div>
      <div>
        {obj.map((e) => (
          <div className=" bg-white">
            {e.status == "cooking" ? (
              <div className=" flex justify-between py-2">
                <p className="pl-4">{e.sno}</p>
                <p>{e.food}</p>
                <p>{e.qty}</p>
                <p className="mr-4 bg-bgpink px-8 py-2 border-2 border-borderpink rounded-[10px]">
                  {e.status}
                </p>
              </div>
            ) : (
              ""
            )}

            {e.status == "ReadyToServe" ? (
              <div className="my-2 bg-white">
                <p className=" border-t-4 border-darkyellow py-7"></p>
                <div className=" flex justify-between">
                  <p className="pl-4">{e.sno}</p>
                  <p>{e.food}</p>
                  <p>{e.qty}</p>
                  <p className="mr-4 bg-bgpink px-8 py-2 border-2 border-borderpink rounded-[10px]">
                    Ready To Serve
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-white font-semibold bg-darkyellow py-3 rounded-b-[10px]">
        <p className="ml-5">#11324570</p>
        <p>Dine - In</p>
        <p className="mr-5">10:20</p>
      </div>
    </div>
  );
};
