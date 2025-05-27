import React from "react";
import { employeePermissions } from "@/app/data";
import { Pencil, Trash2 } from "lucide-react";
import { poppins } from "@/app/fonts";

const SupplierProfile = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-1 pb-4">
        Supplier Profile
      </h3>
      <div className="px-3">
        <div className="bg-white p-6 rounded-[22px]  ">
          <h2 className="text-[22px] font-bold mb-4">Employee Permission</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-[#000000]">
              <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] md:text-lg text-base font-medium">
                <tr>
                  <th className="py-2 px-4 font-medium">Employee Name</th>
                  <th className="py-2 px-4 font-medium">Role</th>
                  <th className="py-2 px-4 font-medium">Permission</th>
                  <th className="py-2 px-4 font-medium">Status</th>
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
                    <td className="py-3 px-4 flex items-center gap-3">
                      <Pencil
                        size={18}
                        className="text-[#3E3E3E] cursor-pointer"
                      />
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
      <div className="flex flex-row  justify-center md:justify-end items-end my-4">
        <button
          className={` ${poppins.variable}  bg-[var(--primary-blue)] text-white text-[24px] font-medium  rounded-[26px] h-18 flex justify-center items-center px-2`}
        >
          Add Employee
        </button>
      </div>
    </>
  );
};

export default SupplierProfile;
