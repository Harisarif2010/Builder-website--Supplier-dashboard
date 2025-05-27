"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function CustomDropdown({ label, items, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    // Delay to allow navigation
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <div className={`relative ${className} rounded-[13px]`} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-white hover:text-gray-200 focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item, index) => (
              <Link key={index} href={item.href} legacyBehavior>
                <a
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
