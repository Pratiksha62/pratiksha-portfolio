import {
  BiSolidUserVoice,
  BiCodeAlt,
  BiPaint,
  BiCamera,
  BiMobileAlt,
  BiBullseye,
  BiSearchAlt2,
  BiBookAlt,
  BiBarChartAlt2,
} from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      icon: <BiSolidUserVoice size={40} />,
      name: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing user interfaces with seamless user experiences.",
    },
    {
      icon: <BiCodeAlt size={40} />,
      name: "Web Development",
      description:
        "Building fast, responsive, and scalable websites tailored to your business needs.",
    },
    {
      icon: <BiPaint size={40} />,
      name: "Graphic Design",
      description:
        "Designing eye-catching graphics, branding materials, and visual content that stand out.",
    },
    {
      icon: <BiCamera size={40} />,
      name: "Photography/Videography",
      description:
        "Capturing high-quality photos and videos to elevate your brand’s visual identity.",
    },
    {
      icon: <BiMobileAlt size={40} />,
      name: "Mobile App Development",
      description:
        "Developing user-friendly mobile applications for both iOS and Android platforms.",
    },
    {
      icon: <BiBullseye size={40} />,
      name: "Digital Marketing",
      description:
        "Driving growth through targeted digital strategies, social media campaigns.",
    },
    {
      icon: <BiSearchAlt2 size={40} />,
      name: "SEO Optimization",
      description:
        "Improving search engine rankings to increase visibility and attract organic traffic.",
    },
    {
      icon: <BiBookAlt size={40} />,
      name: "Content Writing",
      description:
        "Crafting engaging, informative, and SEO-friendly content for websites, blogs.",
    },
    {
      icon: <BiBarChartAlt2 size={40} />,
      name: "Analytics/Reporting",
      description:
        "Providing detailed insights and performance reports to guide data-driven decisions.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 px-8 py-16">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide a wide range of creative and technical services to help your business grow and succeed in the digital world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden"
          >
            {/* Gradient Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-500"></div>

            <div className="relative z-10">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition duration-500">
                {service.icon}
              </div>

              <h2 className="text-xl font-bold mb-4 text-gray-800">
                {service.name}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Service };