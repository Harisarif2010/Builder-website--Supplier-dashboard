"use client";
import React, { useState } from "react";

import { orders } from "@/app/data";
import { Pencil, Trash2, Eye } from "lucide-react";
import { poppins } from "@/app/fonts";
import { useRouter } from "next//navigation";
import { DeleteModal } from "../../../../Components/Modals/DeleteModal";
import Image from "next/image";

const ProductManagment = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigate = () => {
    router.push("/SupplierDashboard/AddProduct");
  };
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
        Product Managment
      </h3>
      <div className="bg-white p-6 rounded-[22px] shadow-lg my-3">
        <h2 className="text-[17px] font-bold mb-4">Products List</h2>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-[11px] font-medium">
              <tr>
                <th className="py-2 px-4 whitespace-nowrap">Product Image</th>
                <th className="py-2 px-4 whitespace-nowrap">Product Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Price</th>
                <th className="py-2 px-4 whitespace-nowrap">
                  Stock Availability
                </th>
                <th className="py-2 px-4 whitespace-nowrap">Status</th>
                <th className="py-2 px-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>

            <tbody className="text-[13px] font-medium">
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-4 px-4 whitespace-nowrap">
                    <Image
                      src="/images/pipes.png"
                      width={50}
                      height={50}
                      alt="product"
                    />
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">{order.name}</td>
                  <td className="py-4 px-4 whitespace-nowrap">{order.date}</td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.status}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.paymentStatus}
                  </td>
                  <td className="py-3 px-4 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Pencil
                        className=" text-[var(--primary-blue)]"
                        onClick={() =>
                          router.push("/SupplierDashboard/EditProdcut")
                        }
                      />
                      <Trash2
                        size={18}
                        className="text-[#9A2B2B] cursor-pointer"
                        onClick={openModal}
                      />
                      <Eye className="text-[#000000]" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <DeleteModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="flex flex-row  justify-center md:justify-end items-end my-4 gap-x-3">
        <button
          onClick={navigate}
          className={` ${poppins.variable}  bg-[var(--primary-blue)] text-white text-[13px] font-medium  rounded-[22px] h-11 flex justify-center items-center px-3 cursor-poniter`}
        >
          Add New Product
        </button>
      </div>
    </>
  );
};

export default ProductManagment;
