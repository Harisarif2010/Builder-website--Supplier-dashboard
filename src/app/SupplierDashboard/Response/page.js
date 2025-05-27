"use client";
import React from "react";
import { orders } from "@/app/data";
import { roboto } from "@/app/fonts";
import "../../../app/globals.css";
import { ChevronDown, Image } from "lucide-react";
import { useState } from "react";

const Response = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select");
  const options = [
    "Out of Stock",
    "Pricing Issue",
    "Unable to Meet Delivery Deadline",
    "Others",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">Orders</h3>

      {/* Orders Table */}
      <div className="bg-white p-6 rounded-[22px] shadow-lg my-3">
        <h2 className="text-[17px] font-bold mb-4">Orders Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-[11px] font-medium">
              <tr>
                <th className="py-2 px-4 whitespace-nowrap">Request ID</th>
                <th className="py-2 px-4 whitespace-nowrap">Product Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Unit Price</th>
                <th className="py-2 px-4 whitespace-nowrap">Quantity</th>
                <th className="py-2 px-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[13px] font-medium">
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-4 px-4">{order.name}</td>
                  <td className="py-4 px-4">{order.name}</td>
                  <td className="py-4 px-4">{order.status}</td>
                  <td className="py-4 px-4">{order.paymentStatus}</td>
                  <td className="py-3 px-4">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Response Form */}
      <div className="bg-white rounded-[22px] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-black font-bold text-sm sm:text-base mb-2">
              Delivery Time Estimated
            </label>
            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-11 px-4 text-sm placeholder-[#989898]"
              placeholder="Enter Name"
            />
          </div>
          {/* Reason Dropdown */}
          <div className="relative ">
            <label className="block text-black font-bold text-sm sm:text-base mb-2">
              Reason For Declining
            </label>
            <button
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center w-full px-4 py-2 border  border-[var(--primary-border)] rounded-[11px] text-sm font-boldfocus:outline-none"
            >
              {selected}
              <ChevronDown size={20} className="ml-2 text-[#646464]" />
            </button>
            {open && (
              <div className="absolute z-10 mt-1 w-full bg-white rounded-[22px] ring-1 ring-[#E1E1E1] ring-opacity-5">
                {options.map((option, i) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`px-4 py-2 text-sm text-[#4F4F4F] hover:bg-gray-100 cursor-pointer border-b border-[#E0E0E0] ${
                      i === options.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <label className="block text-black font-bold text-sm sm:text-base mb-2">
              Upload File
            </label>
            <label className="border  border-[var(--primary-border)] rounded-[11px] h-11 px-4 cursor-pointer flex flex-col  gap-4  bg-white hover:bg-gray-50 transition">
              <input type="file" className="hidden" />
              <div className="flex flex-row items-center justify-start">
                <Image
                  alt="aas"
                  src="/icons/inquiry.png"
                  width={36}
                  height={36}
                />
                <span className="text-sm  text-[var(--primary-blue)] font-bold">
                  Attach File
                </span>
              </div>
            </label>
          </div>
          <div>
            <label className="block text-black font-bold text-sm sm:text-base mb-2">
              Addditional Notes
            </label>
            <textarea
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-18 sm:h-20 md:h-25 px-4 sm:px-5 py-2 text-sm sm:text-base placeholder-[#989898] resize-none"
              placeholder="Type here..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-10">
          <button className=" bg-[var(--primary-blue)] text-white text-[16px] font-bold px-6 py-3 rounded-[26px]">
            Submit Response
          </button>
        </div>
      </div>
    </>
  );
};

export default Response;
