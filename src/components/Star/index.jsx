import React from "react";
import star from "../../assets/icons/star.svg";

const Star = ({ count }) => {
  return (
    <div className="flex gap-x-1 justify-center mt-5">
      {[...Array(count)].map(() => {
        return <img src={star} alt="" />;
      })}
    </div>
  );
};

export default Star;
