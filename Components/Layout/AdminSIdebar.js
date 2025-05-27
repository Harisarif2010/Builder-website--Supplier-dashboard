"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    //w-64 original
    <div className="hidden md:flex flex-col w-1/5  bg-[var(--secondary-blue)] h-auto border  rounded-tr-[13px] rounded-l-[4px] ">
      {/* Logo section */}
      <div>
        <Link href="/">
          <div className="cursor-pointer  justify-center my-2">
            <Image
              src="/images/logo.svg"
              alt="logos"
              width={90}
              height={70}
              className="mx-auto"
              priority
            />
          </div>
        </Link>
        <div className="flex-1 ">
          {/* MENU Section */}
          <div className="mb-6">
            <ul>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/">
                  <div
                    className={`flex items-center  px-4  py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium my-3  ${
                      isActive("/AdminDashboard")
                        ? "bg-white text-[var(--secondary-blue)] "
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard")
                            ? "/icons/dashboardblue.svg"
                            : "/icons/dashboard.png"
                        }
                        alt="Dashboard icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Dashboard</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Profile">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/AdminDashboard/Profile")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Profile")
                            ? "/icons/profileblue.svg"
                            : "/icons/profile.svg"
                        }
                        alt="Pet Profile icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Profile</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Quotation">
                  <div
                    className={`flex items-center px-4 py-1 mb-1 rounded-lg   cursor-pointer transition-colors font-medium ${
                      isActive("/AdminDashboard/PainScore")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Quotation")
                            ? "/icons/productwhite.png"
                            : "/icons/products.png"
                        }
                        alt="Pet Profile icon"
                        width={12}
                        height={12}
                        className="object-contain"
                      />
                    </div>
                    <span>Products Managment</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Quotation">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/AdminDashboard/PainScore")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Quotation")
                            ? "/icons/quotation.svg"
                            : "/icons/quotation.svg"
                        }
                        alt="Pet Profile icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Quotation Request</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Orders">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/AdminDashboard/Orders")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Orders")
                            ? "/icons/orderblue.svg"
                            : "/icons/orders.svg"
                        }
                        alt="Feeding Schedule icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Orders</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Payment">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/AdminDashboard/Payment")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Payment")
                            ? "/icons/paymentblue.svg"
                            : "/icons/payment.svg"
                        }
                        alt="Payment icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Earning & Payouts</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Inquiry">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/AdminDashboard/Inquiry")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Inquiry")
                            ? "/icons/inquiryblue.png"
                            : "/icons/inquiry.png"
                        }
                        alt="Good Day/Bad Day icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span>Inquiry Section</span>
                  </div>
                </Link>
              </li>

              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Help">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/AdminDashboard/Help")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Help")
                            ? "/icons/helpblue.svg"
                            : "/icons/help.svg"
                        }
                        alt="Good Day/Bad Day icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span>Help & Support</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/AdminDashboard/Chat ">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/AdminDashboard/Chat")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/AdminDashboard/Chat")
                            ? "/icons/chatblue.svg"
                            : "/icons/chat.png"
                        }
                        alt="Daily"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span>Chat</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
