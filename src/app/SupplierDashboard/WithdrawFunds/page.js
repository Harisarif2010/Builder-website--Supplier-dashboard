"use client";
import { roboto } from "@/app/fonts";
import React, { useState } from "react";
import { WithdrawModal } from "../../../../Components/Modals/WithdrawModal";

const WithdrawFunds = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 flex flex-row items-center">
        Withdraw Funds
      </h3>
      <div className="px-5">
        {" "}
        <div
          className={`${roboto.variable} bg-white rounded-[13px] p-2  w-full`}
        >
          <div className="w-full border-b border-[#DADADA] px-3 ">
            <h3 className="text-[20px] text-[#272727] font-medium py-3">
              Current Amount Available for Withdrawal
            </h3>
            <span className="text-[20px] text-[#949494] font-medium py-8">
              $200
            </span>
          </div>
          <div className="px-3">
            <span className="text-lg text-[#272727] font-medium py-5 ">
              Select Withdrawal Method
            </span>

            <div className="w-full flex flex-row items-center  justify-center gap-4 my-5 px-12 ">
              <div className="w-2/5 flex items-center border border-[#ADADAD] rounded-[13px] p-4 h-12 cursor-pointer">
                <label className="flex items-center gap-2 text-[#000000] text-[22px] font-medium">
                  <input type="radio" name="payment_option" value="bank" />
                  Bank Transfer
                </label>
              </div>

              <div className="w-2/5 flex items-center border border-[#ADADAD] rounded-[13px] p-4 h-12 cursor-pointer">
                <label className="flex items-center gap-2 text-[#000000] text-[22px] font-medium">
                  <input type="radio" name="payment_option" value="card" />
                  Credit Card
                </label>
              </div>

              <div className=" w-2/5 flex items-center border border-[#ADADAD] rounded-[13px] p-4 h-12 cursor-pointer">
                <label className="flex items-center gap-2 text-[#000000] text-[22px] font-medium">
                  <input type="radio" name="payment_option" value="later" />
                  Binaya Pay Later
                </label>
              </div>
            </div>

            <div className=" w-full flex  justify-end my-3 ">
              {" "}
              <div className="flex  gap-x-3">
                {/* Back Button */}
                <button className="bg-[#8F8F8F] text-white text-base font-medium flex justify-center items-center px-6 py-5 rounded-[22px] h-14 cursor-pointer">
                  Cancel
                </button>
                <button
                  className="bg-[var(--green)] text-[white] text-base  flex justify-center items-center  px-2 py-5   font-medium border border-[#949494] rounded-[22px] h-14 cursor-pointer"
                  onClick={openModal}
                >
                  Withdraw Funds
                </button>

                {/* Submit Button */}
              </div>
              <WithdrawModal isOpen={isOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawFunds;
