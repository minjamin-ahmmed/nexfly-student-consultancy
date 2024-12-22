import PersonalTab from "../../ProfileDetailsTabs/PersonalTab";
import AcademicTab from "../../ProfileDetailsTabs/AcademicTab";
import LanguageTab from "../../ProfileDetailsTabs/LanguageTab";
import FinancialTab from "../../ProfileDetailsTabs/FinancialTab";
import PreferredCountryTab from "../../ProfileDetailsTabs/PreferredCountryTab";
import { useState } from "react";

const FormTabs = () => {
  const [activeTab, setActiveTab] = useState("Personal");

  const tabs = [
    "Personal",
    "Academic",
    "Language",
    "Financial",
    "Preferred country & university",
  ];

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const renderContent = () => {
    if (activeTab === "Personal")
      return (
        <PersonalTab handleNext={handleNext} setActiveTab={setActiveTab} />
      );
    if (activeTab === "Academic")
      return <AcademicTab handleNext={handleNext} handlePrev={handlePrev} />;

    if (activeTab === "Language") {
      return (
        <LanguageTab
          handleNext={handleNext}
          handlePrev={handlePrev}
        ></LanguageTab>
      );
    }

    if (activeTab === "Financial") {
      return (
        <FinancialTab
          handleNext={handleNext}
          handlePrev={handlePrev}
        ></FinancialTab>
      );
    }

    if (activeTab === "Preferred country & university") {
      return (
        <PreferredCountryTab handlePrev={handlePrev}></PreferredCountryTab>
      );
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

export default FormTabs;
