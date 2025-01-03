import React, { useState } from 'react';
import Container from './Container';
import { IoCheckboxOutline } from "react-icons/io5";

const BuildPlanPart = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section
            className="py-16"
            style={{
                background: 'linear-gradient(to right, #37AFE1, #BFECFF, #F5EFFF)',
            }}
        >
            <Container>
                {/* Header */}
                <div className="w-full lg:w-[50%] text-center mx-auto px-4">
                    <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-[#29313D] font-openSans font-bold mb-6">
                        Build The Right Plan For Your Team.
                    </h1>
                </div>

                {/* Toggle Button */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-4">
                        <span className={!isYearly ? 'font-bold text-[#29313D] text-[16px] sm:text-[18px] md:text-[22px] font-openSans' : 'text-gray-500 text-[16px] sm:text-[18px] md:text-[22px] font-bold font-openSans'}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative flex items-center bg-gray-300 w-14 sm:w-16 h-6 sm:h-8 rounded-full"
                        >
                            <span
                                className={`absolute w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-0'
                                    }`}
                            ></span>
                        </button>
                        <span className={isYearly ? 'font-bold text-[#29313D] text-[16px] sm:text-[18px] md:text-[22px] font-openSans' : 'text-gray-500 text-[16px] sm:text-[18px] md:text-[22px] font-bold font-openSans'}>
                            Yearly
                        </span>
                    </div>
                </div>

                {/* Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
                    {/* Plan Card */}
                    {["Intro", "Pro", "Exclusive"].map((plan, index) => (
                        <div
                            key={index}
                            className="bg-[#FFFF] py-8 px-6 sm:py-16 sm:px-10 rounded-2xl transform transition-all duration-300 ease-in-out hover:bg-[#181059] hover:text-white hover:-translate-y-3"
                        >
                            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] text-[#29313D] font-openSans font-bold mb-4 transform transition-all duration-300 ease-in-out hover:bg-[#181059] hover:text-white hover:-translate-y-3 cursor-pointer">
                                {plan}
                            </h2>
                            <div className="space-y-2">
                                {[
                                    { label: "Hosting Space", value: `${300 + index * 200}GB` },
                                    { label: "Emails", value: index > 0 ? "Unlimited" : "Not Avai." },
                                    { label: "Pricing Feature", value: index > 0 ? "Available" : "Not Avai." },
                                    { label: "Bonus Plugins", value: index > 1 ? "Available" : "Unlimited" },
                                    { label: "Exclusive Support", value: index > 0 ? "Available" : "Not Avai." },
                                    { label: "Custom fields (basic)", value: index > 0 ? "Unlimited" : "Not Avai." },
                                    { label: "Web forms (basic)", value: index > 0 ? "Available" : "Not Avai." },
                                    { label: "Workflows (basic)", value: index === 2 ? "Unlimited" : "Not Avai." },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex justify-between">
                                        <h4 className="flex items-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] text-[#545A64] hover:text-white">
                                            <IoCheckboxOutline />
                                            {item.label}
                                        </h4>
                                        <span className="text-[16px] sm:text-[18px] md:text-[20px] text-[#8454F5] font-Paprika font-bold hover:text-white">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <button className="relative group h-[50px] w-full text-[#FFFFFF] font-Inter font-bold mt-8 outline-none rounded-md bg-[#8454F5] overflow-hidden transition-all duration-300 ease-in-out">
                                {/* Button Text */}
                                <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">Get Started</span>

                                {/* Hover Border Expansion */}
                                <span className="absolute top-0 left-0 w-0 h-[3px] bg-[#00FFFF] group-hover:w-full transition-all duration-300 ease-in-out origin-top-left"></span>
                                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#00FFFF] group-hover:w-full transition-all duration-300 ease-in-out origin-bottom-left"></span>
                                <span className="absolute top-0 right-0 w-0 h-[3px] bg-[#00FFFF] group-hover:w-full transition-all duration-300 ease-in-out origin-top-right"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-[3px] bg-[#00FFFF] group-hover:w-full transition-all duration-300 ease-in-out origin-bottom-right"></span>

                                {/* Neon Glow Effect */}
                                <span className="absolute top-0 left-0 w-full h-full bg-[#00FFFF] opacity-0 group-hover:opacity-40 transition-all duration-500 ease-in-out blur-sm"></span>

                                {/* Hover Background Color Fade */}
                                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8454F5] to-[#FD5F36] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></span>
                            </button>


                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default BuildPlanPart;
