"use client";
import React, { useState } from "react";
import { DeclineModal } from "../../../../Components/Modals/DeclineModal";

const QuotationRequest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 flex flex-row items-center ">
        Invite New Customer
      </h3>
      <div className="bg-white rounded-[22px] p-5">
        <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-xs sm:text-base md:text-lg mb-2 ml-1">
              ID
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium text-xs sm:text-base md:text-lg mb-2 ml-1">
              Product
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
            />
          </div>
          {/* Company Name (Optional) */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-xs sm:text-base md:text-lg mb-2 ml-1">
              Expected Delivery Date
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter your Email"
            />
          </div>
          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-xs sm:text-base md:text-lg mb-2 ml-1">
              Quantity
            </label>
            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
            />
          </div>
          {/* Mobile */}

          {/* City (Input instead of Select) */}
        </div>
        <div className=" w-full flex  justify-end ">
          {" "}
          <div className="flex   mt-10 gap-x-3">
            {/* Back Button */}
            <button
              className="bg-[#BC3C1B] text-white text-[20px] font-semibold px-6 py-3 rounded-[22px] h-14"
              onClick={openModal}
            >
              Decline
            </button>
            <button className="bg-[#0B6723] text-white text-[20px] font-semibold px-6 py-3  rounded-[22px] h-14">
              Confirm
            </button>

            {/* Submit Button */}
          </div>
        </div>

        <DeclineModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default QuotationRequest;
