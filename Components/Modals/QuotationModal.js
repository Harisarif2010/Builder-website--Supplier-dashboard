"use client";

import Image from "next/image";
import { X } from "lucide-react";

// Modal component
export const QuotationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-6 top-6"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-6 text-center">
          Submit Quotation Request
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center border border-[#626262]">
            <div className="  mb-3">
              <Image
                src="/images/pencil.svg"
                width={77}
                height={77}
                alt="pencil"
              />
            </div>
            <span className="font-medium mb-1">Manual Entry</span>
            <span className="text-sm  text-[#686868]">
              Fill out product details
            </span>
          </button>

          <button className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center border border-[#626262]">
            <div className=" mb-3">
              <Image
                src="/images/upload.png"
                width={77}
                height={77}
                alt="upload"
              />
            </div>
            <span className="font-medium mb-1">Upload File</span>
            <span className="text-sm text-[#686868]">Attach your RFQ</span>
          </button>
        </div>
      </div>
    </div>
  );
};
