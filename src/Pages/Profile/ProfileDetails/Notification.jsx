import { useState } from "react";
import AllNotification from "../../NotificationTabs/AllNotification";
import Consaltant from "../../NotificationTabs/Consaltant";
import TravelSupport from "../../NotificationTabs/TravelSupport";
import FinancialSupport from "../../NotificationTabs/FinancialSupport";
import LanguageAndTraining from "../../NotificationTabs/LanguageAndTraining";

const Notification = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Consaltant",
    "Travel Support",
    "Financial Support",
    "Language and Training",
  ];

  const renderContent = () => {
    if (activeTab === "All") return <AllNotification />;
    if (activeTab === "Consaltant") return <Consaltant />;

    if (activeTab === "Travel Support") {
      return <TravelSupport />;
    }

    if (activeTab === "Financial Support") {
      return <FinancialSupport />;
    }

    if (activeTab === "Language and Training") {
      return <LanguageAndTraining />;
    }

    return (
      <p className="text-gray-600">
        Content for {activeTab} is not implemented yet.
      </p>
    );
  };

  return (
    <div className="flex flex-col justify-start px-6 py-2 min-h-screen">
      {/* Tab Navigation */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8  bg-white rounded-lg shadow p-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-4 rounded-full text-[16px] font-medium ${
              activeTab === tab
                ? "bg-indigo-500 text-white"
                : "bg-indigo-50 text-slate-900"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full bg-white p-8 rounded-lg shadow">
        {renderContent()}
      </div>
    </div>
  );
};

export default Notification;
