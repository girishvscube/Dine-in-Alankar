import React, { useState, useEffect } from "react";
import Validator from "validatorjs";
import swal from "sweetalert";
import "./style.scss";
import { Button } from "../Button";
import { Text } from "../Text";
import axios from "axios";


const fields = {
  name: "",
  time: "",
  subcategory: "",
  dinein_price: "",
  category_id: "",
  takeaway_price: "",
  availability_count: "",
  meal_type: [],
  image:
    "https://scube-dinein-assets.s3.ap-south-1.amazonaws.com/backery-icons/b-cake.png",
};

const AddMenuForm = () => {
  const [params, setParams] = useState(fields);
  const [errors, setErrors] = useState(fields);
  const [value, setValue] = useState([]);
  const [select, setSelect] = useState();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const token = localStorage.getItem("alankartoken");
  console.log(token);

  const stats = () => {
    const res = axios.get(`${BASE_URL}/admin/categories`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    res.then((res) => {
      setValue(res.data.data.data);
    });
    res.catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    stats();
  }, []);

  const handleCetegory = (e) => {
    params.category_id = e.target.value;
  };

  const handleChangeCheckBox = (e) => {
    const temp = e.target.value;
    const checked = e.target.checked;
    if (checked) params.meal_type.push(temp);
  };

  //Validating and posting the formdata
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newParams = { ...params };
    newParams[name] = value;
    setParams(newParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = new Validator(params, {
      name: "required|max:100",
      time: "required|max:200",
      subcategory: "max:150",
      dinein_price: "required|max:100",
      category: "max:200",
      takeaway_price: "required|max:200",
      availability_count: "required|max:100",
      meal_type: "max:100",
      image: "max:200",
    });
    if (validation.fails()) {
      const fieldErrors = {};
      for (let key in validation.errors.errors) {
        fieldErrors[key] = validation.errors.errors[key][0];
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const obj = {
      name: params.name,
      time: params.time,
      subcategory: params.subcategory,
      dinein_price: params.dinein_price,
      category_id: params.category_id,
      takeaway_price: params.takeaway_price,
      availability_count: params.availability_count,
      meal_type: [params.meal_type],
      image:
        "https://scube-dinein-assets.s3.ap-south-1.amazonaws.com/backery-icons/b-cake.png",
    };

    axios
      .post(`${BASE_URL}/admin/menus`, obj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then(() => {
        swal("Thanks for creating menu!", "success").then(() => {
          setParams(fields);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="h-[70vh]">
      {console.log("category data", value)}
      {console.log("selected data", select)}
      {console.log("data", params)}
      <div className="h-[70vh] w-11/12  rounded-lg bg-white  flex flex-col">
        <div className=" menu_box w-full grid grid-rows-4  grid-flow-col gap-2 pr-1/12">
          <div className="">
            <p className="text-base font-semibold font-sans">Name</p>
            <Text
              name="name"
              value={params.name}
              handleChange={handleChange}
              error={errors.name}
              placeholder=""
              className="h-16"
            />
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Time</p>
            <Text
              name="time"
              value={params.time}
              handleChange={handleChange}
              error={errors.time}
              placeholder=""
              className="h-16"
            />
          </div>
          <div className=" ">
            <p className="text-base font-semibold font-sans">Sub Category</p>
            <Text
              name="subcategory"
              value={params.subcategory}
              handleChange={handleChange}
              error={errors.subcategory}
              placeholder=""
              className="h-16"
            />
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Dine - In Price</p>
            <Text
              name="dinein_price"
              value={params.dinein_price}
              handleChange={handleChange}
              error={errors.dinein_price}
              placeholder=""
              className="h-16"
            />
          </div>
          <div className=" ">
            <p className="text-base font-semibold font-sans">Meal Type</p>
            <div className="w-5/6 h-16  flex justify-between flex-row">
              <div className="w-1/3 h-full pt-2 form-group flex felx-row">
                <input
                  type="checkbox"
                  value="breakfast"
                  name="meal_type"
                  onChange={handleChangeCheckBox}
                  id="one"
                  className="h-4/5  w-2/12"
                />
                <label className="mt-2 text-base font-sans" for="one">
                  Breakfast
                </label>
              </div>
              <div className="w-1/3 h-full pt-2 form-group   flex felx-row">
                <input
                  type="checkbox"
                  id="two"
                  value="lunch"
                  name="meal_type"
                  onChange={handleChangeCheckBox}
                  className="h-4/5 w-2/12"
                />
                <label className="mt-2  text-base font-sans" for="two">
                  Lunch
                </label>
              </div>
              <div className="w-1/3 h-full pt-2 form-group   flex felx-row">
                <input
                  type="checkbox"
                  id="three"
                  value="dinner"
                  name="meal_type"
                  onChange={handleChangeCheckBox}
                  className="h-4/5 w-2/12"
                />
                <label className="mt-2  text-base font-sans" for="three">
                  Dinner
                </label>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">Category</p>
            <div className="w-10/12 h-16 mt-1 ">
              <select
                className="w-full h-full pl-2 bg-input_color outline-none rounded-lg"
                name="category_id"
                error={errors.category_id}
                onChange={handleCetegory}
              >
                {value.map((option) => (
                  <option value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className=" ">
            <p className="text-base font-semibold font-sans">Take Away Price</p>
            <Text
              name="takeaway_price"
              value={params.takeaway_price}
              handleChange={handleChange}
              error={errors.takeaway_price}
              placeholder=""
              className="h-16"
            />
          </div>
          <div className="">
            <p className="text-base font-semibold font-sans">
              Availability Count
            </p>
            <Text
              name="availability_count"
              value={params.availability_count}
              handleChange={handleChange}
              error={errors.availability_count}
              placeholder=""
              className="h-16"
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-2/6">
          <div className=" h-2/3 w-full mt-1 flex flex-col">
            <p className="font-semibold mt-2 text-base font-sans">
              Upload Image
            </p>
            <div className="h-full w-1/12 mt-1 bg-red-400"></div>
          </div>
          <div className=" h-1/3 w-full mt-2 flex justify-center items-center">
            <Button
              text="Created Menu"
              onClick={handleSubmit}
              className="pl-8 pr-8"
            ></Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMenuForm;
