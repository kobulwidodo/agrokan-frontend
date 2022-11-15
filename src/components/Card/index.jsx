import React from "react";
import StarGold from "../../components/StarGold";
import arrowGreen from "../../assets/icons/arrow-green.svg";

const Card = ({ image, title, ratingCount, reviewCount, description }) => {
  return (
    <>
      <div className="rounded-xl bg-white drop-shadow-2xl">
        <img src={image} className="w-full" alt="" />
        <div className="p-5">
          <h1 className="text-[#363A3D] text-lg">{title}</h1>
          {ratingCount ? (
            <div className="flex gap-x-2 items-center mt-1">
              <StarGold align="start" count={ratingCount} />
              <h1>({reviewCount})</h1>
            </div>
          ) : null}
          <div className="flex flex-col gap-y-4 mt-5 text-lg text-[#363A3D]">
            <p>{description}</p>
          </div>
          <div className="border-t my-5"></div>
          <div className="flex justify-between items-center">
            <h1 className="text-[#1B1D1F] text-xl font-semibold">
              Detail Tour
            </h1>
            <img src={arrowGreen} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
