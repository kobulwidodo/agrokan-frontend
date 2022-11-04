import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, icon, className, type, color, isRounded }) => {
  const classname = classNames(
    {
      "bg-[#04B15E] text-white py-3 shadow-md hover:bg-[#049b52] text-lg":
        color === undefined,
    },
    {
      "px-4 rounded-lg": type === "md",
    },
    {
      "px-16 rounded-full": type === "lg",
    },
    {
      "rounded-none": isRounded === false,
    },
    {
      "bg-[#E6F9F0] text-[#06C167] font-medium text-sm py-2 px-3.5 hover:bg-[#ccfde6]":
        color === "secondary",
    },
    {
      "bg-[#FFFFFF] text-[#06C167] border-2 border-[#06C167] font-medium text-sm py-2 px-3.5 hover:bg-[#ccfde6]":
        color === "light",
    },
    className
  );
  return (
    <Link to="#" className={classname}>
      {label}
    </Link>
  );
};

export default Button;
