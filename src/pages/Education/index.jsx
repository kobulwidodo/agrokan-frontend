import React from "react";
import Navbar from "../../components/Navbar";
import search from "../../assets/icons/search.svg";
import profesional from "../../assets/icons/profesional.svg";
import farmer from "../../assets/icons/farmer.svg";
import video from "../../assets/icons/video.svg";
import user from "../../assets/icons/user.svg";
import agriculture from "../../assets/icons/agriculture-edu.svg";
import arrowGreen from "../../assets/icons/arrow-green.svg";
import garden from "../../assets/images/garden-education.png";
import development from "../../assets/icons/development-edu.svg";
import mechanic from "../../assets/icons/mechanic.svg";
import business from "../../assets/icons/business.svg";
import lifestyle from "../../assets/icons/lifestyle.svg";
import gardening from "../../assets/icons/gardening.svg";
import plants from "../../assets/icons/plants.svg";
import health from "../../assets/icons/health.svg";
import finance from "../../assets/icons/finance.svg";
import tractorEdu from "../../assets/icons/tractor-edu.svg";
import developmentEdu from "../../assets/icons/development-edu.svg";
import StarGold from "../../components/StarGold";
import EducationCategory from "../../components/EducationCategory";
import Footer from "../../components/Footer";

const Education = () => {
  return (
    <>
      <Navbar />
      <div className="bg-tractorHeader bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto py-32 px-4">
          <h1 className="text-center text-5xl font-semibold text-white">
            Education
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
            <img src={profesional} alt="" />
            <div className="flex flex-col gap-y-1">
              <h1 className="font-medium text-[#1B1D1F] text-2xl">300</h1>
              <p className="text-[#52565C] text-lg">Professional</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <img src={farmer} alt="" />
            <div className="flex flex-col gap-y-1">
              <h1 className="font-medium text-[#1B1D1F] text-2xl">20,000+</h1>
              <p className="text-[#52565C] text-lg">Farmer</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <img src={video} alt="" />
            <div className="flex flex-col gap-y-1">
              <h1 className="font-medium text-[#1B1D1F] text-2xl">10,000+</h1>
              <p className="text-[#52565C] text-lg">Video</p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <img src={user} alt="" />
            <div className="flex flex-col gap-y-1">
              <h1 className="font-medium text-[#1B1D1F] text-2xl">
                1,000,000+
              </h1>
              <p className="text-[#52565C] text-lg">User</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-[#21212F] text-5xl font-semibold">
          Most <span className="text-[#0D9A56]">Popular Topic</span>
        </h1>
        <p className="text-black/[0.34] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-5 gap-x-5 gap-y-5 py-10">
          <div className="drop-shadow-2xl w-full">
            <div className="rounded-t-3xl p-5 bg-white">
              <img src={garden} className="w-full rounded-xl" alt="" />
              <h1 className="mt-3 text-[#363A3D] text-lg">
                Vegetable Garden Design
              </h1>
              <div className="flex gap-x-3 items-center mt-3">
                <StarGold count={5} align="start" />
                <p className="text-[#52565C] text-md">(15)</p>
              </div>
            </div>
            <div className="rounded-b-3xl p-5 bg-white border-t">
              <div className="flex justify-between items-center">
                <h1 className="text-[#1B1D1F] font-semibold text-xl">
                  Watch Now
                </h1>
                <img src={arrowGreen} alt="" />
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl w-full">
            <div className="rounded-t-3xl p-5 bg-white">
              <img src={garden} className="w-full rounded-xl" alt="" />
              <h1 className="mt-3 text-[#363A3D] text-lg">
                Vegetable Garden Design
              </h1>
              <div className="flex gap-x-3 items-center mt-3">
                <StarGold count={5} align="start" />
                <p className="text-[#52565C] text-md">(15)</p>
              </div>
            </div>
            <div className="rounded-b-3xl p-5 bg-white border-t">
              <div className="flex justify-between items-center">
                <h1 className="text-[#1B1D1F] font-semibold text-xl">
                  Watch Now
                </h1>
                <img src={arrowGreen} alt="" />
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl w-full">
            <div className="rounded-t-3xl p-5 bg-white">
              <img src={garden} className="w-full rounded-xl" alt="" />
              <h1 className="mt-3 text-[#363A3D] text-lg">
                Vegetable Garden Design
              </h1>
              <div className="flex gap-x-3 items-center mt-3">
                <StarGold count={5} align="start" />
                <p className="text-[#52565C] text-md">(15)</p>
              </div>
            </div>
            <div className="rounded-b-3xl p-5 bg-white border-t">
              <div className="flex justify-between items-center">
                <h1 className="text-[#1B1D1F] font-semibold text-xl">
                  Watch Now
                </h1>
                <img src={arrowGreen} alt="" />
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl w-full">
            <div className="rounded-t-3xl p-5 bg-white">
              <img src={garden} className="w-full rounded-xl" alt="" />
              <h1 className="mt-3 text-[#363A3D] text-lg">
                Vegetable Garden Design
              </h1>
              <div className="flex gap-x-3 items-center mt-3">
                <StarGold count={5} align="start" />
                <p className="text-[#52565C] text-md">(15)</p>
              </div>
            </div>
            <div className="rounded-b-3xl p-5 bg-white border-t">
              <div className="flex justify-between items-center">
                <h1 className="text-[#1B1D1F] font-semibold text-xl">
                  Watch Now
                </h1>
                <img src={arrowGreen} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-[#21212F] text-5xl font-semibold">
          Most <span className="text-[#0D9A56]">Popular Category</span>
        </h1>
        <p className="text-black/[0.34] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10 mt-10">
          <EducationCategory to="#" icon={agriculture} label="Agriculture" />
          <EducationCategory to="#" icon={development} label="Development" />
          <EducationCategory to="#" icon={mechanic} label="Mechanic" />
          <EducationCategory to="#" icon={business} label="Business" />
          <EducationCategory to="#" icon={lifestyle} label="Lifestyle" />
          <EducationCategory to="#" icon={gardening} label="Gardening" />
          <EducationCategory to="#" icon={lifestyle} label="Lifestyle" />
          <EducationCategory to="#" icon={plants} label="Plants Foods" />
          <EducationCategory
            to="#"
            icon={developmentEdu}
            label="Personal Development"
          />
          <EducationCategory to="#" icon={health} label="Health" />
          <EducationCategory to="#" icon={finance} label="Finance" />
          <EducationCategory to="#" icon={mechanic} label="Mechanic" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Education;
