import classNames from "classnames";
import React from "react";
import starGold from "../../assets/icons/star-gold.svg";

const StarGold = ({ count, align }) => {
  const classname = classNames(
    "flex gap-x-1",
    {
      "justify-start": align === "start",
    },
    {
      "justify-center": align === "center",
    },
    {
      "justify-end": align === "end",
    }
  );
  return (
    <div className={classname}>
      {[...Array(count)].map(() => {
        return <img src={starGold} alt="" />;
      })}
    </div>
  );
};

export default StarGold;
