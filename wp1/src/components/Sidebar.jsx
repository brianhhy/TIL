import React, { useState } from "react";
import { MenuBook } from "@mui/icons-material";

const Sidebar = ({ menuItems, onMenuItemClick, onContentLoad }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleMenuClick = (index) => {
    setActiveIndex(index);
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));

    if (onMenuItemClick) {
      onMenuItemClick(menuItems[index].name, menuItems[index].subItems);
    }

    if (onContentLoad) {
      onContentLoad(
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-4 p-4">
          {menuItems[index].subItems.map((subItem, subIndex) => (
            <div
              key={subIndex}
              className="w-[200px] h-[300px] border border-gray-300 rounded-lg shadow-md flex flex-col items-center relative"
            >
              <div className="absolute top-0 left-0 w-8 h-full bg-red-500 rounded-l-lg"></div>
              <div className="flex flex-col justify-center items-center w-full h-full">
                <span className="text-lg font-bold text-gray-800 mt-2">
                  {subItem}
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  const getMenuItemBorderColor = (index) => {
    const colors = [
      "border-red-500",
      "border-orange-500",
      "border-yellow-500",
      "border-green-500",
      "border-blue-500",
      "border-indigo-500",
      "border-purple-500",
      "border-black",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="flex flex-col h-screen min-w-[200px] max-w-[300px] bg-white border-r border-gray-200">
      {/* Header */}
      <div className="flex shrink-0 px-4 items-center justify-between h-[96px]">
        <div className="flex items-center cursor-pointer">
          <MenuBook
            className="text-gray-600 hover:text-blue-600"
            style={{ fontSize: "2rem" }}
          />
          <span
            className="ml-4 font-medium text-gray-800"
            onClick={() => (window.location.href = "/memo")}
          >
            나의 학습
          </span>
        </div>
      </div>

      {/* Menu */}
      <div className="relative pl-3 my-5 overflow-y-auto flex-1">
        <div className="flex flex-col w-full font-medium">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="flex flex-col cursor-pointer">
              <div
                className={`select-none flex items-center px-4 py-2 my-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                  activeIndex === index
                    ? `border-l-4 ${getMenuItemBorderColor(index)}`
                    : ""
                }`}
                onClick={() => handleMenuClick(index)}
              >
                <span
                  className={`flex items-center flex-grow text-lg font-medium ${
                    activeIndex === index ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  {menuItem.name}
                </span>
              </div>
              {openIndex === index && (
                <div className="ml-8 mt-2 flex flex-col">
                  {menuItem.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="py-1 text-gray-700">
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* User Info */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 w-full border-t border-gray-200">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <div>
            <span className="block font-medium text-gray-800">John Doe</span>
            <span className="block text-sm text-gray-500">University</span>
          </div>
        </div>
        <button
          className="text-gray-500 hover:text-blue-600"
          onClick={() => alert("Settings clicked")}
        >
          ⚙️
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
