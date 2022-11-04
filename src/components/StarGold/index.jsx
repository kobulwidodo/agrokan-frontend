import React from "react";
import starGold from "../../assets/icons/star-gold.svg";

const StarGold = ({ count }) => {
  return (
    <div className="flex gap-x-1 justify-center mt-5">
      {[...Array(count)].map(() => {
        return <img src={starGold} alt="" />;
      })}
    </div>
  );
};

export default StarGold;
