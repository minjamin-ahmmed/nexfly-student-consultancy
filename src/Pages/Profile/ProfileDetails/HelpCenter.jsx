import {
  CustomerServiceIcon,
  HeadsetIcon,
  Mail01Icon,
  UserLove02Icon,
} from "hugeicons-react";
import { useState } from "react";
import TravelSupport from "../../HelpContainerDetails/TravelSupport";
import Consaltant from "../../HelpContainerDetails/Consaltant";
import FinancialSupport from "../../HelpContainerDetails/FinancialSupport";
import LanguageTraining from "../../HelpContainerDetails/LanguageTraining";

const HelpCenter = () => {
  const [activeTab, setActiveTab] = useState("Consaltant");

  const tabs = [
    "Consaltant",
    "Travel Support",
    "Financial Support",
    "Language Training",
  ];

  const renderContent = () => {
    if (activeTab === "Consaltant") return <Consaltant></Consaltant>

    if (activeTab === "Travel Support")
      return <TravelSupport></TravelSupport>;

    if (activeTab === "Financial Support")
      return <FinancialSupport></FinancialSupport>

    if (activeTab === "Language Training")
      return <LanguageTraining></LanguageTraining>
  };

  return (
    <div>
      <h1 className="text-3xl font-medium text-slate-900 mb-4">Help Center</h1>
      <p className="text-slate-700 font-medium lg:w-3/4 mb-6">
        Provide your details, and our expert counselors will reach out to
        connect you with the ideal course, country, university, and scholarship
        opportunities!
      </p>

      <div className="lg:w-5/6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-center gap-2 bg-indigo-100 p-4 rounded-lg">
            <Mail01Icon className="h-5 w-5 text-indigo-500" />
            <p className="font-medium text-indigo-500">nexfly@gmail.com</p>
          </div>

          <div className="flex items-center gap-2 bg-indigo-100 p-4 rounded-lg">
            <UserLove02Icon className="h-5 w-5 text-indigo-500" />
            <p className="font-medium text-indigo-500">Admin: 01234 56 789</p>
          </div>

          <div className="flex items-center gap-2 bg-indigo-100 p-4 rounded-lg">
            <HeadsetIcon className="h-5 w-5 text-indigo-500" />
            <p className="font-medium text-indigo-500">
              Free Conslatent: 01234 56 789
            </p>
          </div>

          <div className="flex items-center gap-2 bg-indigo-100 p-4 rounded-lg">
            <CustomerServiceIcon className="h-5 w-5 text-indigo-500" />
            <p className="font-medium text-indigo-500">Hotline: 01234 56 789</p>
          </div>
        </div>
      </div>

      <h1 className="text-xl font-medium text-slate-900">FAQ</h1>

      <div className="flex flex-wrap lg:flex-row gap-4 my-8">
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

      <div className="w-full p-4 bg-white rounded-lg shadow">
        {renderContent()}
      </div>
    </div>
  );
};

export default HelpCenter;
