import Modal from "react-modal";
import Advantages from "../Pages/Advantages";
import Advice from "../Pages/Advice";
import Banner from "../Pages/Banner";
import DiscoverUniversities from "../Pages/DiscoverUniversities";
import Events from "../Pages/Events";
import HelpContainer from "../Pages/HelpContainer";
import Question from "../Pages/Question";
import Services from "../Pages/Services";
import Testimonial from "../Pages/Testimonial";
import Video from "../Pages/Video";
import modalImg from "../assets/modalImage.png";
import modalLogo from "../assets/Color Logo.png";
import cross from "../assets/clear.svg";
import { useEffect } from "react";
import { useState } from "react";


Modal.setAppElement("#root");

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {

        const hasSeenModal = localStorage.getItem("hasSeenModal");

        if (!hasSeenModal) {
            setIsModalOpen(true);
            localStorage.setItem("hasSeenModal", "true");
        }
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-full mx-auto">

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Welcome Modal"
                style={{
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        padding: "30px",
                        borderRadius: "16px",
                        maxWidth: "700px",
                        width: "90%",
                        maxHeight: "90vh",
                        position: "relative",
                        overflowY: "auto",
                    },
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                }}
            >
                <button
                    onClick={closeModal}
                    className="absolute top-[4px] right-[4px] lg:top-[12px] lg:right-[12px] text-slate-950 hover:text-gray-800 focus:outline-none"
                    style={{
                        fontSize: "2rem",
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                    }}
                >
                    <img src={cross} alt="" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <img className="w-full lg:h-[400px] lg:rounded-xl object-cover" src={modalImg} alt="Scholarship" />
                    </div>

                    <div>
                        <div className="flex items-start justify-between">
                            <div>
                                <img src={modalLogo} alt="Logo" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-xl font-Poppins text-start md:text-2xl lg:text-4xl font-medium text-black">
                                Tech Excellence <span className="text-indigo-500">Scholarship!</span>
                            </h2>
                            <p className="font-bold text-start">Up to 50% tuition fee waiver</p>
                            <p className="text-slate-900 font-normal text-sm text-justify">
                                Undergraduate or master's students in Computer Science, Data Science, Artificial Intelligence, or
                                related fields. Minimum GPA: 3.5 (on a 4.0 scale). Demonstrated leadership in tech projects or
                                hackathons.
                            </p>

                            <button className="btn text-white bg-indigo-500 hover:bg-indigo-700 rounded-[100px] w-full">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

            <Banner />
            <HelpContainer />
            <Services />
            <Advantages />
            <Events />
            <DiscoverUniversities />
            <Video />
            <Advice />
            <Testimonial />
            <Question />
        </div>
    );
};

export default Home;
