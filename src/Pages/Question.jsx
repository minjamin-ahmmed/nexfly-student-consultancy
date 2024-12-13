

const Question = () => {
    return (
        <div className="w-full px-5  lg:w-1/2 lg:px-0 mx-auto py:5 md:py-10 lg:py-20">
            <h1 className="text-[#0F172A] font-medium text-2xl text-center md:text-3xl lg:text-4xl mb-4">Frequently Asked Question</h1>
            <div className="collapse collapse-plus bg-base-200 rounded-b-none">
                <input type="radio" name="my-accordion-3" className="peer" />
                <div className="collapse-title text-lg font-normal peer-checked:text-indigo-500">Who is Nexfly?</div>
                <div className="collapse-content space-y-4 text-sm  text-gray-500">
                    <p>We are an online study abroad advisor. Our website, tools and emails help you find and apply for the right program at the best university in one place. Plus our expert advisors will give you guidance along the way.</p>

                    <p>Studying abroad is life-changing and every student deserves to experience it. We give you advice that matches your needs and goals.</p>

                    <p>Many of our team member studied abroad too. We know it can feel overwhelming and thats why we'll be by your side at every step.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 rounded-none">
                <input type="radio" name="my-accordion-3" className="peer" />
                <div className="collapse-title text-lg font-normal peer-checked:text-indigo-500">How do you improve my chances of getting a university offer?</div>
                <div className="collapse-content space-y-4 text-sm  text-gray-500">
                    <p> We take time to understand you, your specific situation, need and goals to find the ideal course and universities for you.</p>

                    <p>We help you quickly check if you&apos;re eligible for a program, So you dont waste time and effort applying courses that aren&apos;t right for you.</p>

                    <p>Puts, our experts check everything on your application, like your documentation and answers and give you advice on how to improve them. This detailed review is a big part of how we help you get into university.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 rounded-none">
                <input type="radio" name="my-accordion-3" className="peer" />
                <div className="collapse-title text-lg font-normal font-Poppins peer-checked:text-indigo-500"> Do you charge for using netlify?</div>
                <div className="collapse-content">
                    <p>No all of our services are free for students because we believe everyone should have the chance to study abroad. We are the official partner of universities on Nexfly - we help them to find high-quality international students like you.You'll pay tuition fees and any deposits directly to the university. We won't charge you for anything.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 rounded-none">
                <input type="radio" name="my-accordion-3" className="peer" />
                <div className="collapse-title text-lg font-normal font-Poppins peer-checked:text-indigo-500"> Do you charge for using netlify?</div>
                <div className="collapse-content">
                    <p>No all of our services are free for students because we believe everyone should have the chance to study abroad. We are the official partner of universities on Nexfly - we help them to find high-quality international students like you.You&apos;ll pay tuition fees and any deposits directly to the university. We won&apos;t charge you for anything.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 rounded-none">
                <input type="radio" name="my-accordion-3" className="peer" />
                <div className="collapse-title text-lg font-normal font-Poppins peer-checked:text-indigo-500">When I will get an offer letter?</div>
                <div className="collapse-content">
                    <p>It depends on the university, the program you pick and in some cases their application deadline. But don&apos;t worry, we&apos;re here to speed things up for you. We&apos;ll stay in touch with the universities to see if they&apos;ve made a decision and keep you informed every step of the way. We&apos;ll give you regular updates including any changes to the timescale of your application.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 rounded-t-none">
                <input type="radio" name="my-accordion-3" className="peer" />
                <div className="collapse-title text-lg font-normal font-Poppins peer-checked:text-indigo-500">Does applying with student mean it takes longer to get updates from the university?</div>
                <div className="collapse-content">
                    <p>No, we&apos;ll quickly share update from the university with you. If they need more information from you, you&apos;ll get an email immediately and you can reply university directly.</p>
                </div>
            </div>

        </div>
    );
};

export default Question;