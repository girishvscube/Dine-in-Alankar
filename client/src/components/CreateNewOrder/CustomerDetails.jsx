import { useEffect, useState } from "react";
import "./createneworder.scss";

export const CustomerDetails = () => {
  const intialValues = {
    cname: "",
    phnno: "",
    noofpeople: "",
    tableno: "",
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).len === 0 && isSubmit)
      console.log("formValues : ", formValues);
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    console.log("formValues :", formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setisSubmit(true);
  };

  const validate = (values) => {
    var errors = {};

    if (!values.cname) {
      errors.cname = "Customer Name is required";
    }

    if (!values.phnno) {
      errors.phnno = "Phone no is required";
    } else if (values.phnno < 10 || values.phnno > 10)
      errors.phnno = "Phone no must be equal to exactly 10 digits";

    if (!values.noofpeople) {
      errors.noofpeople = "No Of People is required";
    } else if (values.noofpeople <= 0) {
      errors.noofpeople = "No of peoples must br greater than 0";
    }
    if (!values.tableno) {
      errors.tableno = "Table NO. is required";
    } else if (values.tableno <= 0) {
      errors.tableno = "Table No. must br greater than 0";
    }

    return errors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="pl-14">
          <label className="block text-lg  font-semibold">Customer Name</label>
          <input
            className="w-3/4 h-18 bg-bgsearch rounded-xl"
            type="text"
            name="cname"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className=" mb-6 text-[12px] pl-1 text-[#FF0000] font-medium">
            {formErrors.cname}
          </p>
        </div>

        <div className="pl-14 ">
          <label className=" block text-lg  font-semibold">Phone No.</label>
          <input
            className="w-3/4 h-18 bg-bgsearch rounded-xl"
            type="text"
            name="phnno"
            value={formValues.phnno}
            onChange={handleChange}
          />
          <p className=" mb-6 text-[12px] pl-1 text-[#FF0000] font-medium">
            {formErrors.phnno}
          </p>
        </div>

        <div className="pl-14">
          <label className=" block text-lg  font-semibold ">
            No. Of People
          </label>
          <input
            className="w-3/4 h-18 bg-bgsearch rounded-xl"
            type="text"
            name="noofpeople"
            value={formValues.noofpeople}
            onChange={handleChange}
          />
          <p className=" mb-6 text-[12px] pl-1 text-[#FF0000] font-medium">
            {formErrors.noofpeople}
          </p>
        </div>

        <div className="pl-14">
          <label className=" block text-lg  font-semibold ">Table No.</label>
          <input
            className="w-3/4 h-18 bg-bgsearch rounded-xl"
            type="text"
            name="tableno"
            value={formValues.tableno}
            onChange={handleChange}
          />
          <p className=" mb-6 text-[12px] pl-1 text-[#FF0000] font-medium">
            {formErrors.tableno}
          </p>
        </div>

        <button
          type="submit"
          className="w-[210px] h-16 justify-self-end gradientBg rounded-xl text-xl font-semibold text-white mt-40 "
        >
          Next
        </button>
      </form>
    </div>
  );
};
