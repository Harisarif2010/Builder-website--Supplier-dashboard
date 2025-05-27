import { poppins } from "@/app/fonts";
import React from "react";
import { Pen } from "lucide-react";
import "../../../app/globals.css";

const Warranty = () => {
  return (
    <div className="bg-white rounded-[22px] p-5">
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
            Return & Refund Policy
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter Policy"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#989898" size={16} />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
            Conditions for returns
          </label>

          <input
            type="text"
            className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
            placeholder="Add"
          />
        </div>
        {/* Company Name (Optional) */}
        <div className="flex flex-col">
          <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
            Warranty Duration
          </label>

          <select className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#989898] ">
            <option value="" className="text-[#989898]">
              Add Duration
            </option>

            <option value="ten">10 Days</option>
            <option value="twenty">20 Days</option>
          </select>
        </div>
      </div>
      <div className="my-4">
        {" "}
        <label className="flex items-center gap-3 text-[#000000] text-[13px] font-bold">
          <input
            type="radio"
            id="same"
            name="billing_option"
            value="same"
            size={100}
          />
          I agree to the terms & conditions
        </label>
      </div>

      <div className="flex flex-row justify-end mt-14">
        <button
          className={` ${poppins.variable}  bg-[var(--primary-blue)] text-white text-[24px] font-medium  rounded-[26px] h-13 flex justify-center items-center px-5`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Warranty;
