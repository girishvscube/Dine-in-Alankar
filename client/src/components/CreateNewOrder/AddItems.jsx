import "./createneworder.scss";

export const AddItems = () => {
  return (
    <div className="addItemsContainer">
      <div className="pl-11 pr-16">
        <div>
          <input
            className="w-full  border-2 h-16 bg-bgsearch rounded-xl placeholder:text-darkyellow placeholder:font-semibold placeholder:pl-7"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="w-2/5 flex flex-col gap-2 float-right mt-6">
          <p className=" font-semibold text-lg">Category</p>
          <p className="w-full py-3 text-xl font-semibold text-darkyellow bg-white rounded-[10px] border-2 border-darkyellow pl-4">
            Category Name
          </p>
        </div>
        <div className=" clear-both"></div>

        <div className="relative bottom-8    ">
          <h2 className=" text-[26px] font-bold text-darkyellow mb-7">
            All Orders
          </h2>
          <div className="bg-white w-full h-96"></div>
        </div>
      </div>

      <div>
        <p className=" text-2xl font-semibold text-darkyellow">
          Items Selected
        </p>
        <div></div>
        <p>Spedcial Instructions</p>
        <p className="w-full h-28 bg-bgsearch">d</p>
        <button className="w-1/12 h-16 font-semibold text-xl text-white gradientBg absolute bottom-14 right-[20%]">
          Create
        </button>
      </div>
    </div>
  );
};
