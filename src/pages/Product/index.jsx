import React from "react";
import Button from "../../components/Button";
import CardProduct from "../../components/CardProduct";
import Navbar from "../../components/Navbar";
import fertiliserProduct from "../../assets/images/fertiliser-product.png";
import Footer from "../../components/Footer";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="flex flex-wrap justify-center gap-x-2 px-7 py-4 rounded-[28px] shadow-[0_0_40px_rgba(2,57,49,0.1)]">
          <Button
            label="Rent"
            type="md"
            isRounded={true}
            isLink={false}
            className="rounded-full"
          />
          <Button
            label="Tractor"
            type="md"
            isRounded={true}
            isLink={false}
            className="rounded-full bg-white shadow-none text-black/[0.44] text-base hover:text-white"
          />
          <Button
            label="Shovel"
            type="md"
            isRounded={true}
            isLink={false}
            className="rounded-full bg-white shadow-none text-black/[0.44] text-base hover:text-white"
          />
          <Button
            label="Rotavator"
            type="md"
            isRounded={true}
            isLink={false}
            className="rounded-full bg-white shadow-none text-black/[0.44] text-base hover:text-white"
          />
          <Button
            label="Cloche (argiculture)"
            type="md"
            isRounded={true}
            isLink={false}
            className="rounded-full bg-white shadow-none text-black/[0.44] text-base hover:text-white"
          />
          <Button
            label="Pos Pounder"
            type="md"
            isRounded={true}
            isLink={false}
            className="rounded-full bg-white shadow-none text-black/[0.44] text-base hover:text-white"
          />
          <Button
            label="Loy (spade)"
            type="md"
            isRounded={true}
            isLink={false}
            className="rounded-full bg-white shadow-none text-black/[0.44] text-base hover:text-white"
          />
          <Button
            label="Shepherd's crook"
            type="md"
            isRounded={true}
            isLink={false}
            className="rounded-full bg-white shadow-none text-black/[0.44] text-base hover:text-white"
          />
          <Button
            label="Home (tool)"
            type="md"
            isRounded={true}
            isLink={false}
            className="rounded-full bg-white shadow-none text-black/[0.44] text-base hover:text-white"
          />
        </div>
        <div className="flex gap-x-20 mt-10">
          <div className="hidden md:block md:w-1/5">
            <div className="flex justify-between">
              <h1 className="text-[#4C4C4C] text-lg">FILTER</h1>
              <button className="text-[#0D9A56] text-lg underline">
                Delete All
              </button>
            </div>
            <div className="border-t my-3"></div>
            <h1 className="text-[#4C4C4C] text-lg mb-3">Categories</h1>
            <div className="flex flex-col gap-y-1">
              <div className="flex gap-x-3">
                <input type="checkbox" id="tractor" />
                <label htmlFor="tractor" className="text-[#0D9A56] text-md">
                  Tractor (24)
                </label>
              </div>
              <div className="flex gap-x-3">
                <input type="checkbox" id="tractor" />
                <label htmlFor="tractor" className="text-[#0D9A56] text-md">
                  Shovel (11)
                </label>
              </div>
              <div className="flex gap-x-3">
                <input type="checkbox" id="tractor" />
                <label htmlFor="tractor" className="text-[#0D9A56] text-md">
                  Rotavator (4)
                </label>
              </div>
              <div className="flex gap-x-3">
                <input type="checkbox" id="tractor" />
                <label htmlFor="tractor" className="text-[#0D9A56] text-md">
                  Cloche (32)
                </label>
              </div>
              <div className="flex gap-x-3">
                <input type="checkbox" id="tractor" />
                <label htmlFor="tractor" className="text-[#0D9A56] text-md">
                  Post Pounder (21)
                </label>
              </div>
            </div>
            <h1 className="text-[#4C4C4C] text-lg mt-7 mb-3">Brands</h1>
            <div className="flex flex-col gap-y-1">
              <div className="flex gap-x-3">
                <input type="checkbox" id="alamoIndustrial" />
                <label
                  htmlFor="alamoIndustrial"
                  className="text-[#0D9A56] text-md"
                >
                  Alamo Industrial (24)
                </label>
              </div>
              <div className="flex gap-x-3">
                <input type="checkbox" id="amcoManufacturing" />
                <label
                  htmlFor="amcoManufacturing"
                  className="text-[#0D9A56] text-md"
                >
                  Amco Manufacturing (11)
                </label>
              </div>
              <div className="flex gap-x-3">
                <input type="checkbox" id="boxer" />
                <label htmlFor="boxer" className="text-[#0D9A56] text-md">
                  Boxer (4)
                </label>
              </div>
              <div className="flex gap-x-3">
                <input type="checkbox" id="cadman" />
                <label htmlFor="cadman" className="text-[#0D9A56] text-md">
                  Cadman (32)
                </label>
              </div>
              <div className="flex gap-x-3">
                <input type="checkbox" id="cArenaEquipment" />
                <label
                  htmlFor="cArenaEquipment"
                  className="text-[#0D9A56] text-md"
                >
                  C. Arena Equipment (21)
                </label>
              </div>
            </div>
            {/* <h1 className="text-[#4C4C4C] text-lg mt-7 mb-3">Price</h1> */}
          </div>
          <div className="md:w-4/5 5/5">
            <div className="flex justify-between">
              <p className="text-[#4C4C4C] text-sm">
                Showing 1 - 20 of 49 products
              </p>
              <div className="flex items-center gap-x-5">
                <p className="text-[#4C4C4C] text-sm">Sort By</p>
                <select name="sort" id="sort" className="border px-2 py-1">
                  <option value="lowesr">Lowest price</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
              <CardProduct
                image={fertiliserProduct}
                label="Slow-release Complete Lawn Fertilizer W/ Iron Humic Dg & Micros (18)"
                totalBuyer={18}
                startCount={5}
                price="932,500"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
