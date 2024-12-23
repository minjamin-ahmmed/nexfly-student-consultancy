import { Alert02Icon } from "hugeicons-react";

const TravelSupport = () => {
  const travels = [
    {
      id: 1,
      type: "Travel Support",
      description: "You have a new notification",
      date: "10/12/2024 | 12:00 PM",
    },

    {
      id: 2,
      type: "Travel Support",
      description: "You have a new notification",
      date: "9/12/2024 | 12:00 PM",
    },

    {
      id: 3,
      type: "Travel Support",
      description: "You have a new notification",
      date: "9/12/2024 | 12:00 PM",
    },
  ];
  return (
    <div>
      <div>
        {travels.map((travel) => (
          <div
            key={travel.id}
            className="border border-slate-300 rounded-2xl bg-white p-4 mb-4"
          >
            <div className="flex items-center gap-4 my-4">
              <div className="bg-indigo-500 w-16 h-16 rounded-full p-4">
                <Alert02Icon className="w-8 h-8 text-white mx-auto" />
              </div>

              <div>
                <h1 className="font-medium text-slate-900"> {travel.type} </h1>
                <p className="text-[16px] text-slate-600">
                  {" "}
                  {travel.description}{" "}
                </p>
                <p className="font-normal text-slate-700"> {travel.date} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelSupport;
