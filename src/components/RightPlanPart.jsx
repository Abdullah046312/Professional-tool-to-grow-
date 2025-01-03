import React from 'react'
import Container from './Container'
import rightplanimg from "../assets/rightplanimg.png"
import rightplanimg1 from "../assets/rightplanimg1.png"
import rightplanimg2 from "../assets/rightplanimg2.png"
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiSolidChevronLeftCircle } from "react-icons/bi";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const RightPlanPart = () => {
    return (
        <section className="py-16">
            <Container>
                <div className="flex flex-wrap justify-between items-center gap-8">
                    <div className="w-full sm:w-[30%] flex items-center gap-3">
                        <img
                            src={rightplanimg}
                            alt="Watch a demo"

                        />
                        <h4 className="text-[24px] text-[#545A64] font-Paprika font-semibold transition-all duration-300 hover:text-[#8454F5] hover:shadow-neon">
                            Watch a demo
                        </h4>
                    </div>

                    <div className="w-full sm:w-[20%] border-r-8 pr-10 border-[#8454F5] text-center">
                        <h2 className="text-[64px] text-[#29313D] font-openSans font-bold transition-all duration-300 hover:text-[#8454F5] hover:shadow-neon">
                            2.8x
                        </h2>
                        <p className="text-[18px] text-[#29313D] font-Paprika font-normal">
                            We are ultra fast deal service
                        </p>
                    </div>

                    <div className="w-full sm:w-[20%] border-r-8 pr-10 border-[#8454F5] text-center">
                        <h2 className="text-[64px] text-[#29313D] font-openSans font-bold transition-all duration-300 hover:text-[#8454F5] hover:shadow-neon">
                            68%
                        </h2>
                        <p className="text-[18px] text-[#29313D] font-Paprika font-normal">
                            More deal closed services
                        </p>
                    </div>

                    <div className="w-full sm:w-[20%] text-center">
                        <h2 className="text-[64px] text-[#29313D] font-openSans font-bold transition-all duration-300 hover:text-[#8454F5] hover:shadow-neon">
                            2.4x
                        </h2>
                        <p className="text-[18px] text-[#29313D] font-Paprika font-normal">
                            We are ultra fast deal service
                        </p>
                    </div>
                </div>

                <div className="lg:w-[50%] w-full mt-32 ">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-[#29313D] font-openSans font-bold mb-6">
                        Build the right plan for your team.
                    </h2>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-8 mt-20">
                    <div className="w-full sm:w-[30%]">
                        <img
                            src={rightplanimg2}
                            alt="Team Building Image"
                            className="transition-all duration-500 hover:scale-105 hover:shadow-image-hover-lg"
                        />
                    </div>

                    <div className="w-full sm:w-[40%] text-center sm:text-left">
                        <p className="text-[18px] text-[rgba(41,49,61,0.49)] font-Paprika">
                            As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.
                        </p>
                        <h2 className="text-[36px] text-[#29313D] font-openSans font-semibold mt-2">
                            Jonathon
                        </h2>

                        <div className="flex gap-5 mt-5 text-[30px] justify-center sm:justify-start">
                            <AiFillGoogleCircle className="transition-transform transform hover:scale-125 hover:text-[#FD5F36] duration-300" />
                            <FaTwitter className="transition-transform transform hover:scale-125 hover:text-[#1DA1F2] duration-300" />
                            <FaLinkedin className="transition-transform transform hover:scale-125 hover:text-[#0077B5] duration-300" />
                            <FaGithub className="transition-transform transform hover:scale-125 hover:text-[#FD5F36] duration-300" />
                        </div>

                        <div className="flex gap-5 mt-10 text-[30px] justify-center sm:justify-start">
                            <BiSolidChevronLeftCircle className="hover:text-[#8454F5] h-[50px] w-[50px] bg-[#F3EEFE] transition-colors duration-300" />
                            <BiSolidChevronRightCircle className="hover:text-[#8454F5] h-[50px] w-[50px] bg-[#F3EEFE] transition-colors duration-300" />
                        </div>
                    </div>

                    <div className="w-full sm:w-[20%]">
                        <img
                            src={rightplanimg1}
                            alt="Plan Image"
                            className=" "
                        />
                    </div>
                </div>


                <div className="w-full md:w-1/2 mx-auto text-center py-16 md:py-32">
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] text-[#29313D] font-openSans font-bold">
                        Ready to get started? Start your free trial.
                    </h2>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#29313D] font-Poppins mt-5 font-normal">
                        Free 30 days trial | Exclusive Support | No Fees
                    </p>

                    <div className="mt-8 flex flex-col lg:flex-row items-center gap-3">
                        <div className="relative w-full lg:w-[420px]">
                            {/* Input field with the email icon */}
                            <input
                                className="text-[14px] lg:text-[16px] font-Inter bg-[#F3EEFE] h-[50px] w-full outline-none rounded-lg pl-12 pr-5"
                                type="email"
                                placeholder="Enter your Gmail address"
                            />
                            {/* Email Icon */}
                            <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4B70F5] text-[20px]" />
                        </div>

                        <button
                            className="h-[50px] w-full sm:w-[220px] lg:w-[200px] text-[#FFFF] font-Inter font-bold outline-none rounded-lg bg-[#8454F5] hover:bg-[#7037b0] transition-all duration-300 ease-in-out"
                        >
                            Try for free
                        </button>
                    </div>

                </div>

            </Container>
        </section>
    )
}

export default RightPlanPart;
