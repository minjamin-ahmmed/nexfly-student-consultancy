import { useState } from "react";
import Step1 from "../../Pages/SelfAssesment/Step1";
import Step2 from "../../Pages/SelfAssesment/Step2";
import Step3 from "../../Pages/SelfAssesment/Step3";
import Step4 from "../../Pages/SelfAssesment/Step4";
import Step5 from "../../Pages/SelfAssesment/Step5";

const SelfAssesment = () => {
    const [step, setStep] = useState(1);


    const goNextStep = () => {
        if (step < 5) {
            setStep((prevStep) => prevStep + 1);
        }

    }

    const goPrevStep = () => {
        setStep((prevStep) => prevStep - 1)
    }


    const handleTabChange = (newStep) => {
        setStep(newStep);
    };



    return (
        <div className="px-5 md:px-10 lg:px-24 mt-8">
            {/* Tab Header with Steps */}
            <div className="relative flex justify-between items-center w-full lg:w-1/2 lg:mx-auto">
                {/* Tab Buttons */}
                {[1, 2, 3, 4, 5].map((tab) => (
                    <button
                        key={tab}
                        role="tab"
                        onClick={() => handleTabChange(tab)}
                        className={`relative z-10 px-4 py-2 text-center focus:outline-none ${step >= tab ? "text-indigo-500 font-medium" : "text-slate-700"
                            }`}
                        aria-label={`Step ${tab}`}
                    >

                        {
                            step >= tab && (<i className="fa-regular fa-circle-check mr-2"></i>)
                        }
                        Step {tab}

                    </button>
                ))}

                {/* Dynamic Border */}
                <div
                    className="absolute bottom-0 left-0 h-[3px] bg-gray-300 w-full"

                />
                <div
                    className="absolute bottom-0 left-0 h-[3px] bg-indigo-500 transition-all duration-300"
                    style={{
                        width: `${(step / 5) * 100}%`, // Dynamic width based on current step
                    }}
                />
            </div>

            {/* Tab Content */}
            <div className="mt-5">
                {step === 1 && <Step1 goNextStep={goNextStep} />}
                {step === 2 && <Step2 goPrevStep={goPrevStep} goNextStep={goNextStep} />}
                {step === 3 && <Step3 goPrevStep={goPrevStep} goNextStep={goNextStep} />}
                {step === 4 && <Step4 goPrevStep={goPrevStep} goNextStep={goNextStep} />}
                {step === 5 && <Step5 goPrevStep={goPrevStep} />}
            </div>
        </div>
    );
};

export default SelfAssesment;
