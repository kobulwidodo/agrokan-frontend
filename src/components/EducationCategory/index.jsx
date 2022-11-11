import React from "react";
import { Link } from "react-router-dom";
import arrowGreenNone from "../../assets/icons/arrow-up-right-none.svg";
import arrowGreenActive from "../../assets/icons/arrow-up-right-active.svg";

const EducationCategory = ({ icon, label, to }) => {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between bg-white rounded-[22px] drop-shadow-md py-4 px-6 hover:border hover:border-[#0D9A56] hover:font-semibold w-full"
    >
      <div className="flex gap-x-4 items-center">
        <img src={icon} alt="" />
        <h1 className="text-[#1B1D1F] text-lg">{label}</h1>
      </div>
      <img src={arrowGreenNone} className="group-hover:hidden" alt="" />
      <img src={arrowGreenActive} className="hidden group-hover:block" alt="" />
    </Link>
  );
};

export default EducationCategory;
