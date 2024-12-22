import {
  Calendar03Icon,
  CustomerService01Icon,
  FileEditIcon,
  GiftIcon,
  MoneyBag02Icon,
  Notification02Icon,
  ServiceIcon,
  Settings02Icon,
  UserIcon,
  ArrowDown01Icon,
  ArrowRightDoubleIcon,
} from "hugeicons-react";
import React, { useState } from "react";

const ProfileTab = ({ activeTab, setActiveTab }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { name: "Profile", icon: <UserIcon /> },
    { name: "Your Service", icon: <ServiceIcon />, hasDropdown: true },
    { name: "Transaction", icon: <MoneyBag02Icon /> },
    { name: "Refer & Earn", icon: <GiftIcon /> },
    { name: "Schedule", icon: <Calendar03Icon /> },
    { name: "Files", icon: <FileEditIcon /> },
    { name: "Help Center", icon: <CustomerService01Icon /> },
    { name: "Notifications", icon: <Notification02Icon /> },
    { name: "Setting", icon: <Settings02Icon /> },
  ];

  const dropdownItems = [
    "Education Consultant",
    "Travel Support",
    "Financial Support",
    "Language Training",
  ];

  const handleDropdownClick = (item) => {
    setActiveTab(item);
    setIsDropdownOpen(false);
  };

  return (
    <div className="border border-slate-300 shadow rounded-lg mt-6">
      {tabs.map((tab, index) => (
        <div key={tab.name}>
          <button
            onClick={() =>
              tab.hasDropdown
                ? setIsDropdownOpen(!isDropdownOpen)
                : setActiveTab(tab.name)
            }
            className={`w-full flex items-center justify-between p-3 text-left focus:outline-none
              ${
                activeTab === tab.name
                  ? "bg-indigo-500 font-medium text-white"
                  : "text-slate-700"
              }
              ${index === 0 ? "rounded-t-lg" : ""} ${
              index === tabs.length - 1 ? "rounded-b-lg" : ""
            }`}
          >
            <div className="flex items-center">
              <span
                className={`mr-2 ${
                  activeTab === tab.name ? "text-white" : "text-slate-700"
                }`}
              >
                {React.isValidElement(tab.icon) &&
                  React.cloneElement(tab.icon, {
                    className: "h-5 w-5",
                  })}
              </span>
              {tab.name}
            </div>
            {tab.hasDropdown && (
              <ArrowDown01Icon
                className={`h-5 w-5 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                } ${activeTab === tab.name ? "text-white" : "text-slate-700"}`}
              />
            )}
          </button>

          {/* Dropdown Menu */}
          {tab.hasDropdown && isDropdownOpen && (
            <div className="ml-8 mt-2 mb-2">
              {dropdownItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleDropdownClick(item)}
                  className={`flex items-center justify-between w-full text-left p-2 text-sm rounded-lg hover:bg-indigo-100 ${
                    activeTab === item
                      ? "bg-indigo-500 text-white"
                      : "text-slate-700"
                  }`}
                >
                  <span>{item}</span>
                  <ArrowRightDoubleIcon
                    className={`h-4 w-4 ${
                      activeTab === item ? "text-white" : "text-slate-700"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileTab;
