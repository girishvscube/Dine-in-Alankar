// import classNames from "classnames";
// import React from "react";

// export const Button = ({ children, className = "", onClick }) => {
//   const buttonClasses = classNames("btn", className);

//   const commonProps = {
//     className: buttonClasses,
//     onClick,
//   };

//   return React.createElement(
//     "button",
//     { ...commonProps, type: "button" },
//     children
//   );
// };

import classNames from "classnames";

export const Button = ({ text, className = "", handleClick = null, onClick, onChange }) => {
  const styleClasses = classNames("btn", className);

  const commonProps = {
    className: styleClasses,
    onChange,
    onClick,
  };

  return (
    <button {...commonProps} onClick={handleClick} className={styleClasses}>
      {text}
    </button>
  );
};
