import React from 'react';
import Container from './Container';
import bannerimg from "../assets/bannerimg.png";

const Banner = () => {
  return (
    <section
      className="py-16"
      style={{
        background: 'linear-gradient(to right, rgb(181, 186, 205) 5%, rgb(254, 195, 95) 100%)',
      }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-5 lg:px-0 text-center lg:text-left">
            <h2 className="text-[32px] lg:text-[64px] text-[#29313D] font-openSans font-bold mt-5 lg:mt-10">
              Professional Task Manager Tool To Grow
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#29313D] w-full lg:w-[580px] font-Paprika font-normal mt-3 pr-5 border-l-4 border-[#FFC556] pl-5 mx-auto lg:mx-0">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
            </p>
            <div className="relative mt-8">
              <input
                className="text-[14px] lg:text-[16px] font-Inter h-[50px] w-full lg:w-[420px] outline-none rounded-lg pl-5"
                type="text"
                placeholder="Join with us using your gmail address"
              />
              <button
                className="absolute top-[-32px] right-0 lg:left-[330px] h-[50px] w-[100px] text-[#FFFF] font-Inter font-bold mt-8 outline-none rounded-lg bg-[#8454F5] hover:bg-[#7037b0] transition-all duration-300 ease-in-out"
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[45%] mt-8 lg:mt-0 flex justify-center">
            <img className="w-[90%] lg:w-[90%] object-contain" src={bannerimg} alt="bannerimg" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
