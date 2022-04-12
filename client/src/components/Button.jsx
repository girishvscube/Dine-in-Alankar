import classNames from "classnames";
import React from "react";

export const Button = ({ children, className = "", onClick }) => {
  const buttonClasses = classNames("btn", className);

  const commonProps = {
    className: buttonClasses,
    onClick,
  };

  return React.createElement(
    "button",
    { ...commonProps, type: "button" },
    children
  );
};