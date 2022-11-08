import React from "react";
import Navbar from "../../components/Navbar";
import header from "../../assets/images/header.png";
import ourstars from "../../assets/images/our-stars.png";
import organicSeed from "../../assets/images/organic-seed.png";
import agriculuteRent from "../../assets/images/agriculture-rent.png";
import qualityStandart from "../../assets/images/quality-standard.png";
import fertilizer from "../../assets/images/fertilizer.png";
import shovel from "../../assets/images/shovel.png";
import vegetable from "../../assets/images/fertilizer.png";
import userImage from "../../assets/images/user-image.png";
import tour from "../../assets/images/tour.png";
import comeCloser from "../../assets/images/come-closer.png";
import Button from "../../components/Button";
import iconArrow from "../../assets/icons/arrow-right.svg";
import seeds from "../../assets/images/seeds-1.svg";
import agriculture from "../../assets/icons/agriculture.svg";
import lightningElectric from "../../assets/icons/lightning-electric-energy.svg";
import tractor from "../../assets/icons/tractor.svg";
import CardService from "../../components/CardService";
import Footer from "../../components/Footer";
import Star from "../../components/Star";
import StarGold from "../../components/StarGold";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4 flex flex-row">
        <div className="flex-1 md:pr-10 self-center">
          <h1 className="text-[#48B760] text-8xl font-black font-roboto">
            AGRO<span className="text-[#4F4F4F]">KAN</span>
          </h1>
          <p className="text-[#828282] text-2xl font-normal mt-5 tracking-widest font-poppins">
            We have created a convenient and free tool for finding profitable
            offers for goods for the needs of your agricultural enterprise.
          </p>
          <div className="mt-10">
            <Button label="Get Started" type="md" icon={iconArrow} />
          </div>
        </div>
        <div className="flex-1 hidden md:flex">
          <img src={header} alt="" />
        </div>
      </div>
      <div className="bg-home bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto py-16 px-4 mt-10">
          <h1 className="text-[#4F4F4F] text-6xl font-normal">
            PRODUCT & SERVICE
          </h1>
          <p className="text-[#828282] font-normal text-lg mt-4">
            We strive to provide a space where guests can connect with us and
            explore our full potential about agriculture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 relative lg:grid-cols-4 gap-x-3 gap-y-8 lg:gap-y-0 md:gap-x-0 mt-10">
            <CardService
              label="Seeds"
              description="(Grains, pulses, and oilseeds)"
              image={seeds}
            />
            <CardService
              label="C3P"
              description="(Crop Crisis Control Project)"
              image={agriculture}
            />
            <CardService
              label="Fertilizers"
              description="( Food for plants)"
              image={lightningElectric}
            />
            <CardService
              label="Tour"
              description="(Agriculture Tourism)"
              image={tractor}
            />
          </div>
        </div>
      </div>
      <div className="bg-home bg-no-repeat bg-cover">
        <div className="max-w-7xl flex mx-auto py-16 px-4 mt-10">
          <div className="flex-1">
            <h1 className="text-[#4F4F4F] text-6xl font-normal">OUR STARS</h1>
            <h2 className="mt-20 text-[#363636] font-medium text-4xl">
              Organic Farming Goes
            </h2>
            <h2 className="mt-4 text-[#363636] font-medium text-4xl">
              On And Always On
            </h2>
            <div className="flex gap-x-14 mt-20">
              <div className="text-center">
                <h1 className="text-[#04B15E] font-semibold text-4xl">1,500</h1>
                <p className="text-[#1D1D1F]/60 font-normal text-sm mt-3">
                  Sold Product
                </p>
              </div>
              <div className="text-center">
                <h1 className="text-[#04B15E] font-semibold text-4xl">500</h1>
                <p className="text-[#1D1D1F]/60 font-normal text-sm mt-3">
                  Possitive Feedback
                </p>
              </div>
              <div className="text-center">
                <h1 className="text-[#04B15E] font-semibold text-4xl">400</h1>
                <p className="text-[#1D1D1F]/60 font-normal text-sm mt-3">
                  Official Store
                </p>
              </div>
            </div>
            <div className="mt-14">
              <Button label="Get Special Promo" type="md" icon={iconArrow} />
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <img src={ourstars} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-feature bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto py-16 px-4 mt-10">
          <h1 className="text-[#4F4F4F] text-6xl font-normal">OUR FEATURES</h1>
          <h2 className="text-[#003D38] text-5xl font-semibold mt-24 text-center">
            Variety Of Agriculture
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-10">
            <div className="flex items-stretch">
              <img src={organicSeed} className="w-1/2" alt="" />
              <div className="bg-[#F3FCF7] grow px-10 py-5 flex w-1/2">
                <div className="self-center">
                  <h1 className="text-[#363636] font-medium text-3xl">
                    Organic
                  </h1>
                  <h1 className="text-[#363636] font-medium text-3xl mt-3">
                    Service
                  </h1>
                  <p className="text-[#363636] text-base font-normal mt-5">
                    We offer the following services
                  </p>
                  <div className="mt-10">
                    <Button label="Discover Now" type="md" color="light" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-stretch">
              <img src={agriculuteRent} className="w-1/2" alt="" />
              <div className="bg-[#F3FCF7] grow px-10 py-5 flex w-1/2">
                <div className="self-center">
                  <h1 className="text-[#363636] font-medium text-3xl">
                    Agricultures
                  </h1>
                  <h1 className="text-[#363636] font-medium text-3xl mt-3">
                    Tools Rent
                  </h1>
                  <p className="text-[#363636] text-base font-normal mt-5">
                    We offer the following services
                  </p>
                  <div className="mt-10">
                    <Button label="Discover Now" type="md" color="light" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="bg-[#F3FCF7] grow px-10 py-5 flex w-1/2">
                <div className="self-center">
                  <h1 className="text-[#363636] font-medium text-3xl">
                    Quality
                  </h1>
                  <h1 className="text-[#363636] font-medium text-3xl mt-3">
                    Standarts
                  </h1>
                  <p className="text-[#363636] text-base font-normal mt-5">
                    We offer the following services
                  </p>
                  <div className="mt-10">
                    <Button label="Discover Now" type="md" color="light" />
                  </div>
                </div>
              </div>
              <img src={qualityStandart} className="w-1/2" alt="" />
            </div>
            <div className="flex items-stretch">
              <div className="bg-[#F3FCF7] grow px-10 py-5 flex w-1/2">
                <div className="self-center">
                  <h1 className="text-[#363636] font-medium text-3xl">
                    Come Closer
                  </h1>
                  <h1 className="text-[#363636] font-medium text-3xl mt-3">
                    with Agri
                  </h1>
                  <h1 className="text-[#363636] font-medium text-3xl mt-3">
                    Tourism
                  </h1>
                  <p className="text-[#363636] text-base font-normal mt-5">
                    We offer the following services
                  </p>
                  <div className="mt-10">
                    <Button label="Discover Now" type="md" color="light" />
                  </div>
                </div>
              </div>
              <img src={comeCloser} className="w-1/2" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 mt-10">
        <h1 className="text-[#4F4F4F] text-6xl font-normal">MOST POPULAR</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-7">
          <div className="border-2 border-[#76767540] px-10 py-6 mt-20">
            <img src={fertilizer} className="rounded-full mx-auto" alt="" />
            <Star count={5} />
            <h1 className="text-[#1D1D1F] text-lg text-center mt-5">
              Fertilizer for grass
            </h1>
            <h4 className="text-[#06C167] text-lg text-center mt-5">
              Rp 30.000
            </h4>
            <div className="text-center mt-7">
              <Button
                label="Buy Now"
                type="md"
                color="light"
                isRounded={false}
              />
            </div>
          </div>
          <div className="border-2 border-[#76767540] px-10 py-6 mt-20">
            <img src={shovel} className="rounded-full mx-auto" alt="" />
            <Star count={5} />
            <h1 className="text-[#1D1D1F] text-lg text-center mt-5">
              Garden Shovel
            </h1>
            <h4 className="text-[#06C167] text-lg text-center mt-5">
              Rp 72.500
            </h4>
            <div className="text-center mt-7">
              <Button
                label="Buy Now"
                type="md"
                color="light"
                isRounded={false}
              />
            </div>
          </div>
          <div className="border-2 border-[#76767540] px-10 py-6 mt-20">
            <img src={vegetable} className="rounded-full mx-auto" alt="" />
            <Star count={5} />
            <h1 className="text-[#1D1D1F] text-lg text-center mt-5">
              Fresh Vegetable
            </h1>
            <h4 className="text-[#06C167] text-lg text-center mt-5">
              Rp 20.000
            </h4>
            <div className="text-center mt-7">
              <Button
                label="Buy Now"
                type="md"
                color="light"
                isRounded={false}
              />
            </div>
          </div>
          <div className="border-2 border-[#76767540] px-10 py-6 mt-20">
            <img src={tour} className="rounded-full mx-auto" alt="" />
            <Star count={5} />
            <h1 className="text-[#1D1D1F] text-lg text-center mt-5">
              Tour Tickets
            </h1>
            <h4 className="text-[#06C167] text-lg text-center mt-5">
              Rp 150.000
            </h4>
            <div className="text-center mt-7">
              <Button
                label="Buy Now"
                type="md"
                color="light"
                isRounded={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-testimonial bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto py-16 px-4 mt-10">
          <h1 className="text-[#4F4F4F] text-6xl font-normal">TESTIMONIALS</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-10 md:gap-y-0 mt-20">
            <div className="mx-auto text-center">
              <img src={userImage} alt="" className="rounded-full mx-auto" />
              <h1 className="font-bold text-lg mt-5">Bagas</h1>
              <p className="text-[#696969] text-base font-normal mt-7">
                “This web really helps me in managing my plantation”
              </p>
              <StarGold count={5} />
            </div>
            <div className="mx-auto text-center">
              <img src={userImage} alt="" className="rounded-full mx-auto" />
              <h1 className="font-bold text-lg mt-5">Bagas</h1>
              <p className="text-[#696969] text-base font-normal mt-7">
                “This web really helps me in managing my plantation”
              </p>
              <StarGold count={5} />
            </div>
            <div className="mx-auto text-center">
              <img src={userImage} alt="" className="rounded-full mx-auto" />
              <h1 className="font-bold text-lg mt-5">Bagas</h1>
              <p className="text-[#696969] text-base font-normal mt-7">
                “This web really helps me in managing my plantation”
              </p>
              <StarGold count={5} />
            </div>
            <div className="mx-auto text-center">
              <img src={userImage} alt="" className="rounded-full mx-auto" />
              <h1 className="font-bold text-lg mt-5">Bagas</h1>
              <p className="text-[#696969] text-base font-normal mt-7">
                “This web really helps me in managing my plantation”
              </p>
              <StarGold count={5} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-interest bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto py-28 px-4 mt-10">
          <h1 className="text-center font-semibold text-5xl text-white">
            Interested in our product ?
          </h1>
          <h1 className="text-center font-semibold text-5xl text-white mt-5">
            Let's join to try!
          </h1>
          <div className="mt-14 text-center">
            <Button label="Get Started" type="lg" className="rounded-md" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
