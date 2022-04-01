import React from "react";
import "./style.scss";
import { orange } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import { color } from "@mui/system";

const AddNewCategoryForm = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

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
    <div className="h-4/6 ml-14 mt-6 w-11/12">
        <div className="w-full h-1/4 grid grid-cols-9 pr-28">
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("a")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("b")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("c")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("d")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("e")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("f")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("g")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("h")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("i")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("j")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("k")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("l")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("m")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("n")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
        <div className=" flex flex-row">
          <Radio className=""
            {...controlProps("o")}
            sx={{
              color: orange[50],
              "&.Mui-checked": {
                color: orange[800],
              },
            }}
          />
          <img src="fast-food.png" alt="food image"/>
        </div>
      </div>
      <div className="mb-10"></div>
      <div className="w-full h-1/6 flex justify-center items-center">
            <button className="add pt-3 pb-3 pl-9 pr-9 rounded-lg text-xs font-semibold font-sans text-white">Add Category</button>
      </div>
    </div>
  );
};

export default AddNewCategoryForm;

