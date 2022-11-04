import React from "react";
import logoFull from "../../assets/images/logo-full.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4">
      <div className="md:flex">
        <div className="md:w-2/5">
          <div className="">
            <img src={logoFull} alt="" />
            <p className="text-[#1D1D1F] mt-10 w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
            <div className="flex gap-x-5 mt-10">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-y-7 md:gap-y-0 mt-10 md:mt-0">
          <div className="">
            <h1 className="text-[#1D1D1F] font-medium text-xl mb-8">
              About Us
            </h1>
            <div className="flex flex-col">
              <Link className="text-[#1D1D1F] mb-3" to="#">
                About Us
              </Link>
              <Link className="text-[#1D1D1F] mb-3" to="#">
                Servive Us
              </Link>
              <Link className="text-[#1D1D1F] mb-3" to="#">
                Contact
              </Link>
              <Link className="text-[#1D1D1F] mb-3" to="#">
                Company
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-[#1D1D1F] font-medium text-xl mb-8">Company</h1>
            <div className="flex flex-col">
              <Link className="text-[#1D1D1F] mb-3" to="#">
                Partnership
              </Link>
              <Link className="text-[#1D1D1F] mb-3" to="#">
                Terms of Use
              </Link>
              <Link className="text-[#1D1D1F] mb-3" to="#">
                Privacy
              </Link>
              <Link className="text-[#1D1D1F] mb-3" to="#">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-[#1D1D1F] font-medium text-xl mb-8">
              Get in touch
            </h1>
            <p className="text-[#1D1D1F] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <form action="" className="flex gap-x-3">
              <input
                type="text"
                className="bg-[#F0F1EC] text-[#1D1D1F]/0.5 px-5 py-3"
                placeholder="Email"
              />
              <button className="bg-[#04B15E] font-medium text-white px-5 py-3 hover:bg-[#008243]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
