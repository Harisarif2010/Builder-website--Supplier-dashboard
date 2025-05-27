"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { roboto } from "@/app/fonts";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Marked");
  const options = ["Shipped", "Delivered", "Cancel"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className={roboto.className}>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
        Order Detials
      </h3>
      <div className="bg-white rounded-[22px] p-3">
        <div
          className={
            "grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "
          }
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-base md:text-base my-2 ml-1">
              ID
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter company name"
            />
          </div>
          {/* Position */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base my-2 ml-1">
              Customer Name
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter company email"
            />
          </div>

          {/* Company Name (Optional) */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base my-2 ml-1">
              Mobile No.
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Confirm your password"
            />
          </div>
          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base my-2 ml-1">
              Order Date
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter company email"
            />
          </div>
          {/* Mobile */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base my-2 ml-1">
              Shipping Address
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Confirm your password"
            />
          </div>
          {/* City (Input instead of Select) */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base my-2 ml-1">
              ID
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter your city"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base my-2 ml-1">
              Quantity
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter your city"
            />
          </div>
          {/* Additional Comments */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base my-2 ml-1">
              Price
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter your city"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base my-2 ml-1">
              Payment Status
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter your city"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base my-2 ml-1">
              Payment Method
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter your city"
            />
          </div>
          {/* Additional Comments */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-base my-2 ml-1">
              Order Status
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-11px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter your city"
            />
          </div>
        </div>
        <div className="flex flex-row justify-end mt-3 mb-20">
          {" "}
          <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-between items-center w-36 px-4 py-2 border border-blue-500 rounded-full text-sm font-medium focus:outline-none"
            >
              {selected}
              <ChevronDown size={16} className="ml-2 text-gray-600" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div
                style={{ boxShadow: " 0px 4px 4px 0px #00000040" }}
                className="absolute z-10 mt-1 w-36 bg-white rounded-[22px] ring-1 ring-[#E1E1E1] ring-opacity-5"
              >
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-4 py-2 text-sm text-[#676767] hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
