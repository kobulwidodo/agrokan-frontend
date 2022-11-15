import React from "react";
import Footer from "../../components/Footer";
import search from "../../assets/icons/search.svg";
import Navbar from "../../components/Navbar";
import question from "../../assets/icons/question.svg";
import compass from "../../assets/icons/compass.svg";
import tags from "../../assets/icons/tags.svg";
import answer from "../../assets/icons/answer.svg";
import likes from "../../assets/icons/likes.svg";
import clock from "../../assets/icons/clock.svg";
import ArrowUpRight from "../../assets/icons/ArrowUpRight.svg";
import setting from "../../assets/icons/setting.svg";
import woman1 from "../../assets/icons/woman1.svg";
import view from "../../assets/icons/view.svg";
import plus from "../../assets/icons/plus.svg";
import chatBubble from "../../assets/icons/chat-bubble.svg";
import questionI from "../../assets/icons/question-i.svg";

const Discussion = () => {
  return (
    <>
      <Navbar />
      <div className="bg-discussionHeader bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto py-32 px-4">
          <h1 className="text-center text-5xl font-semibold text-white">
            Discussion Form
          </h1>
          <form className="flex justify-center mx-auto mt-10 gap-x-5 text-xl px-6 py-5 rounded-xl text-white max-w-[500px] border-2 border-white">
            <input
              type="text"
              className="appearance-none focus:outline-none bg-transparent w-full flex-auto focus-none placeholder:text-white"
              placeholder="Search"
            />
            <img src={search} alt="" />
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8">
          <div className="hidden lg:block">
            <h1 className="text-[#594545] font-light text-xl">MENU</h1>
            <div className="flex my-5 w-full">
              <div className="bg-[#0D9A56] w-2"></div>
              <div className="flex items-center px-3 py-3 bg-[#3FC51D]/[0.3] w-2/3">
                <img src={question} alt="" />
                <h1 className="text-[#0D9A56] font-semibold text-lg ml-2">
                  Questions
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-x-2 mb-4">
              <img src={compass} alt="" />
              <h1 className="text-[#594545] font-medium text-lg">
                Explore Topics
              </h1>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={tags} alt="" />
              <h1 className="text-[#594545] font-medium text-lg">Tags</h1>
            </div>
            <h1 className="text-[#594545] font-light text-xl mt-7 mb-5">
              PERSONAL NAVIGATOR
            </h1>
            <div className="flex items-center gap-x-2 mb-4">
              <img src={questionI} alt="" />
              <h1 className="text-[#594545] font-medium text-lg">
                My Question
              </h1>
            </div>
            <div className="flex items-center gap-x-2 mb-4">
              <img src={answer} alt="" />
              <h1 className="text-[#594545] font-medium text-lg">My Answer</h1>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={likes} alt="" />
              <h1 className="text-[#594545] font-medium text-lg">My Likes</h1>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-wrap gap-y-3 gap-x-5">
              <div className="flex gap-x-2 items-center rounded-full bg-[#0D9A56] px-10 py-3">
                <img src={clock} alt="" />
                <h1 className="text-md text-white">New</h1>
              </div>
              <div className="flex gap-x-2 items-center rounded-full bg-[#E8E8E8] px-10 py-3">
                <img src={ArrowUpRight} alt="" />
                <h1 className="text-md text-[#808080]">Trending</h1>
              </div>
              <div className="flex gap-x-2 items-center rounded-full bg-[#E8E8E8] px-10 py-3">
                <img src={setting} alt="" />
                <h1 className="text-md text-[#808080]">Category</h1>
              </div>
            </div>
            <div className="mt-5 bg-white drop-shadow-xl rounded-md px-6 py-8">
              <div className="flex gap-x-5">
                <div className="">
                  <h1 className="text-[#6D5C5C] font-semibold text-lg">
                    Which months in the European summer crops season are most
                    sensitive to precipitation and temperature anomalies?
                  </h1>
                  <p className="text-[#594545] text-md mt-2">09:00 pm</p>
                </div>
                <div className="bg-[#0D9A56] rounded-lg px-8 py-3 self-start">
                  <h1 className="text-white text-md font-medium">
                    Agriculture
                  </h1>
                </div>
                <img src={woman1} className="self-start" alt="" />
              </div>
              <h1 className="text-[#9E9E9E] text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                magna justo, volutpat, non amet massa viverra euismod id.
              </h1>
              <div className="flex justify-end gap-x-3 mt-16">
                <div className="flex items-center gap-x-1">
                  <img src={view} alt="" />
                  <p className="text-black/[0.5]">60</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src={chatBubble} alt="" />
                  <p className="text-black/[0.5]">3</p>
                </div>
              </div>
            </div>
            <div className="mt-5 bg-white drop-shadow-xl rounded-md px-6 py-8 flex flex-col gap-y-5">
              <div className="flex gap-x-5">
                <div className="">
                  <h1 className="text-[#6D5C5C] font-semibold text-lg">
                    Which months in the European summer crops season are most
                    sensitive to precipitation and temperature anomalies?
                  </h1>
                  <p className="text-[#594545] text-md mt-2">09:00 pm</p>
                </div>
                <div className="bg-[#0D9A56] rounded-lg px-8 py-3 self-start">
                  <h1 className="text-white text-md font-medium">
                    Agriculture
                  </h1>
                </div>
                <img src={woman1} className="self-start" alt="" />
              </div>
              <h1 className="text-[#9E9E9E] text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                magna justo, volutpat, non amet massa viverra euismod id.
              </h1>
              <div className="flex justify-end gap-x-3 mt-16">
                <div className="flex items-center gap-x-1">
                  <img src={view} alt="" />
                  <p className="text-black/[0.5]">60</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src={chatBubble} alt="" />
                  <p className="text-black/[0.5]">3</p>
                </div>
              </div>
            </div>
            <div className="mt-5 bg-white drop-shadow-xl rounded-md px-6 py-8">
              <div className="flex gap-x-5">
                <div className="">
                  <h1 className="text-[#6D5C5C] font-semibold text-lg">
                    Which months in the European summer crops season are most
                    sensitive to precipitation and temperature anomalies?
                  </h1>
                  <p className="text-[#594545] text-md mt-2">09:00 pm</p>
                </div>
                <div className="bg-[#0D9A56] rounded-lg px-8 py-3 self-start">
                  <h1 className="text-white text-md font-medium">
                    Agriculture
                  </h1>
                </div>
                <img src={woman1} className="self-start" alt="" />
              </div>
              <h1 className="text-[#9E9E9E] text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                magna justo, volutpat, non amet massa viverra euismod id.
              </h1>
              <div className="flex justify-end gap-x-3 mt-16">
                <div className="flex items-center gap-x-1">
                  <img src={view} alt="" />
                  <p className="text-black/[0.5]">60</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <img src={chatBubble} alt="" />
                  <p className="text-black/[0.5]">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center bg-[#0D9A56] rounded-md p-5 gap-x-3 w-4/5">
              <img src={plus} alt="" />
              <p className="text-white font-medium text-md">
                Start a New Topic
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Discussion;
