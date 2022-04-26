import classNames from "classnames";

export const Button = ({
  text,
  className = "",
  onClick = {},
  onChange,
  disabled,
}) => {
  const styleClasses = classNames("btn", className);

  const commonProps = {
    className: styleClasses,
    onChange,
    onClick,
    disabled,
  };

  return (
    <button {...commonProps} className={styleClasses}>
      {text}
    </button>
  );
};
