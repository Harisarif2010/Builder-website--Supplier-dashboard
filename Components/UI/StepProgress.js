import Image from "next/image";
import React from "react";

const StepProgress = ({ step1Icon, step2Icon, verified }) => {
  return (
    <div className="flex items-center justify-center  my-10">
      {/* Step 1 */}
      <div className="flex items-center justify-center my-10">
        {/* Step 1 */}
        <div className="flex flex-col items-center space-y-4">
          {" "}
          {/* Increased space-y to ensure consistency */}
          <div className="w-12 h-12 flex items-center justify-center">
            <Image src={step1Icon} alt="Basic Info" width={68} height={68} />
          </div>
          <span className=" text-[var(--primary-blue)] font-medium text-[22px]">
            Basic Information
          </span>
        </div>
      </div>
      {/* Dotted Line */}
      <div className="mb-8">
        <Image
          src={`${verified ? "/images/filledline.png" : "/images/line.svg"}`}
          alt="Basic Info"
          width={368}
          height={11}
        />
      </div>
      {/* Step 2 */}
      <div className="flex flex-col items-center space-y-4">
        {" "}
        {/* Increased space-y here as well */}
        <div className="w-12 h-12 flex items-center justify-center">
          <Image src={step2Icon} alt="Verification" width={68} height={68} />
        </div>
        <span
          className={`${
            verified
              ? " text-[var(--primary-blue)] font-medium text-[22px]"
              : "text-[#8B8B8B] text-[22px] font-medium"
          }`}
        >
          Verification & Confirmation
        </span>
      </div>
    </div>
  );
};

export default StepProgress;
