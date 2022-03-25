import "./dashboard.scss";

export const FoodItems = ({ data }) => {
  return (
    <div className=" w-42 h-42 grid grid-flow-row gap-2 place-items-center bg-white shadow-lg">
      <div className="w-16 h-16 bgColor rounded-[31px] mt-4 grid place-items-center">
        <img
          className=" w-8 h-8   object-contain"
          src={data.picture}
          alt="img"
        />
      </div>
      <p className=" font-semibold text-4xl">{data.count}</p>
      <p className=" font-semibold text-xs mb-4">{data.type}</p>
    </div>
  );
};
