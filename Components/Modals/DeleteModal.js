"use client";

export const DeleteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[13px] w-full max-w-md p-6 relative">
        <h2 className="text-base font-medium mb-6 text-center text-black">
          Do you want to delete the product?
        </h2>

        <div className="flex justify-center items-center gap-x-4">
          <button className="bg-[var(--primary-blue)] rounded-xl flex justify-center items-center text-center h-11 w-1/4">
            <span className="text-lg text-[#FFFFFF]">Yes</span>
          </button>
          <button
            className="bg-[#9D9D9D] rounded-xl flex justify-center items-center text-center h-11 w-1/4"
            onClick={onClose}
          >
            <span className="text-lg text-[#FFFFFF]">No</span>
          </button>
        </div>
      </div>
    </div>
  );
};
