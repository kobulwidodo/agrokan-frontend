import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  label,
  icon,
  className,
  type,
  color,
  isRounded,
  isLink,
  to,
}) => {
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
      "w-full rounded-md": type === "full",
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
    <>
      {isLink ? (
        <Link to="#" className={classname}>
          {label}
        </Link>
      ) : (
        <button className={classname} type="submit">
          <div className="flex justify-center gap-x-3">
            {icon ? <img src={icon} alt="" /> : null}
            {label}
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
