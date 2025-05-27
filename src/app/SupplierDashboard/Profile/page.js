import Image from "next/image";
import React from "react";
import { Pen } from "lucide-react";
import { roboto } from "@/app/fonts";

const EmployeePermission = () => {
  return (
    <div className={roboto.className}>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">Profile</h3>
      <div className="bg-white rounded-[22px] p-3">
        <div
          className={
            "grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 "
          }
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Supplier ID
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter company name"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Supplier Name
            </label>
            <div className="relative w-full">
              <input
                type="email"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter company email"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Email
            </label>
            <div className="relative w-full">
              <input
                type="email"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter company email"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Mobile No
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter company email"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Subscription Plan
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter Plan"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          {/* Company Name (Optional) */}
          {/* Mobile */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Position
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Confirm your password"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Tax Number
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter Tax Number"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              CR Number
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter your city"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-[#000000] font-bold text-[13px] mb-2 ml-1">
              CR File
            </label>
            <label className="border  border-[var(--secondary-border)] rounded-[11px] h-36 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
              <input type="file" className="hidden" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/icons/upload.svg"
                  width={30}
                  height={30}
                  alt="Upload"
                  className="border rounded-full p-2 bg-[#2B44E11C]"
                />
              </div>
            </label>
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-[#000000] font-bold text-[13px] mb-2 ml-1">
              Tax Registration Certificates
            </label>
            <label className="border  border-[var(--secondary-border)] rounded-[11px] h-36 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
              <input type="file" className="hidden" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/icons/upload.svg"
                  width={30}
                  height={30}
                  alt="Upload"
                  className="border rounded-full p-2 bg-[#2B44E11C]"
                />
              </div>
            </label>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs  sm:text-xl md:text-[13px] mb-2 ml-1">
              Mission Statement
            </label>
            <textarea
              className="w-full border  border-[var(--secondary-border)] rounded-[11px] h-28 sm:h-20 md:h-36 px-4 sm:px-5 py-2 text-sm sm:text-base placeholder-[#989898] resize-none"
              placeholder="Type here..."
            />
          </div>
        </div>
        <h3 className="font-bold text-[22px] my-3">Bank Details</h3>
        <div
          className={
            "grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  my-5"
          }
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Bank Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter Bank Name"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Bank Account Number
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter Bank Account"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="flex flex-row justify-end items-end my-4">
        <button className=" bg-[var(--primary-blue)] text-white text-[24px] font-semibold  rounded-[26px] h-14 flex justify-center items-center px-5">
          Send
        </button>
      </div>
    </div>
  );
};

export default EmployeePermission;
