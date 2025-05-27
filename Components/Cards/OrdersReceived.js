import Image from "next/image";
import React from "react";

const OrdersReceived = ({ type = "order" }) => {
  const isQuotation = type === "quotation";

  const title = isQuotation ? "New Quotation Received" : "New Orders Received";

  const orders = [
    {
      id: 2027,
      name: "Mark Smith",
      time: "1h ago",
      total: "$1500",
    },
    {
      id: 2028,
      name: "John Doe",
      time: "2h ago",
      total: "$1500",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="w-full flex justify-between items-center border-b border-[#CACACA]  pb-4 mb-4  ">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="bg-[var(--primary-blue)] flex justify-center items-center rounded-md h-9 w-9">
          {" "}
          <Image
            src={isQuotation ? "/icons/quotation.svg" : "/icons/whitecube.png"}
            alt="Pet Profile icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </div>

      {/* Orders / Quotations List */}
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex justify-between items-center border-b border-[#E3E3E3] py-4 last:border-b-0"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/icons/cube.png"
              width={22}
              height={22}
              alt="cube icon"
            />
            <div>
              <div className="font-semibold">ID: {order.id}</div>
              <div className="text-sm text-[var(--grey-text)]">
                {order.name} ({order.time})
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold mb-2">Total : {order.total}</div>
            <div className="flex gap-2 justify-end">
              <button className="bg-[var(--primary-blue)] h-8 text-white px-6 py-1 rounded-full text-[8px]">
                Chat
              </button>
              <button className="bg-[var(--green)] text-white px-4 py-1 rounded-full  text-[8px]">
                {isQuotation ? "Go to quotes" : "Go to orders"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersReceived;
