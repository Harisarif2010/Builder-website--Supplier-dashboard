import React from "react";

const PaymentButton = () => {
  return (
    <div className="w-4/5 border border-[#909090] rounded-[22px] p-3 mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <span className="text-[#000000] font-bold text-[22px] sm:text-[26px]">
          1 Item
        </span>
        <span className="text-[#000000] font-bold text-[22px] sm:text-[26px]">
          Order Total: $ 200
        </span>
      </div>

      <div className="flex justify-center mt-3">
        <button className="w-full sm:w-4/5 bg-[var(--primary-blue)] text-white py-2 rounded-[35px] text-[18px] sm:text-[20px] font-semibold">
          Payment Confirm
        </button>
      </div>
    </div>
  );
};

export default PaymentButton;
