import { roboto } from "@/app/fonts";
import { Pen } from "lucide-react";
import Image from "next/image";
import React from "react";

const EditProduct = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-2 pb-1 pt-2">
        Edit Product
      </h3>
      <div className="bg-white rounded-[22px] p-3">
        {" "}
        <div
          className={
            "grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  my-5"
          }
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Product Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" size={16} />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Price
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" size={16} />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Quantity in Stock
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" size={16} />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col ">
            <label className="text-[#000000] font-bold text-[13px] mb-2 ml-1">
              Upload Product Image
            </label>
            <label className="border  border-[var(--secondary-border)] rounded-[11px] h-36 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
              <input type="file" className="hidden" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/icons/upload.png"
                  width={60}
                  height={60}
                  alt="Upload"
                  className="p-2 "
                />
              </div>
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-end mt-14">
          <button
            className={`${roboto.variable}  bg-[var(--primary-blue)] text-white text-[18px] font-bold px-6 py-3 rounded-[22px] h-12 `}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
