"use client";
import Image from "next/image";
import React, { useState } from "react";
import { QuotationModal } from "../Modals/QuotationModal";

const ProductCard = ({ title, image, description, prodcut }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      {" "}
      <div className="bg-[#F1F3FC] rounded-[35px] p-2 flex flex-col  border border-[#B0B0B0]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="mx-auto rounded-xl"
        />
        <h3 className="font-semibold text-xl text-[#1C1C1C] text-left mb-2">
          {title}
        </h3>
        <p className="text-base font-medium text-[#777777] mb-4">
          {description}
        </p>
        {prodcut && (
          <button
            className="mt-auto  bg-[var(--primary-blue)] text-white text-lg px-2 py-2 rounded-[35px] h-14 w-2/3 mx-auto cursor-pointer "
            onClick={openModal}
          >
            Request a Quote
          </button>
        )}
      </div>
      <QuotationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ProductCard;
