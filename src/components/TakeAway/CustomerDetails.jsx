import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import Validator from "validatorjs";
import "./createneworder.scss";
import { Link } from "react-router-dom";


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

const CustomerDetails = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
 
  const [tableNo, setTableNo] = useState([]);
  const [params, setParams] = useState(intialValues);
  const [formErrors, setFormErrors] = useState(intialValues);

  const [select, setSelect] = useState(false);

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
      return;
    }
    setFormErrors({});
  };
 

  const handleSelect = (e) => {
    setSelect(parseInt(e.target.value));
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
    order_type: 2,
    instructions: "",
    items: [],
  };
  const handleClick = () => {
    localStorage.setItem("customerDetails", JSON.stringify(cusdetails));
    console.log("customerDetails", cusdetails);
  };

  const isEnabled =
    params.cname.length > 0 &&
    params.phnno.length > 0;
    

  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
       <p className="font-semibold text-orange text-xl font-sans">
        Manage Order
      </p>
      <p className=" font-semibold text-lg font-sans">
        Take Away &nbsp; &#8250; &nbsp; Manage Order &nbsp; &#8250; &nbsp; Create New Order
      </p>
      <hr className=" mt-3 mb-6 border-2 bord" />
     <div className="flex gap-8 mb-4">
     <Button text="Customer Details"  className="w-44" />
      <button className="button text-white font-sans font-semibold  h-14 w-44">Add Items</button>
      <button className="button text-white font-sans font-semibold  h-14 w-44">Manage Payment</button>
     </div>
      <form onSubmit={handleSubmit} className="formContainer">
        <div>
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
        <div className="ml-96 mt-8">
          <Link to="/menu/take-away/add-items">
            <Button
              text="Next"
              className="w-44 justify-self-end ml-20"
              disabled={!isEnabled}
              onClick={handleClick}
        ></Button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default CustomerDetails;
