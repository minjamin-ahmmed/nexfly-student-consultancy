import signUp from "../../assets/sign-up.png";
import details from "../../assets/details.png";
import partnership from "../../assets/partnership.png";
import students from "../../assets/students.png";
import enrolments from "../../assets/enrolments.png";
import comission from "../../assets/commisson.png";

const Journey = () => {
  return (
    <div>
      <div className="p-5 md:p-10 lg:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex items-center gap-4 lg:ml-4">
            <div className="text-indigo-50 text-[80px] hidden lg:block md:block">
              1
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl shadow-lg">
              <div>
                <img className="w-20" src={signUp} alt="" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-900">Sign Up</h3>
                <p className="text-sm font-normal text-slate-700">
                  Co-own the property with two other investors (1/3 share each).
                  Share responsibilities, costs.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-indigo-50 text-[80px] hidden lg:block md:block">
              2
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl shadow-lg">
              <div>
                <img className="w-20" src={details} alt="" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-900">
                  Fill Your Details
                </h3>
                <p className="text-sm font-normal text-slate-700">
                  Co-own the property with two other investors (1/3 share each).
                  Share responsibilities, costs.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-indigo-50 text-[80px] hidden lg:block md:block">
              3
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl shadow-lg">
              <div>
                <img className="w-20" src={partnership} alt="" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-900">
                  Partnership
                </h3>
                <p className="text-sm font-normal text-slate-700">
                  Co-own the property with two other investors (1/3 share each).
                  Share responsibilities, costs.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-indigo-50 text-[80px] hidden lg:block md:block">
              4
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl shadow-lg">
              <div>
                <img className="w-20" src={students} alt="" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-900">
                  Add your students
                </h3>
                <p className="text-sm font-normal text-slate-700">
                  Co-own the property with two other investors (1/3 share each).
                  Share responsibilities, costs.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-indigo-50 text-[80px] hidden lg:block md:block">
              5
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl shadow-lg">
              <div>
                <img className="w-20" src={enrolments} alt="" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-900">
                  Successful Enrolments
                </h3>
                <p className="text-sm font-normal text-slate-700">
                  Co-own the property with two other investors (1/3 share each).
                  Share responsibilities, costs.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-indigo-50 text-[80px] hidden lg:block md:block">
              6
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl shadow-lg">
              <div>
                <img className="w-20" src={comission} alt="" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-900">
                  Earn Your commission
                </h3>
                <p className="text-sm font-normal text-slate-700">
                  Co-own the property with two other investors (1/3 share each).
                  Share responsibilities, costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
