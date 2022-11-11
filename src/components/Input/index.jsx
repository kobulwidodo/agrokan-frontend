import classNames from "classnames";
import React from "react";

const Input = ({ margin, type, className, placeholder, name, ...other }) => {
  const classname = classNames(
    "bg-[#EAF0F7] rounded-lg px-5 py-5 text-lg text-[#4F555A] font-medium w-full",
    className
  );
  return (
    <div className={margin}>
      <input
        type={type}
        className={classname}
        placeholder={placeholder}
        name={name}
        {...other}
      />
    </div>
  );
};

export default Input;
