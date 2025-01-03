import React from 'react'
import Container from './Container'
import joinimg from "../assets/joinimg.png"
import distributioning from "../assets/distributioning.png"
import { AiOutlineArrowRight } from "react-icons/ai";

const BusinessTasks = () => {
    return (
        <section className='py-16'>
            <Container>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-[50%] mb-8 md:mb-0">
                        <img src={joinimg} alt="Join Business" className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-[45%] mt-10 md:mt-0">
                        <h2 className='text-[32px] sm:text-[48px] md:text-[56px] text-[#29313D] font-openSans font-bold'>
                            Join with any business tasks and any goals
                        </h2>
                        <p className='text-[16px] sm:text-[18px] text-[#29313D] font-Paprika font-normal mt-3'>
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.
                        </p>
                        <button className="relative group h-[50px] w-[200px] text-[#FFFFFF] font-Inter font-bold mt-8 outline-none rounded-md bg-[#8454F5] overflow-hidden transition-all duration-300 ease-in-out">
                            {/* Button Text */}
                            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">Sign up</span>

                            {/* Hover Border Animation */}
                            <span className="absolute top-0 left-0 w-full h-[3px] bg-[#FF6500] scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-top-left"></span>
                            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF6500] scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-bottom-left"></span>
                            <span className="absolute top-0 right-0 w-full h-[3px] bg-[#FF6500] scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-top-right"></span>
                            <span className="absolute bottom-0 right-0 w-full h-[3px] bg-[#FF6500] scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-bottom-right"></span>

                            {/* Background Color Fade */}
                            <span className="absolute top-0 left-0 w-full h-full bg-[#FF6500] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></span>

                            {/* Hover Glow Effect */}
                            <span className="absolute top-0 left-0 w-full h-full bg-[#FF6500] opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500 ease-in-out"></span>
                        </button>

                    </div>
                </div>

                <div className="bg-[rgba(219,204,252,0.56)] lg:h-[120px] lg:w-full py-6 mt-20 flex flex-wrap justify-center text-center rounded-xl">
                    <div className="w-full sm:w-[45%] lg:w-[20%] mb-4 sm:mb-0">
                        <h4 className='text-[20px] text-[#8454F5] font-Paprika font-semibold hover:bg-[#8454F5] hover:text-[#FFFF] hover:py-5 hover:rounded-xl cursor-pointer transition-all'>
                            Artificial Intelligence
                        </h4>
                    </div>
                    <div className="w-full sm:w-[45%] lg:w-[20%] mb-4 sm:mb-0">
                        <h4 className='text-[20px] text-[#8454F5] font-Paprika font-semibold hover:bg-[#8454F5] hover:text-[#FFFF] hover:py-5 hover:rounded-xl cursor-pointer transition-all'>
                            Header Builder
                        </h4>
                    </div>
                    <div className="w-full sm:w-[45%] lg:w-[20%] mb-4 sm:mb-0">
                        <h4 className='text-[20px] text-[#8454F5] font-Paprika font-semibold hover:bg-[#8454F5] hover:text-[#FFFF] hover:py-5 hover:rounded-xl cursor-pointer transition-all'>
                            Safe and Private
                        </h4>
                    </div>
                    <div className="w-full sm:w-[45%] lg:w-[20%]">
                        <h4 className='text-[20px] text-[#8454F5] font-Paprika font-semibold hover:bg-[#8454F5] hover:text-[#FFFF] hover:py-5 hover:rounded-xl cursor-pointer transition-all'>
                            Mobility Solutions
                        </h4>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between mt-32">
                    <div className="w-full lg:w-[40%] mb-8 lg:mb-0">
                        <img src={distributioning} alt="Distributioning" className="w-full h-auto" />
                    </div>
                    <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
                        <h2 className='text-[32px] sm:text-[48px] md:text-[56px] text-[#29313D] font-openSans font-bold'>
                            No more messy distribution lists.
                        </h2>
                        <p className='text-[16px] sm:text-[18px] text-[#29313D] font-Paprika font-normal mt-3'>
                            Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos.
                        </p>
                        <button className="relative group h-[50px] w-[200px] text-[#FFFFFF] font-Inter font-bold mt-8 outline-none rounded-md bg-[#8454F5] overflow-hidden transition-all duration-300 ease-in-out">
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
                </div>
            </Container>
        </section>
    )
}

export default BusinessTasks
