"use client";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

export const DeclineModal = ({ isOpen, onClose }) => {
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
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative my-5 h-64">
        <button
          onClick={onClose}
          className="absolute right-6 top-2 "
          aria-label="Close modal"
        >
          <X size={30} />
        </button>

        <div className="flex justify-center">
          <div className="relative inline-block w-full  ">
            {/* Dropdown Button */}
            <span className="text-[#000000] text-base font-medium">
              Reason For Declining
            </span>
            <button
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center w-4/5 px-4 py-2 border  border-[var(--primary-border)] rounded-[11px] text-sm font-medium focus:outline-none"
            >
              {selected}
              <ChevronDown size={25} className="ml-2 text-[#646464]" />
            </button>

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute z-10 mt-1 w-4/5 bg-white rounded-[22px] ring-1 ring-[#E1E1E1] ring-opacity-5 ">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-4 py-2 text-sm text-[#4F4F4F] hover:bg-gray-100 cursor-pointer border-b border-[#E0E0E0] last:border-b-0"
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
