import { Alert02Icon } from "hugeicons-react";

const LanguageAndTraining = () => {
  const laguageAndTrainings = [
    {
      id: 1,
      type: "Language and Training",
      description: "You have a new notification",
      date: "10/12/2024 | 12:00 PM",
    },

    {
      id: 2,
      type: "Language and Training",
      description: "You have a new notification",
      date: "9/12/2024 | 12:00 PM",
    },

    {
      id: 3,
      type: "Language and Training",
      description: "You have a new notification",
      date: "9/12/2024 | 12:00 PM",
    },

    {
      id: 4,
      type: "Language and Training",
      description: "You have a new notification",
      date: "9/12/2024 | 12:00 PM",
    },
  ];
  return (
    <div>
      <div className="overflow-y-scroll h-[530px]">
        {laguageAndTrainings.map((languageAndTraining) => (
          <div
            key={languageAndTraining.id}
            className="border border-slate-300 rounded-2xl bg-white p-4 mb-4 "
          >
            <div className="flex items-center gap-4 my-4">
              <div className="bg-indigo-500 w-16 h-16 rounded-full p-4">
                <Alert02Icon className="w-8 h-8 text-white mx-auto" />
              </div>

              <div>
                <h1 className="font-medium text-slate-900">
                  {" "}
                  {languageAndTraining.type}{" "}
                </h1>
                <p className="text-[16px] text-slate-600">
                  {" "}
                  {languageAndTraining.description}{" "}
                </p>
                <p className="font-normal text-slate-700">
                  {" "}
                  {languageAndTraining.date}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageAndTraining;
