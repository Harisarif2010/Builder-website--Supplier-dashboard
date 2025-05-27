import { poppins } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const Statistics = () => {
  return (
    <div>
      {" "}
      <h3 className="text-[#3B4758] text-2xl font-bold  px-4 py-1">
        Dashboard
      </h3>
      <div className={`${poppins.variable} bg-white rounded-[20px] px-6 py-4`}>
        <div className="flex justify-between">
          <div>
            <h3 className="text-[#05004E] text-[20px] font-semibold">
              Today’s Sales
            </h3>
            <span className="text-[#737791] text-base font-normal my-3">
              Sales Summery
            </span>
          </div>
          <div className="flex justify-center items-center border border-[#C3D3E2] rounded-lg h-10 gap-x-2 px-3 cursor-pointer">
            <Image src="/icons/union.png" width={12} height={12} alt="export" />
            <span className="text-[#0F3659] text-[14px]">Export</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
