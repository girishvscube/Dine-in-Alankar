import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import Validator from "validatorjs";
import "./createneworder.scss";
import { Link, useNavigate } from "react-router-dom";

export const CustomerDetails = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const intialValues = {
    cname: "",
    phnno: "",
    noofpeople: "",
    tableno: "",
    instructions: "",
    table_id: "",
    ordertype: "",
    items: [],
  };
  const [tableNo, setTableNo] = useState([]);
  const [params, setParams] = useState(intialValues);
  const [formErrors, setFormErrors] = useState(intialValues);
  const [select, setSelect] = useState();
  // const [isdisabled, setisDisabled] = useState(true);

  let token = localStorage.getItem("alankartoken");

  useEffect(() => {
    getTableNO();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newParams = { ...params };
    newParams[name] = value;
    setParams(newParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = new Validator(params, {
      cname: "required|max:100",
      phnno: "required|max:11",
      noofpeople: "required",
      tableNo: "required",
    });
    if (validation.fails()) {
      const fieldErrors = {};
      for (let key in validation.errors.errors) {
        fieldErrors[key] = validation.errors.errors[key][0];
      }
      setFormErrors(fieldErrors);
      return false;
    }
    setFormErrors({});
    return true;
  };

  const handleSelect = (e) => {
    setSelect(parseInt(e.target.value));
    params.tableno = e.target.value;
  };

  const getTableNO = () => {
    axios
      .get(`${BASE_URL}/admin/list-data`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((res) => {
        setTableNo(res.data.data);
      })
      .then((error) => {
        console.log("error in Table NO", error);
      });
  };
  const cusdetails = {
    name: params.cname,
    phone: params.phnno,
    email: "admin@scube.me",
    order_type: 1,
    total_persons: params.noofpeople,
    instructions: "",
    table_id: params.tableno,
    items: [],
  };
  const handleClick = () => {
    localStorage.setItem("customerDetails", JSON.stringify(cusdetails));
    // params.cname.length > 0 && params.phnno.length > 0
    //   ? navigate("/menu/dinein/create-new-order")
    //   : alert("Please fill all the fields");
  };

  const isEnabled =
    params.cname.length > 0 &&
    params.phnno.length > 0 &&
    params.noofpeople.length > 0 &&
    params.tableno.length > 0;

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="pl-14">
          <label className="block text-lg  font-semibold mb-2">
            Customer Name
          </label>
          <input
            className="w-3/4 h-18 bg-search rounded-xl outline-darkyellow"
            type="text"
            name="cname"
            value={params.email}
            onChange={handleChange}
            error={formErrors.cname}
          />
          <p className=" mb-6 text-[12px] pl-1 text-[#FF0000] font-medium">
            {formErrors.cname}
          </p>
        </div>

        <div className="pl-14 ">
          <label className=" block text-lg  font-semibold mb-2">
            Phone No.
          </label>
          <input
            className="w-3/4 h-18 bg-search rounded-xl outline-darkyellow"
            type="text"
            name="phnno"
            value={params.phnno}
            onChange={handleChange}
          />
          <p className=" mb-6 text-[12px] pl-1 text-[#FF0000] font-medium">
            {formErrors.phnno}
          </p>
        </div>

        <div className="pl-14">
          <label className=" block text-lg  font-semibold mb-2">
            No. Of People
          </label>
          <input
            className="w-3/4 h-18 bg-search rounded-xl outline-darkyellow"
            type="text"
            name="noofpeople"
            value={params.noofpeople}
            onChange={handleChange}
          />
          <p className=" mb-6 text-[12px] pl-1 text-[#FF0000] font-medium">
            {formErrors.noofpeople}
          </p>
        </div>

        <div className="pl-14">
          <label className=" block text-lg  font-semibold mb-2">
            Table No.
          </label>
          <select
            className="w-3/4 h-18 bg-search rounded-xl outline-darkyellow"
            value={select}
            onChange={handleSelect}
          >
            {tableNo.map((e, index) => (
              <option key={index + 1} value={e.id}>
                {e.id}
              </option>
            ))}
          </select>

          {/* <p className=" mb-6 text-[12px] pl-1 text-[#FF0000] font-medium">
            {formErrors.tableno}
          </p> */}
        </div>

        <Link to="/menu/dinein/add-items" className="justify-self-end">
          <Button
            text="Next"
            disabled={!isEnabled}
            className="w-44"
            onClick={handleClick}
          ></Button>
        </Link>
      </form>
    </div>
  );
};
