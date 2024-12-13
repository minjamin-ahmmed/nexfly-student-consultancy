import missionImg from "../../assets/mission-vission.png"

const Vission = () => {
    return (
        <div className="mb-20 mt-10 lg:mt-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-5 md:px-10 lg:px-20 mb-3">
                <h1 className="font-bold text-2xl lg:text-4xl"> We build bridges between compaines and customers</h1>
                <p className="font-normal text-[#334155] text-[16px] mt-2">Provide your details, and our expert counselors will reach out to connect you with the ideal course, country, university, and scholarship opportunities!</p>
            </div>

            <div className="lg:h-[500px] md:h-[200px] h-[100px]"></div>

            <div className="w-full px-5 md:px-10 lg:px-20 absolute top-[32%] md:top-[40%] lg:top-[50%] z-10">
                <img className="w-full" src={missionImg} alt="Mission and Vission Image" />
            </div>

            <div className="bg-[#6366F1] grid grid-cols-1 lg:grid-cols-2 gap-10 pt-16 lg:pt-28 pb-10 px-5 md:px-10 lg:px-20 relative">
                <div>
                    <h3 className="text-2xl font-medium text-white mb-4">Mission</h3>
                    <p className="text-slate-300 text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse et earum repellendus praesentium neque, autem sequi, possimus sit temporibus totam quia soluta molestias odit itaque. Doloribus, similique voluptas! Vitae sint nam eum maiores saepe? Cupiditate sequi beatae modi esse, ullam harum rerum officiis repudiandae qui reiciendis fugit, laborum placeat.</p>
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-white mb-4">Vission</h3>
                    <p className="text-slate-300 text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse et earum repellendus praesentium neque, autem sequi, possimus sit temporibus totam quia soluta molestias odit itaque. Doloribus, similique voluptas! Vitae sint nam eum maiores saepe? Cupiditate sequi beatae modi esse, ullam harum rerum officiis repudiandae qui reiciendis fugit, laborum placeat.</p>
                </div>
            </div>

        </div>
    );
};

export default Vission;