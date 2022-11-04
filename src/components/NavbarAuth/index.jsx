import React from "react";
import { Link } from "react-router-dom";

const NavbarAuth = () => {
  return (
    <div className="flex gap-x-14 pt-10">
      <Link to="/" className="text-[#1D1D1F] text-lg hover:text-[#04B15E]">
        Home
      </Link>
      <Link to="/" className="text-[#1D1D1F] text-lg hover:text-[#04B15E]">
        About Us
      </Link>
      <Link to="/" className="text-[#1D1D1F] text-lg hover:text-[#04B15E]">
        Article
      </Link>
      <Link to="/" className="text-[#1D1D1F] text-lg hover:text-[#04B15E]">
        Pages
      </Link>
    </div>
  );
};

export default NavbarAuth;
