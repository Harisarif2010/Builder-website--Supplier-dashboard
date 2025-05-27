import { Bell, Settings, Search } from "lucide-react";
import { poppins, roboto, inter } from "../fonts";
import SupplierSidebar from "../../../Components/Layout/SupplierSidebar";
import ThemeToggle from "../theme/Themetoggle";
import MobileSidebarModal from "../../../Components/Modals/SupplierModal";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex bg-[#EEF0F4] dark:bg-black">
          {/* Sidebar */}
          <SupplierSidebar />

          {/* Main content */}
          <div className="flex-1 flex flex-col min-h-screen ">
            {/* Topbar */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 p-3 mt-2 mx-3 bg-white rounded-[13px] h-auto">
              {/* Search input */}
              <div className="relative w-full md:w-1/4">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full pl-10 pr-4 py-2 bg-[#F2F6FA] rounded-xs text-sm placeholder:text-[#586A84] placeholder:text-[14px]"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <Search size={16} color="#586A84" />
                </div>
              </div>

              {/* icons */}
              <div className="flex justify-end gap-x-4 md:gap-x-6">
                <div className="md:hidden fixed top-14 left-4 z-50">
                  <MobileSidebarModal />
                </div>
                <ThemeToggle />
                <Bell color="#586A84" height={20} width={20} />
                <Settings color="#586A84" height={20} width={20} />
              </div>
            </div>

            {/* Page content */}
            <main
              className={`p-2 ${poppins.className} ${roboto.className} ${inter.className} rounded-3xl`}
            >
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
