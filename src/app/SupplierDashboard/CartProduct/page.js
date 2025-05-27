import { employeePermissions } from "@/app/data";
import { poppins } from "@/app/fonts";
import { Trash2 } from "lucide-react";

import React from "react";

const CartProduct = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-1 pb-4">
        Add to Cart Product
      </h3>
      <div className="px-3">
        <div className="bg-white p-6 rounded-[22px]  ">
          <h2 className="text-[22px] font-bold mb-4  text-black">Cart Items</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-[#000000]">
              <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] md:text-lg text-base font-medium">
                <tr>
                  <th className="py-2 px-4 font-medium">Product Name</th>
                  <th className="py-2 px-4 font-medium">QUantity</th>
                  <th className="py-2 px-4 font-medium">Unit Price</th>
                  <th className="py-2 px-4 font-medium">Total Price</th>
                  <th className="py-2 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="text-base md:text-lg  font-medium">
                {employeePermissions.map((row, idx) => (
                  <tr key={idx} className="text-[#181818]">
                    <td className="py-6 px-4">{row.name}</td>
                    <td className="py-3 px-4">{row.role}</td>
                    <td className="py-3 px-4">{row.permissions}</td>
                    <td className="py-3 px-4 font-medium">{row.status}</td>
                    <td className=" px-4 py-3">
                      <Trash2
                        size={18}
                        className="text-[#9A2B2B] cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="px-3 my-3">
        <div className="bg-white p-6 rounded-[22px]  ">
          <h2 className="text-[22px] font-bold mb-1  text-black">
            Payment Method Selection
          </h2>
          <div className={`${poppins.variable} w-full`}>
            <div className="w-full cursor-pointer">
              <label className="flex items-center gap-2 text-[#000000] text-[22px] font-medium">
                <input type="radio" name="payment_option" value="bank" />
                Bank Transfer
              </label>
            </div>

            <div className="w-full   cursor-pointer">
              <label className="flex items-center gap-2 text-[#000000] text-[22px] font-medium">
                <input type="radio" name="payment_option" value="card" />
                Pay me with Credit Card
              </label>
            </div>

            <div className="w-full cursor-pointer">
              <label className="flex items-center gap-2 text-[#000000] text-[22px] font-medium">
                <input type="radio" name="payment_option" value="later" />
                Binaya Pay Later
              </label>
            </div>
          </div>
          <div className={`${poppins.variable} px-2 text-[20px] font-bold`}>
            <h2 className="text-black">Order Summary:</h2>
            <ul className="list-disc pl-5">
              <li>Subtotal: $460.00</li>
              <li>Tax: $20.00</li>
              <li>Total: $480.00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-full flex  justify-end my-3 ">
        {" "}
        <div className="flex  gap-x-3">
          {/* Back Button */}
          <button className="bg-[#8F8F8F] text-white text-[20px] font-medium flex justify-center items-center px-4 py-5 rounded-[20px] h-8">
            Cancel
          </button>
          <button className="bg-[var(--green)] text-[white] text-[20px]  flex justify-center items-center  px-4 py-5   font-medium border border-[#949494] rounded-[20px] h-8">
            Proceed
          </button>

          {/* Submit Button */}
        </div>
      </div>
    </>
  );
};

export default CartProduct;
