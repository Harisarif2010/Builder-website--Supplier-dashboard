"use client";
import React from "react";
import OrdersReceived from "../../../../Components/Cards/OrdersReceived";
import NotificationCard from "../../../../Components/Cards/NotificationCard";

const Notification = () => {
  return (
    <>
      {" "}
      <h3 className="text-[#3B4758] text-2xl font-bold px-1 pb-4">
        Notifications
      </h3>
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-4 px-4">
        <NotificationCard
          title="Payment Received"
          amount="$3,503.26"
          time="4h ago"
          type="success"
          iconUrl="/icons/dollar.png"
        />
        <NotificationCard
          title="System Alert"
          subtitle="Scheduled maintenance — expect downtime"
          time="4h ago"
          type="alert"
          iconUrl="/icons/aletr.png"
          onRemove={() => alert("Alert removed")}
        />
      </div>
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-4 px-4">
        <OrdersReceived type="order" />
        <OrdersReceived type="quotation" />
      </div>
    </>
  );
};

export default Notification;
