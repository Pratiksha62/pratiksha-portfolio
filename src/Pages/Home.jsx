import React from "react";
import { Typewriter } from "react-simple-typewriter";
import images from "../assets/images/img4.jpeg";

export const Home = () => {
  return (
    <div className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10 bg-gradient-to-r from-gray-100 to-blue-50">

      {/* Left Section */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-medium text-gray-700">
          Hi, I am{" "}
          <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Pratiksha Chaudhary
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
          <Typewriter
            words={[
              "Frontend Developer",
              "Web Developer",
              "React Developer",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-lg">
I am a passionate Frontend Developer who loves creating modern, responsive, and user-friendly web applications. hii
I enjoy turning ideas into interactive digital experiences using React and Tailwind CSS. 
My goal is to continuously improve my skills and build impactful products that make a difference........
</p>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105">
            Hire Me
          </button>
          <button className="border-2 border-sky-500 text-sky-600 px-6 py-3 rounded-xl hover:bg-sky-500 hover:text-white transition-all duration-300">
            View Portfolio
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative">
          <img
            src={images}
            alt="This is me"
            className="w-72 md:w-96 rounded-3xl shadow-2xl object-cover"
          />
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500 blur-2xl opacity-30"></div>
        </div>
      </div>
    </div>
  );
};