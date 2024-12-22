import React from "react";

const FinancialSupport = () => {
  return (
    <div>
      {/* FAQ Item 1 */}
      <div className="collapse collapse-plus rounded-b-none">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-lg font-normal peer-checked:text-indigo-500">
          Who is Nexfly?
        </div>
        <div className="collapse-content space-y-4 border-b-slate-500 text-sm text-gray-500">
          <p>
            We are an online study abroad advisor. Our website, tools, and
            emails help you find and apply for the right program at the best
            university in one place. Plus, our expert advisors will give you
            guidance along the way.
          </p>
          <p>
            Studying abroad is life-changing and every student deserves to
            experience it. We give you advice that matches your needs and goals.
          </p>
          <p>
            Many of our team members studied abroad too. We know it can feel
            overwhelming, and that's why we'll be by your side at every step.
          </p>
        </div>
      </div>

      {/* FAQ Item 2 */}
      <div className="collapse collapse-plus border-b-slate-500 rounded-none">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-lg font-normal peer-checked:text-indigo-500">
          How do you improve my chances of getting a university offer?
        </div>
        <div className="collapse-content space-y-4 text-sm text-gray-500">
          <p>
            We take time to understand you, your specific situation, needs, and
            goals to find the ideal course and universities for you.
          </p>
          <p>
            We help you quickly check if you're eligible for a program, so you
            don't waste time and effort applying to courses that aren't right
            for you.
          </p>
          <p>
            Our experts check everything on your application, like your
            documentation and answers, and give you advice on how to improve
            them. This detailed review is a big part of how we help you get into
            university.
          </p>
        </div>
      </div>

      {/* FAQ Item 3 */}
      <div className="collapse collapse-plus border-b-slate-500 rounded-none">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-lg font-normal peer-checked:text-indigo-500">
          Do you charge for using Nexfly?
        </div>
        <div className="collapse-content space-y-4 text-sm text-gray-500">
          <p>
            No, all of our services are free for students because we believe
            everyone should have the chance to study abroad. We are the official
            partner of universities on Nexfly - we help them find high-quality
            international students like you. You'll pay tuition fees and any
            deposits directly to the university. We won't charge you for
            anything.
          </p>
        </div>
      </div>

      {/* FAQ Item 4 */}
      <div className="collapse collapse-plus border-b-slate-500 rounded-t-none">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-lg font-normal peer-checked:text-indigo-500">
          When will I get an offer letter?
        </div>
        <div className="collapse-content text-sm text-gray-500">
          <p>
            It depends on the university, the program you pick, and in some
            cases their application deadline. But don't worry, we're here to
            speed things up for you. We'll stay in touch with the universities
            to see if they've made a decision and keep you informed every step
            of the way. We'll give you regular updates, including any changes to
            the timescale of your application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialSupport;
