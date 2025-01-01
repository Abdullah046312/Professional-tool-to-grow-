import React from 'react'
import Logos from "../assets/Logos.png"
import solutionsicon1 from "../assets/solutionsicon1.png"
import solutionsicon2 from "../assets/solutionsicon2.png"
import solutionsicon3 from "../assets/solutionsicon3.png"
import solutionsicon4 from "../assets/solutionsicon4.png"
import solutionsicon5 from "../assets/solutionsicon5.png"
import Container from './Container'


const BestSolutionsPart = () => {
  return (
    <section className='py-10'>
        <Container>
        <div className="text-center md:text-left">
  <img 
    src={Logos} 
    alt="Logo" 
    className="w-full md:w-auto md:mx-0 mx-auto" 
  />
</div>


            <div className="flex flex-col md:flex-row justify-between mt-10">
                <div className="w-full md:w-[40%] mb-5 md:mb-0">
                    <h2 className='text-[36px] sm:text-[48px] md:text-[56px] text-[#29313D] font-openSans font-bold'>
                        The best solutions in one tool
                    </h2>
                </div>
                <div className="w-full md:w-[40%] mt-3 md:mt-0">
                    <p className='text-[16px] sm:text-[18px] text-[#29313D] font-Paprika font-normal mt-3 pr-5 border-l-4 border-[#FFC556] pl-5'>
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.
                    </p>
                </div>
            </div>

            {/* Solution Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 cursor-pointer ">
                <div className="w-full border-[2px] border-[rgba(132,84,245,0.4)] rounded-2xl py-5 px-5 group hover:bg-gradient-to-r hover:from-[#8454F5] hover:to-[#FEC35F] hover:scale-105 hover:text-[#FFFF] hover:shadow-2xl hover:rotate-2 hover:animate-bounce hover:border-none hover:outline-none transition-all duration-300 ease-in-out">
                    <div className="flex gap-5 items-center">
                        <img src={solutionsicon1} alt="Solution Icon 1" />
                        <h4 className="text-[24px] sm:text-[28px] text-[#29313D] font-openSans font-bold group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                            Set Daily Alarms
                        </h4>
                    </div>
                    <p className="text-[14px] sm:text-[18px] text-[rgba(41,49,61,0.5)] font-Paprika font-normal mt-5 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                    </p>
                    <h5 className="text-[16px] sm:text-[20px] text-[#29313D] font-Inter font-semibold mt-3 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Read more
                    </h5>
                </div>

                <div className="w-full border-[2px] border-[rgba(132,84,245,0.4)] rounded-2xl py-5 px-5 group hover:bg-gradient-to-r hover:from-[#8454F5] hover:to-[#FEC35F] hover:scale-105 hover:text-[#FFFF] hover:shadow-2xl hover:rotate-2 hover:animate-bounce hover:border-none hover:outline-none transition-all duration-300 ease-in-out">
                    <div className="flex gap-5 items-center">
                        <img src={solutionsicon2} alt="Solution Icon 2" />
                        <h4 className="text-[24px] sm:text-[28px] text-[#29313D] font-openSans font-bold group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                            Advanced Search
                        </h4>
                    </div>
                    <p className="text-[14px] sm:text-[18px] text-[rgba(41,49,61,0.5)] font-Paprika font-normal mt-5 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                    </p>
                    <h5 className="text-[16px] sm:text-[20px] text-[#29313D] font-Inter font-semibold mt-3 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Read more
                    </h5>
                </div>

                <div className="w-full border-[2px] border-[rgba(132,84,245,0.4)] rounded-2xl py-5 px-5 group hover:bg-gradient-to-r hover:from-[#8454F5] hover:to-[#FEC35F] hover:scale-105 hover:text-[#FFFF] hover:shadow-2xl hover:rotate-2 hover:animate-bounce hover:border-none hover:outline-none transition-all duration-300 ease-in-out">
                    <div className="flex gap-5 items-center">
                        <img src={solutionsicon3} alt="Solution Icon 3" />
                        <h4 className="text-[24px] sm:text-[28px] text-[#29313D] font-openSans font-bold group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                            Share Blog Posts
                        </h4>
                    </div>
                    <p className="text-[14px] sm:text-[18px] text-[rgba(41,49,61,0.5)] font-Paprika font-normal mt-5 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                    </p>
                    <h5 className="text-[16px] sm:text-[20px] text-[#29313D] font-Inter font-semibold mt-3 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Read more
                    </h5>
                </div>
            </div>

            {/* Additional Solution Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 cursor-pointer">
                <div className="w-full border-[2px] border-[rgba(132,84,245,0.4)] rounded-2xl py-5 px-5 group hover:bg-gradient-to-r hover:from-[#8454F5] hover:to-[#FEC35F] hover:scale-105 hover:text-[#FFFF] hover:shadow-2xl hover:rotate-2 hover:animate-bounce hover:border-none hover:outline-none transition-all duration-300 ease-in-out">
                    <div className="flex gap-5 items-center">
                        <img src={solutionsicon4} alt="Solution Icon 4" />
                        <h4 className="text-[24px] sm:text-[28px] text-[#29313D] font-openSans font-bold group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                            Archive Content
                        </h4>
                    </div>
                    <p className="text-[14px] sm:text-[18px] text-[rgba(41,49,61,0.5)] font-Paprika font-normal mt-5 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                    </p>
                    <h5 className="text-[16px] sm:text-[20px] text-[#29313D] font-Inter font-semibold mt-3 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Read more
                    </h5>
                </div>
                <div className="w-full border-[2px] border-[rgba(132,84,245,0.4)] rounded-2xl py-5 px-5 group hover:bg-gradient-to-r hover:from-[#8454F5] hover:to-[#FEC35F] hover:scale-105 hover:text-[#FFFF] hover:shadow-2xl hover:rotate-2 hover:animate-bounce hover:border-none hover:outline-none transition-all duration-300 ease-in-out">
                    <div className="flex gap-5 items-center">
                        <img src={solutionsicon5} alt="Solution Icon 5" />
                        <h4 className="text-[24px] sm:text-[28px] text-[#29313D] font-openSans font-bold group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                            Secure Checkout
                        </h4>
                    </div>
                    <p className="text-[14px] sm:text-[18px] text-[rgba(41,49,61,0.5)] font-Paprika font-normal mt-5 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                    </p>
                    <h5 className="text-[16px] sm:text-[20px] text-[#29313D] font-Inter font-semibold mt-3 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Read more
                    </h5>
                </div>
                <div className="w-full border-[2px] border-[rgba(132,84,245,0.4)] rounded-2xl py-5 px-5 group hover:bg-gradient-to-r hover:from-[#8454F5] hover:to-[#FEC35F] hover:scale-105 hover:text-[#FFFF] hover:shadow-2xl hover:rotate-2 hover:animate-bounce hover:border-none hover:outline-none transition-all duration-300 ease-in-out">
                    <div className="flex gap-5 items-center">
                        <img src={solutionsicon4} alt="Solution Icon 5" />
                        <h4 className="text-[24px] sm:text-[28px] text-[#29313D] font-openSans font-bold group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Faster Response Time
                        </h4>
                    </div>
                    <p className="text-[14px] sm:text-[18px] text-[rgba(41,49,61,0.5)] font-Paprika font-normal mt-5 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                    </p>
                    <h5 className="text-[16px] sm:text-[20px] text-[#29313D] font-Inter font-semibold mt-3 group-hover:text-[#FFFF] group-hover:animate-pulse transition-all duration-300 ease-in-out">
                        Read more
                    </h5>
                </div>
                
            </div>
        </Container>
    </section>
  )
}

export default BestSolutionsPart
