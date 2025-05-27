import React from "react";
import { inquiryRequests } from "@/app/data";
import { Trash2, Pencil, File, FileText } from "lucide-react";

const Inquiry = () => {
  return (
    <div className="px-3">
      <div className="bg-white p-6 rounded-[22px]  ">
        <h2 className="text-[22px] font-bold mb-4">Inquiry Request Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] md:text-lg text-base font-medium">
              <tr>
                <th className="py-2 px-4 font-medium">ID</th>
                <th className="py-2 px-4 font-medium ">Customer Name</th>
                <th className="py-2 px-4 font-medium">Upload File</th>
                <th className="py-2 px-4 font-medium">Product Name</th>
                <th className="py-2 px-4 font-medium">Status</th>
                <th className="py-2 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="text-base md:text-lg  font-medium">
              {inquiryRequests.map((row, idx) => (
                <tr key={idx} className="text-[#181818]">
                  <td className="py-6 px-4">{row.id}</td>
                  <td className="py-3 px-4">{row.customerName}</td>
                  <td className="py-3 px-4">{row.uploadFile}</td>
                  <td className="py-3 px-4 font-medium">{row.productName}</td>
                  <td className="py-3 px-4 font-medium">{row.status}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <FileText className="text-[#006C35]" />
                      <Trash2
                        size={18}
                        className="text-[#9A2B2B] cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
