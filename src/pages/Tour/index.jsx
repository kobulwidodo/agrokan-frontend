import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import search from "../../assets/icons/search.svg";
import bali from "../../assets/icons/bali.svg";
import jogja from "../../assets/icons/jogja.svg";
import baliFarmTour from "../../assets/images/baliFarmTour.png";
import lodge from "../../assets/images/lodge.png";
import lembang from "../../assets/images/lembang.png";
import promo1 from "../../assets/images/promo-1.png";
import promo2 from "../../assets/images/promo2.png";
import promo3 from "../../assets/images/promo3.png";
import promo4 from "../../assets/images/promo4.png";
import saying1 from "../../assets/images/saying1.png";
import saying2 from "../../assets/images/saying2.png";
import saying3 from "../../assets/images/saying3.png";
import saying4 from "../../assets/images/saying4.png";
import loyality from "../../assets/images/loyality.png";
import avatarReview from "../../assets/images/avatarReview.png";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Tour = () => {
  return (
    <>
      <Navbar />
      <div className="bg-tractorHeader bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto py-32 px-4">
          <h1 className="text-center text-5xl font-semibold text-white">
            Agro Tour
          </h1>
          <form className="flex justify-center mx-auto mt-10 gap-x-5 text-xl px-6 py-5 rounded-xl text-white bg-gradient-to-r from-[#12753F] to-black/[0.63] max-w-[500px]">
            <input
              type="text"
              className="appearance-none focus:outline-none bg-transparent w-full flex-auto focus-none"
              placeholder="Search"
            />
            <img src={search} alt="" />
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="bg-[#F1FFF3] rounded-md flex flex-wrap justify-center px-5 md:px-16 py-11 gap-x-10 gap-y-5">
          <div className="flex items-center gap-x-6">
            <img src={bali} alt="" />
            <div className="flex flex-col gap-y-1">
              <h1 className="font-medium text-[#1B1D1F] text-2xl">Malang</h1>
              <p className="text-[#52565C] text-lg">7 Destination</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <img src={bali} alt="" />
            <div className="flex flex-col gap-y-1">
              <h1 className="font-medium text-[#1B1D1F] text-2xl">Bali</h1>
              <p className="text-[#52565C] text-lg">50+ Destination</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <img src={jogja} alt="" />
            <div className="flex flex-col gap-y-1">
              <h1 className="font-medium text-[#1B1D1F] text-2xl">Jojga</h1>
              <p className="text-[#52565C] text-lg">10 Destination</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <img src={jogja} alt="" />
            <div className="flex flex-col gap-y-1">
              <h1 className="font-medium text-[#1B1D1F] text-2xl">Bogor</h1>
              <p className="text-[#52565C] text-lg">50+ Destination</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-[#21212F] text-5xl font-semibold">
          Most <span className="text-[#0D9A56]">Popular Tour</span>
        </h1>
        <p className="text-black/[0.34] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-x-10 gap-y-5 py-10">
          <Card
            image={baliFarmTour}
            title="Bali Farm Tour"
            ratingCount={5}
            reviewCount={15}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut."
          />
          <Card
            image={lembang}
            title="Farm House Lembang"
            ratingCount={5}
            reviewCount={15}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut."
          />
          <Card
            image={lodge}
            title="Lodge Maribaya & Farm House"
            ratingCount={5}
            reviewCount={15}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut."
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-[#21212F] text-5xl font-semibold">
          What <span className="text-[#0D9A56]">Customer’s are saying ?</span>
        </h1>
        <div className="max-w-5xl">
          <p className="text-black/[0.34] mt-4">
            Take a look at what our customer's are saying. At Nature we not only
            provide you with services but also we provide you with valuable
            experiences for your valuable time.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 mt-10">
          <img src={saying1} className="w-full" alt="" />
          <img src={saying2} className="w-full" alt="" />
          <img src={saying3} className="w-full" alt="" />
          <img src={saying4} className="w-full" alt="" />
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-[#F6F4FF] drop-shadow-xl px-6 py-8 rounded-lg flex gap-x-5 items-center">
            <img src={avatarReview} alt="" />
            <h1 className="font-light text-lg">
              “ Great place to spend your vacation while exploring different
              experiences. “
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-[#21212F] text-5xl font-semibold">
          Big Sale <span className="text-[#0D9A56]">Promo</span>
        </h1>
        <div className="max-w-5xl">
          <p className="text-black/[0.34] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-x-10 gap-y-5 lg:gap-y-0 py-10">
          <Card image={promo1} description="Promo 11.11" />
          <Card image={promo2} description="Promo 12.12" />
          <Card image={promo3} description="Promo 13.13" />
          <Card image={promo4} description="Promo 14.14" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <img src={loyality} className="w-full" alt="" />
          <div className="flex flex-col gap-y-6 justify-center">
            <h1 className="text-[#21212F] font-semibold text-5xl w-2/3">
              Agrokan Loyalty Program
            </h1>
            <span className="text-center mt-5">
              <Button label="Learn More" type="md" />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tour;
