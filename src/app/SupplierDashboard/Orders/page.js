"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { orders } from "@/app/data";
import { roboto } from "@/app/fonts";
const Orders = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/SupplierDashboard/AddProduct");
  };
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">Orders</h3>
      <div className="bg-white p-6 rounded-[22px] shadow-lg my-3">
        <h2 className="text-[17px] font-bold mb-4">Orders Table</h2>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-[11px] font-medium">
              <tr>
                <th className="py-2 px-4 whitespace-nowrap">Order ID</th>
                <th className="py-2 px-4 whitespace-nowrap">Expected Date</th>
                <th className="py-2 px-4 whitespace-nowrap">Supplier Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Status</th>
                <th className="py-2 px-4 whitespace-nowrap">Actions</th>
                <th className="py-2 px-4 whitespace-nowrap">Delivery Note</th>
              </tr>
            </thead>

            <tbody className="text-[13px] font-medium">
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-4 px-4 whitespace-nowrap">{order.name}</td>
                  <td className="py-4 px-4 whitespace-nowrap">{order.date}</td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.supplier}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.status}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.paymentStatus}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap  text-[var(--primary-blue)]">
                    View Details
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-row  justify-center md:justify-end items-end my-4">
        <button
          className={` ${roboto.variable}  bg-[var(--primary-blue)] text-white text-[13px] font-medium  rounded-[22px] h-14 flex justify-center items-center px-3`}
          onClick={navigate}
        >
          Add New Product
        </button>
      </div>
    </>
  );
};

export default Orders;
