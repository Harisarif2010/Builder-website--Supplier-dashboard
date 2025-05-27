"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const MobileSidebarModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const menuItems = [
    {
      name: "Dashboard",
      path: "/UserDashboard",
      icon: "dashboard.png",
      activeIcon: "dashboardblue.svg",
    },
    {
      name: "Profile",
      path: "/UserDashboard/Profile",
      icon: "profile.svg",
      activeIcon: "profileblue.svg",
    },
    {
      name: "Quotation Request",
      path: "/UserDashboard/Quotation",
      icon: "quotation.svg",
      activeIcon: "quotation.svg",
    },
    {
      name: "Orders",
      path: "/UserDashboard/Orders",
      icon: "orders.svg",
      activeIcon: "orderblue.svg",
    },
    {
      name: "Payment & Billing",
      path: "/UserDashboard/Payment",
      icon: "payment.svg",
      activeIcon: "paymentblue.svg",
    },
    {
      name: "Help & Support",
      path: "/UserDashboard/Help",
      icon: "help.svg",
      activeIcon: "helpblue.svg",
    },
    {
      name: "Chat",
      path: "/UserDashboard/Chat",
      icon: "chat.svg",
      activeIcon: "chatblue.svg",
    },
  ];

  return (
    <>
      {/* Mobile menu toggle button */}
      <button onClick={() => setIsOpen(true)} className="text-white p-2">
        <Menu className="w-6 h-6" color="black" />
      </button>

      {isOpen && (
        <div className="fixed  z-50 inset-0 bg-black/50  bg-opacity-60 flex">
          <div className="w-2/3 h-full bg-[var(--secondary-blue)] p-4 rounded-r-xl overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <Image src="/images/logo.svg" alt="Logo" width={80} height={60} />
              <button onClick={() => setIsOpen(false)}>
                <X className="text-white w-6 h-6" />
              </button>
            </div>

            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link href={item.path} onClick={() => setIsOpen(false)}>
                    <div
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors font-medium ${
                        isActive(item.path)
                          ? "bg-white text-[var(--secondary-blue)]"
                          : "text-white"
                      }`}
                    >
                      <div className="mr-3 w-5 h-5 relative">
                        <Image
                          src={
                            isActive(item.path)
                              ? `/icons/${item.activeIcon}`
                              : `/icons/${item.icon}`
                          }
                          alt={`${item.name} icon`}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default MobileSidebarModal;
