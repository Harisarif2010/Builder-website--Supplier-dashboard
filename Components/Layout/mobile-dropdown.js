"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

/**
 * Mobile dropdown component
 * @param {Object} props
 * @param {string} props.label - Dropdown label
 * @param {Array} props.items - Array of dropdown items with label and href
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onItemClick - Callback when an item is clicked
 */
export default function MobileDropdown({
  label,
  items,
  className = "",
  onItemClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className={`${className}`}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-white hover:text-gray-200 focus:outline-none w-full"
        aria-expanded={isOpen}
      >
        {label}{" "}
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-2 ml-4 flex flex-col space-y-2">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white hover:text-gray-200"
              onClick={handleItemClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
