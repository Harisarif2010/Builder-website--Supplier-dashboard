import React from "react";

const InviteCustomer = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 flex flex-row items-center ">
        Invite New Customer
      </h3>
      <div className="bg-white rounded-[22px] p-5">
        <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
              Customer Name
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter Customer Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
              Company Name
            </label>

            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter your company"
            />
          </div>
          {/* Company Name (Optional) */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
              Email
            </label>

            <input
              type="email"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter your Email"
            />
          </div>
          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
              Mobile No
            </label>
            <input
              type="text"
              className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter Phone Number"
            />
          </div>
          {/* Mobile */}

          {/* City (Input instead of Select) */}
        </div>
        <div className="flex flex-row justify-end mt-14">
          <button className="bg-[var(--secondary-blue)] text-white text-[16px] font-bold px-3 py-3 rounded-[22px] h-12 w-38">
            Send Invite
          </button>
        </div>
      </div>
    </>
  );
};

export default InviteCustomer;
