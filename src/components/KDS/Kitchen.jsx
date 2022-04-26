import { Link } from "react-router-dom";
import "./kds.scss";

export const Kitchen = ({ data }) => {
  return (
    <div>
      <Link to="/menu/dinein/view-kds">
        <div className=" w-44 h-44  cursor-pointer Btn flex flex-col justify-center gap-4">
          <img
            className=" w-24 h-24 rounded-[48px] mx-auto"
            src={data.img}
            alt="kitchen"
          />
          <p className=" font-semibold text-xl text-white mx-auto">
            {data.type}
          </p>
        </div>
      </Link>
    </div>
  );
};
