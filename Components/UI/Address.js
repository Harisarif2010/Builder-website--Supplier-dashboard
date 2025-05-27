import React from "react";

const Address = () => {
  return (
    <div className="text-[#000000] flex flex-col gap-4">
      <h2 className="text-[28px] sm:text-[31px] font-medium">
        Billing Address
      </h2>

      <div className="flex flex-col gap-2 text-sm">
        <label className="flex items-center gap-2 text-[#000000] text-[22px] sm:text-[26px] font-medium">
          <input type="radio" id="same" name="billing_option" value="same" />
          Same as Shipping Address
        </label>

        <label className="flex items-center gap-2 text-[#000000] text-[22px] sm:text-[26px] font-medium">
          <input
            type="radio"
            id="different"
            name="billing_option"
            value="different"
          />
          Different Address
        </label>
      </div>
    </div>
  );
};

export default Address;
