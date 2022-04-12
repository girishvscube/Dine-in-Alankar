import classNames from "classnames";
import React from "react";

export const TextField = ({ children, className = "", onChange }) => {
  const textfieldClasses = classNames("textfield", className);

  const commonProps = {
    className: textfieldClasses,
    onChange,
  };

  return React.createElement(
    "input",
    { ...commonProps, type: "text" },
    children
  );
};