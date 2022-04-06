import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./style.scss";
import line from "../../Images/ManageMenu/MIDLINE.svg";
import edit from "../../Images/ManageMenu/EDIT ICON.svg";
import trash from "../../Images/ManageMenu/DUSTBIN.svg";

const MySwal = withReactContent(Swal);

const EditAndDelete = () => {
  const sweetalert = () => {
    MySwal.fire({
      title: <strong className="tit">Are you sure?</strong>,
      text: "Are you sure to delete this 'menu'?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "orange",
      confirmButtonText: "Yes",
      cancelButtonColor: "white",
      cancelButtonText: "Cancel",
      cancelButtonText: "orange",
      confirmButtonClass: "confirm_btn",
      cancelButtonClass: "cancel_btn",
    });
  };

  return (
    <div>
      <div className="flex w-11/12  h-10     ">
        <div className="  ">
          <Link to="/menu/editmenu">
            {" "}
            <img src={edit} className="mt-1" alt="edit icon" />
          </Link>
        </div>
        <div className="">
          <img src={line} alt="midline" className="ml-3 mr-3" />
        </div>
        <div className="">
          <img
            src={trash}
            onClick={sweetalert}
            alt="trash icon"
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default EditAndDelete;
