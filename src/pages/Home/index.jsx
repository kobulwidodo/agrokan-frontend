import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import shopping from "../../assets/images/shopping.svg";
import education from "../../assets/images/education.svg";
import fertilizer from "../../assets/images/fertilizer.svg";
import farmtrac from "../../assets/images/farmtrac.svg";
import foxfarm from "../../assets/images/foxfarm.svg";
import tour from "../../assets/images/tour.svg";
import videoHome from "../../assets/images/video-home.png";
import discussion from "../../assets/icons/discussion.svg";
import phone from "../../assets/icons/phone.svg";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-homeHeader bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <h1 className="text-[#003D38] text-5xl font-semibold text-center md:text-left">
            Join the Agro community
          </h1>
          <p className="text-[#000000]/[.35] mt-10 text-3xl md:w-1/2 text-center md:text-left">
            you can discuss with others and get consultations to better protect
            your agricultural enterprise.
          </p>
          <div className="text-center md:text-left">
            <Button
              label="Follow For Join"
              className="rounded-md font-semibold mt-10 drop-shadow-lg"
              type="lg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 bg-white p-4 rounded-xl shadow-lg">
          <Link to="#">
            <img src={shopping} className="w-full" alt="" />
          </Link>
          <Link to="#">
            <img src={education} className="w-full" alt="" />
          </Link>
          <Link to="#">
            <img src={tour} className="w-full" alt="" />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-center text-[#266937] font-medium text-3xl">
          BEST SELLERS
        </h2>
        <h1 className="text-[#003D38] font-bold text-4xl text-center mt-3">
          HIGHLIGHTED PRODUCTS
        </h1>
        <div className="flex justify-center">
          <p className="text-[#01312C] text-center mt-5 w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
        </div>
        <div className="flex justify-center gap-x-8 mt-10">
          <div className="text-center px-3 py-5 bg-white drop-shadow-xl max-w-xs rounded-xl">
            <img src={fertilizer} className="mx-auto" alt="" />
            <h1 className="text-[#01312C] font-semibold mt-5">
              Fertilizer for Grass
            </h1>
            <p className="text-[#01312C] font-normal text-xs mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="text-center px-3 py-5 bg-white drop-shadow-xl max-w-xs rounded-xl">
            <img src={farmtrac} className="mx-auto" alt="" />
            <h1 className="text-[#01312C] font-semibold mt-5">
              Farmtrac 45 Classic Pro
            </h1>
            <p className="text-[#01312C] font-normal text-xs mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="text-center px-3 py-5 bg-white drop-shadow-xl max-w-xs rounded-xl">
            <img src={foxfarm} className="mx-auto" alt="" />
            <h1 className="text-[#01312C] font-semibold mt-5">
              FoxFarm - 1 Gallon
            </h1>
            <p className="text-[#01312C] font-normal text-xs mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
        <div className="text-center mt-14">
          <Button
            isLink={true}
            to="#"
            label="View All Product"
            type="md"
            className="font-bold"
          />
        </div>
      </div>
      <div className="bg-stepStart bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto py-10 px-4">
          <h2 className="text-center text-[#266937] text-xl font-medium mt-28">
            STEP'S TO START
          </h2>
          <h1 className="text-[#003D38] text-3xl font-bold text-center mt-2">
            A SPRING VEGETABLE GARDEN
          </h1>
          <div className="flex justify-center mt-2">
            <p className="text-[#01312C] w-1/2 text-center">
              If you're looking to start a spring vegetable garden, there are a
              few things you need to know.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Button
              isLink={true}
              to="#"
              type="lg"
              className="font-semibold rounded-md"
              label="Learn More"
            />
            <Link to="#">
              <img
                src={videoHome}
                className="w-full max-w-[750px] mx-auto mt-10"
                alt=""
              />
            </Link>
          </div>
          <div className="flex flex-wrap gap-y-5 md:gap-y-0 gap-x-8 justify-center mt-16">
            <Link
              to="#"
              className="px-10 py-5 bg-[#429C59] drop-shadow-lg rounded-xl md:max-w-[268px] w-full hover:bg-[#3a8c4e]"
            >
              <img src={discussion} className="mx-auto" alt="" />
              <p className="mt-5 text-white text-center text-xl font-semibold">
                Discussion With Others
              </p>
            </Link>
            <Link
              to="#"
              className="px-10 py-5 bg-[#429C59] drop-shadow-lg rounded-xl md:max-w-[268px] w-full hover:bg-[#3a8c4e]"
            >
              <img src={phone} width="42" className="mx-auto" alt="" />
              <p className="mt-5 text-white text-center text-xl font-semibold">
                Professional Consultation
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
