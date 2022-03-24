import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import alankar from "../../Images/alankar.svg";
import login_img from "../../Images/login1.svg";
import "./login.scss";

export const Login = () => {
  const intialValues = {
    email: "",
    password: "",
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

  //Form Validations
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setisSubmit(true);
  };

  const validate = (values) => {
    var errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password < 4)
      errors.password = "Password must be more than 4 characters";

    return errors;
  };

  return (
    <div className=" bg-background max-w-[1920px] mx-auto">
      {/* Alankar Logo */}
      <div className=" ml-24 pt-9 mb-16 2xl:ml-40 2xl:pt-20 2xl:mb-24">
        <img
          className="w-[220px] h-16 2xl:w-[326px] 2xl:h-18"
          src={alankar}
          alt="alankar"
        />
      </div>

      {/* Side Image */}
      <div className="grid grid-flow-col">
        <div>
          <img
            className="w-[700px] h-[500px] 2xl:w-[843px] 2xl:h-[685px]"
            src={login_img}
            alt="login"
          />
        </div>
        <div className="relative bottom-[72px] 2xl:bottom-24">
          <h2 className=" font-sans text-4xl font-normal tracking-wider max-w-[500px] 2xl:max-w-[615px] ">
            Welcome back, Please login to your{" "}
            <span className="text-darkyellow font-semibold">
              Alankar Dashboard
            </span>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-flow-row bg-white rounded-xl mt-11 max-w-[500px] 2xl:max-w-[619px] 2xl:mt-18"
          >
            <label className="block text-lg text-darkyellow font-semibold pl-14 mt-8 2xl:pl-12 2xl:mt-13">
              Email
            </label>
            <input
              className="w-[420px] h-[55px] border border-darkyellow rounded-xl mt-3 place-self-center 2xl:w-[525px] 2xl:h-17 "
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className=" mb-6 text-[10px] pl-14 text-[#FF0000] font-medium">
              {formErrors.email}
            </p>

            <label className=" block text-lg text-darkyellow font-semibold pl-14 2xl:pl-12">
              Password
            </label>
            <input
              className="w-[420px] h-[55px] border border-darkyellow rounded-xl mt-3 place-self-center 2xl:h-17 2xl:w-[525px]"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className=" mb-6 text-[10px] pl-14 text-[#FF0000] font-medium">
              {formErrors.password}
            </p>

            <Link to="/forgotpassword">
              <p className=" text-darkyellow w-[250px] font-semibold text-lg pl-12 underline cursor-pointer">
                Forgot your password?
              </p>
            </Link>
            <button
              type="submit"
              className="w-[415px] h-[50px] radient rounded-xl mt-8 mb-13  text-xl font-semibold  text-white place-self-center 2xl:w-[516px] 2xl:h-14 2xl:mt-13 2xl:mb-16 "
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
