"use client";
import { Trash2, ShoppingCart, Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  const activeOrders = [
    {
      id: "1022",
      name: "Maxima Smalls",
      productName: "Steel",
      quantity: "1 Ton",
      category: "Construction",
      sizeColour: "10mm, 12mm (Silver)",
      city: "Riyadh",
      status: "in progress",
      timestamp: "4 minutes ago",
    },
    {
      id: "1023",
      name: "Andrew Robocop",
      productName: "Wood",
      quantity: "1 Ton",
      category: "Furniture",
      sizeColour: "6x6, 8x8 (Brown, White)",
      city: "Makkah",
      status: "delivered",
      timestamp: "4 minutes ago",
    },
    {
      id: "1024",
      name: "Mark Smith",
      productName: "Sheets",
      quantity: "100 Items",
      category: "Decoration",
      sizeColour: "6x6, 8x8 (Brown, White)",
      city: "Makkah",
      status: "in progress",
      timestamp: "4 minutes ago",
    },
    {
      id: "1025",
      name: "John Doe",
      productName: "Cement",
      quantity: "55 Sacks",
      category: "Building material",
      sizeColour: "40 kg, Grey",
      city: "Riyadh",
      status: "delivered",
      timestamp: "4 minutes ago",
    },
  ];

  return (
    <div>
      <div className="flex justify-between px-2 py-1">
        {" "}
        <h3 className="text-[#3B4758] text-2xl font-bold  py-1">Dashboard</h3>
        <div className="flex  gap-x-3">
          {/* Back Button */}

          <button
            className="flex items-center justify-center bg-[var(--primary-blue)] text-white text-base font-semibold px-6 py-3 rounded-[22px] h-12"
            onClick={() => {
              router.push("/SupplierDashboard/Statistics");
            }}
          >
            View Statistics
          </button>
          <button
            onClick={() => {
              router.push("/SupplierDashboard/InviteCustomer");
            }}
            className="flex items-center justify-center  text-[var(--primary-blue)] text-base font-semibold px-3 py-3 border border-[#354EF3] rounded-[22px] h-12 cursor-pointer"
          >
            Invite New Customer
          </button>
        </div>
      </div>
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-4 px-4">
        <div
          className="bg-white rounded-[13px] px-3"
          style={{ boxShadow: "0px 4px 20px 0px #AAA9B81A" }}
        >
          <div className="flex justify-between pb-3 pt-6 px-2">
            <h3 className="text-[#586A84] text-[14px] font-semibold">
              Total Revenue
            </h3>
            <div className="bg-[#36DA78] flex justify-center items-center rounded-md h-9 w-9">
              {" "}
              <Image
                src="/icons/dollar.png"
                alt="Pet Profile icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold  px-2">
            $ 3,503.26
          </h2>
          <p className="text-[#0A7D5A] font-normal text-[12px] py-3  px-2">
            +6.50%{" "}
            <span className="text-[#586A84] font-normal text-[12px]">
              since last month
            </span>
          </p>
        </div>
        <div
          className="bg-white rounded-[13px] px-3"
          style={{ boxShadow: "0px 4px 20px 0px #AAA9B81A" }}
        >
          <div className="flex justify-between pb-3 pt-6  px-2">
            <h3 className="text-[#586A84] text-[14px] font-semibold">
              Customers
            </h3>
            <div className="bg-[#FF59EE] flex justify-center items-center rounded-md h-9 w-9">
              {" "}
              <Image
                src="/icons/users.png"
                alt="Pet Profile icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold  px-2">34</h2>
          <p className="text-[#0A7D5A] font-normal text-[12px] py-3  px-2">
            -2.56%
            <span className="text-[#586A84] font-normal text-[12px]">
              since last month
            </span>
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-[13px]  my-3">
        <h2 className="text-[17px] font-bold mb-4">Active Orders</h2>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#586A84] text-[11px] font-medium">
              <tr>
                <th className="py-2 px-4 whitespace-nowrap"> ID</th>
                <th className="py-2 px-4 whitespace-nowrap">Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Product Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Quantity</th>
                <th className="py-2 px-4 whitespace-nowrap">Category</th>
                <th className="py-2 px-4 whitespace-nowrap">Size/Colour</th>
                <th className="py-2 px-4 whitespace-nowrap">City</th>
                <th className="py-2 px-4 whitespace-nowrap">Status</th>
              </tr>
            </thead>

            <tbody className="text-[13px] font-medium">
              {activeOrders.map((order, idx) => (
                <tr key={order.id} className=" text-sm">
                  <td className="whitespace-nowrap px-4 py-3 font-bold text-[#586A84]">
                    {order.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    <div>
                      <div className="font-medium text-[13px] text-[#3B4758]">
                        {order.name}
                      </div>
                      <div className="text-xs text-[#586A84] font-light">
                        {order.timestamp}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    {order.productName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    {order.quantity}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    {order.category}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    {order.sizeColour}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    {order.city}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {order.status === "in progress" ? (
                      <div className="flex justify-center rounded-lg bg-[#FFF2DA] gap-x-1  ">
                        <Image
                          src="/icons/progress.svg"
                          width={11}
                          height={11}
                          alt="icons"
                        />
                        <span className=" text-[#FFAA04] border border-[#FFF2DA] ">
                          In Progress
                        </span>
                      </div>
                    ) : (
                      <div className="flex justify-center rounded-lg bg-[#F11911] gap-x-1  ">
                        <Image
                          src="/icons/icon.svg"
                          width={11}
                          height={11}
                          alt="icons"
                        />
                        <span className=" text-[#F4E7CC] border border-[#F11911] ">
                          Delayed
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-6 rounded-[13px]  my-3">
        <h2 className="text-[17px] font-bold mb-4">
          Pending Quotation Requests
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#586A84] text-[11px] font-medium">
              <tr>
                <th className="py-2 px-4 whitespace-nowrap"> ID</th>
                <th className="py-2 px-4 whitespace-nowrap">Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Product Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Quantity</th>
                <th className="py-2 px-4 whitespace-nowrap">Category</th>
                <th className="py-2 px-4 whitespace-nowrap">Size/Colour</th>
                <th className="py-2 px-4 whitespace-nowrap">City</th>
                <th className="py-2 px-4 whitespace-nowrap">Status</th>
                <th className="py-2 px-4 whitespace-nowrap">Action</th>
              </tr>
            </thead>

            <tbody className="text-[13px] font-medium">
              {activeOrders.map((order, idx) => (
                <tr key={order.id} className=" text-sm">
                  <td className="whitespace-nowrap px-4 py-3 font-bold text-[#586A84]">
                    {order.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    <div>
                      <div className="font-medium text-[13px] text-[#3B4758]">
                        {order.name}
                      </div>
                      <div className="text-xs text-[#586A84] font-light">
                        {order.timestamp}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    {order.productName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    {order.quantity}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    {order.category}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    {order.sizeColour}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[#586A84]">
                    {order.city}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {order.status === "in progress" ? (
                      <div className="flex justify-center rounded-lg bg-[#FFF2DA] gap-x-1  ">
                        <Image
                          src="/icons/progress.svg"
                          width={11}
                          height={11}
                          alt="icons"
                        />
                        <span className=" text-[#FFAA04] border border-[#FFF2DA] ">
                          In Progress
                        </span>
                      </div>
                    ) : (
                      <div className="flex justify-center rounded-lg bg-[#F11911] gap-x-1  ">
                        <Image
                          alt="icon"
                          src="/icons/icon.svg"
                          width={11}
                          height={11}
                        />
                        <span className=" text-[#F4E7CC] border border-[#F11911] ">
                          Delayed
                        </span>
                      </div>
                    )}
                  </td>

                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/icons/check.svg"
                        width={12}
                        height={12}
                        alt="check"
                      />
                      <Trash2
                        size={12}
                        className="text-[#9A2B2B] cursor-pointer"
                      />
                      <ShoppingCart
                        size={12}
                        className="text-[#1E1E1E] cursor-pointer"
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

export default page;
