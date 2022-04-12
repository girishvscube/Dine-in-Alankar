import classNames from "classnames";
import React from "react";

export const TextField = ({
  children,
  className = "",
  onChange,
  type,
  placeholder,
}) => {
  const textfieldClasses = classNames("textfield", className);

  const commonProps = {
    className: textfieldClasses,
    onChange,
  };

  return <input {...commonProps} type={type} placeholder={placeholder} />;
};
