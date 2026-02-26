import { NavLink } from "react-router-dom";
import images from "../assets/images/img4.jpeg";

const linkClasses = ({ isActive }) =>
  `group flex items-center gap-4 px-6 py-3 rounded-xl transition-all duration-300 font-medium text-lg ${
    isActive
      ? "bg-white text-blue-700 shadow-xl scale-105"
      : "text-white hover:bg-white/20 hover:scale-105"
  }`;

const SideBar = () => {
  return (
    <div className="w-80 h-screen flex flex-col justify-between px-8 py-10 
    bg-gradient-to-b from-sky-500 via-blue-600 to-blue-800 
    shadow-2xl backdrop-blur-lg">

      {/* Profile Section */}
      <div className="text-center space-y-3">
        <h2 className="font-extrabold text-2xl tracking-wide text-white">
          Pratiksha Chaudhary
        </h2>
        <p className="text-sm font-semibold text-blue-100 tracking-widest">
          FRONTEND DEVELOPER
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center my-6">
        <div className="relative">
          <img
            src={images}
            alt="myimg"
            className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-2xl"
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-pulse"></div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-4">
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>

        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>

        <NavLink to="/service" className={linkClasses}>
          Service
        </NavLink>

        <NavLink to="/portfolio" className={linkClasses}>
          Portfolio
        </NavLink>
      </div>

      {/* Download Button */}
      <a
        href="#"
        className="mt-8 bg-white text-blue-700 font-bold py-3 rounded-xl 
        text-center shadow-lg hover:shadow-2xl hover:scale-105 
        transition-all duration-300"
      >
        DOWNLOAD CV
      </a>
    </div>
  );
};

export default SideBar;