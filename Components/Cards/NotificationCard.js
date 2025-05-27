"use client";
import { poppins, roboto } from "@/app/fonts";
import Image from "next/image";
import React from "react";

export default function NotificationCard({
  title,
  subtitle,
  time,
  amount,
  type = "info",
  iconUrl,
  onRemove,
}) {
  // Default background colors per type
  const bgColor =
    {
      success: "#36DA78",
      alert: "#DA3636",
    }[type] || "bg-gray-100";

  return (
    <div
      style={{ boxShadow: " 0px 4px 20px 0px #AAA9B81A" }}
      className="bg-white p-5 rounded-xl  w-full  flex justify-between items-start"
    >
      <div className="w-full">
        <h4
          className={`${poppins.variable} font-medium text-[#101010] text-base mb-1`}
        >
          {title}
        </h4>
        {amount && (
          <div
            className={`${roboto.variable}  text-2xl text-[#3B4758] font-bold mb-1`}
          >
            {amount}
          </div>
        )}
        {subtitle && (
          <div className="text-sm text-gray-800 font-medium">{subtitle}</div>
        )}
        <div className="w-full flex justify-between">
          <div className="text-xs text-gray-700 mt-2">{time}</div>
          {type === "alert" && (
            <button
              onClick={onRemove}
              className="mt-2 text-sm text-[#DA3636] hover:underline font-medium"
            >
              Remove
            </button>
          )}
        </div>
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className="w-8 h-8 rounded-md flex items-center justify-center "
      >
        <Image
          height={500}
          width={500}
          src={iconUrl}
          alt="icon"
          className="w-5 h-5 object-contain"
        />
      </div>
    </div>
  );
}
