import React from "react";
import Button from "../Button";
import cartWhite from "../../assets/icons/cart-white.svg";
import StarGold from "../../components/StarGold";
import love from "../../assets/icons/love.svg";

const CardProduct = ({ image, label, startCount, totalBuyer, price }) => {
  return (
    <div className="px-3 py-5 rounded-md border">
      <img src={image} className="mx-auto" alt="" />
      <p className="text-[#016AA6] text-sm mt-3">{label}</p>
      <div className="flex items-center gap-x-2 mt-3">
        <StarGold count={startCount} />
        <p>{totalBuyer}</p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-[#4C4C4C] font-semibold text-lg">Rp {price}</p>
        <img src={love} alt="" />
      </div>
      <div className="mt-5">
        <Button label="Cart" icon={cartWhite} type="lg" className="w-full" />
      </div>
    </div>
  );
};

export default CardProduct;
