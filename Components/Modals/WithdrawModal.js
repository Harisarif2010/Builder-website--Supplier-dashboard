"use client";

import Image from "next/image";
import { X, Check } from "lucide-react";

// Modal component
export const WithdrawModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative h-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4"
          aria-label="Close modal"
        >
          <X size={24} className="cursor-pointer" />
        </button>

        {/* Green border circle with check icon */}
        <div className="flex justify-center items-center mb-4">
          <div className="border-4 border-[#14AE5C] rounded-full p-3">
            <Check size={50} className="text-[#14AE5C]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-black font-semibold text-center text-[22px] my-3">
          Withdrawal Successfully
        </h3>

        {/* Message */}
        <p className="text-black font-normal text-center text-[19px] my-3">
          Your payment has been withdrawn successfully.
        </p>
      </div>
    </div>
  );
};
