import { useState, useEffect } from "react";

export const CreateKDSContainer = () => {
  const obj = {
    picture: require("../../Images/alan.png"),
    name: "Ramya",
    role: "Super Admin",
  };
  const intialValues = {
    kname: "",
    category: "",
    hall: "",
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

    if (!values.kname) {
      errors.kname = "Kitchen Name is required";
    }
    return errors;
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
      <div className="flex flex-col gap-4 px-11 mt-6">
        <p className=" font-bold text-2xl text-darkyellow">View KDS</p>
        <p className=" text-lg font-normal">
          Dine-In {">"} KDS {">"} CreateKDS
        </p>
        <p className=" border-b-2 border-darkyellow mt-4"></p>
      </div>
      <form onSubmit={handleSubmit} className="formContainer mt-9">
        <div className=" pl-11">
          <label className="block text-lg  font-semibold mb-2 ">
            Kitchen Name
          </label>
          <input
            className="w-3/4 h-18 bg-search rounded-[10px] outline-none"
            type="text"
            name="kname"
            value={formValues.kname}
            onChange={handleChange}
          />
          <p className=" mb-6 text-[12px] pl-1 text-[#FF0000] font-medium">
            {formErrors.kname}
          </p>
        </div>

        <div className="pl-11">
          <label className=" block text-lg  font-semibold mb-2">Category</label>
          <input
            className="w-3/4 h-18 bg-search rounded-[10px] outline-none"
            type="text"
            name="category"
            value={formValues.category}
            onChange={handleChange}
          />
        </div>

        <div className="pl-11">
          <label className=" block text-lg  font-semibold mb-2">
            Hall(Optional)
          </label>
          <input
            className="w-3/4 h-18 bg-search rounded-[10px] outline-none"
            type="text"
            name="hall"
            value={formValues.hall}
            onChange={handleChange}
          />
        </div>
        <div></div>

        <button
          type="submit"
          className="w-4/12 h-16 justify-self-end gradientBg rounded-xl text-xl font-semibold text-white mt-40 "
        >
          Next
        </button>
      </form>
    </div>
  );
};
