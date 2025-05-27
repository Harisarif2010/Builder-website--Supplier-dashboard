"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    //w-64 original
    <div className="hidden md:flex flex-col w-1/5  bg-[var(--secondary-blue)] h-auto border  rounded-tr-[13px] rounded-l-[4px]  ">
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
                <Link href="/UserDashboard/">
                  <div
                    className={`flex items-center  px-4  py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium my-3  ${
                      isActive("/UserDashboard")
                        ? "bg-white text-[var(--secondary-blue)] "
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/UserDashboard")
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
                <Link href="/UserDashboard/Profile">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/Profile")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/UserDashboard/Profile")
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
                <Link href="/UserDashboard/Quotation">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/PainScore")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white  mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/UserDashboard/Quotation")
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
                <Link href="/UserDashboard/Orders">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/Orders")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/UserDashboard/Orders")
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
                <Link href="/UserDashboard/Payment">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/Payment")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        // src="/icons/medication.png"
                        src={
                          isActive("/UserDashboard/Payment")
                            ? "/icons/paymentblue.svg"
                            : "/icons/payment.svg"
                        }
                        alt="Payment icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span>Payment & Billing</span>
                  </div>
                </Link>
              </li>
              <li className="mb-6 mx-6">
                <Link href="/UserDashboard/Help">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/Help")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/UserDashboard/Help")
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
                <Link href="/UserDashboard/Chat ">
                  <div
                    className={`flex items-center px-4 py-2 mb-1 rounded-lg cursor-pointer transition-colors font-medium ${
                      isActive("/UserDashboard/Chat")
                        ? "bg-white text-[var(--secondary-blue)] mx-3"
                        : "text-white mx-3"
                    }`}
                  >
                    <div className="mr-3 w-5 h-5 relative">
                      <Image
                        src={
                          isActive("/UserDashboard/Chat")
                            ? "/icons/chatblue.svg"
                            : "icons/chat.svg"
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

export default Sidebar;
