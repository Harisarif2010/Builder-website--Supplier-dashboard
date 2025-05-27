"use client";
import Image from "next/image";
import React, { useState } from "react";
import { QuotationModal } from "../Modals/QuotationModal";

const BrandCard = ({ title, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-[#F1F3FC] rounded-[35px] p-4 flex flex-col items-center border border-[#A5A5A5] hover:shadow-lg transition w-full h-full">
        <h3 className="font-bold text-center text-lg sm:text-xl md:text-2xl mb-3 text-[#1C1C1C]">
          {title}
        </h3>

        <div className="rounded-[22px] p-4 w-full flex items-center justify-center mb-4 ">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <button
          className="mt-auto  bg-[var(--primary-blue)] text-white text-sm sm:text-[14px] px-4 py-2 rounded-3xl w-full sm:w-1/2 h-12 sm:h-14"
          onClick={openModal}
        >
          Request Quotation now
        </button>
      </div>

      <QuotationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default BrandCard;
