import React, { useState, useContext, useEffect } from "react";
import Validator from "validatorjs";
import swal from "sweetalert";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { orange } from "@mui/material/colors";
import food from "../../../Images/ManageCategory/fast-food.png"
import Radio from "@mui/material/Radio";
import { Button } from "../../Button";
import { Text } from "../../Text";
import "./style.scss";

const fields = {
  category: "",
  gst: "",
  image: "",
  sub_category: [
    {
      name: "",
      image: "",
    },{
      name: "",
      image: "",
    }
  ],
};

const AddNewCategoryForm = () => {
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [params, setParams] = useState(fields);
  const [errors, setErrors] = useState(fields);
  const [image, setImage] = useState("");


  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const token = localStorage.getItem("alankartoken");
  console.log(token);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };


  const handleValue = (e) => {
    const { name, value } = e.target;
    const newParams = { ...params };
    newParams[name] = value;
    setParams(newParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = new Validator(params, {
      category: "max:100",
      gst: "max:100",
      image: "max:300",
      sub_category: [
        {
          name: "max:200",
          image: "max:300",
        },{
          name: "max:200",
          image: "max:300",
        },
      ],
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
      category: params.category,
      gst: params.gst,
      image:params.image,
      sub_category: [
        {
          name:params.name,
          image:params.image,
        },
        {
          name:params.name,
          image:params.image,
        }
      ],
    };
    axios
      .post(`${BASE_URL}/admin/categories`, obj)
      .then((response) => {
        swal("Thanks for creating category!", "success").then((value) => {
          setParams(fields);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <form onSubmit={handleSubmit} className=" h-[70vh]">
      {console.log("data", params)}
      <div className=" mb-14 w-9/12 gap-12 justify-between flex flex-row">
        <div className="flex w-5/6 gap-1 flex-col">
          <p className="font-semibold font-sans text-base">Category Name</p>
          <Text
            name="category"
            value={params.category}
            handleChange={handleValue}
            error={errors.category}
            placeholder=""
            className="w-full h-16 "
          />
        </div>
        <div className="flex w-5/6 gap-1 flex-col">
          <p className="font-semibold font-sans text-base">GST NO</p>
          <Text
            name="gst"
            value={params.gst}
            handleChange={handleValue}
            error={errors.gst}
            placeholder=""
            className="w-full h-16 "
          />
        </div>
      </div>
      <div className="w-full h-1/4 grid grid-cols-9 pr-28">
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("a")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("b")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("c")}
            sx={{
              color:orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("d")}
            sx={{
              color:orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("e")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("f")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("g")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("h")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("i")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("j")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("k")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("l")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("m")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("n")}
            sx={{
              color: orange[100],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("o")}
            sx={{
              color: orange[100],

              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src={food} alt="food image"/>
        </div>
      </div>
      <div className="mb-10 mt-10 w-1/3">
        <form className="App" autoComplete="off">
          <div className="form-field">
            {serviceList.map((singleService, index) => (
              <div key={index} className=" ">
                <p className="text-sm font-sans font-semibold mb-1">
                  Enter Sub - Category Name
                </p>
                <div className="flex flex-row">
                  <div className="first-division">
                    <Text
                      name=""
                      value={params.sub_category.name}
                      id="service"
                      handleChange={handleValue}
                      error={errors.sub_category.name}
                      //value={singleService.service}
                      placeholder=""
                      onChange={(e) => handleServiceChange(e, index)}
                      required
                      className="w-full h-12 "
                    />
                    {serviceList.length - 1 === index &&
                      serviceList.length < 3 && (
                        <button
                          type="button"
                          onClick={handleServiceAdd}
                          className="bg-search rounded-lg"
                        >
                          <span className="text-orange font-bold text-3xl">
                            +
                          </span>
                        </button>
                      )}
                  </div>
                  <div className="second-division">
                    {serviceList.length !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleServiceRemove(index)}
                        className="add h-12 pl-4 pr-4"
                      >
                        <span className="font-sans font-semibold text-white text-sm ">
                          Remove
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
      <div className="w-full h-1/6 flex justify-center items-center">
        <Button text="Add Category" onClick={handleSubmit} className="pl-8 pr-8"></Button>
      </div>
    </form>
  );
};

export default AddNewCategoryForm;
