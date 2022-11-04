import React from "react";
import Button from "../Button";

const CardService = ({ label, description, image }) => {
  return (
    <div className="mx-auto text-center bg-white drop-shadow-lg rounded-2xl px-10 py-12">
      <img src={image} className="mx-auto w-32 h-32" alt="" />
      <h1 className="mt-6 text-[#828282] text-xl font-normal">{label}</h1>
      <p className="mt-1 text-[#BDBDBD] text-sm font-medium">{description}</p>
      <div className="mt-10">
        <Button label="Detail" type="lg" />
      </div>
    </div>
  );
};

export default CardService;
