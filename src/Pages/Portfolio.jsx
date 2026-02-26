import React from "react";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import drus from "../assets/images/img5.jpeg";
import ddd from "../assets/images/img6.jpeg";

export const Portfolio = () => {
  const [SelectedImage, setSelectedImage] = React.useState(null);
  const closeModel = () => setSelectedImage(null);

  const ram = [img1, img2, img3, img4, drus, ddd];

  return (
    <>
      {/* Gallery */}
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-10">
        <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          My Portfolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ram.map((b, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              onClick={() => setSelectedImage(b)}
            >
              <img
                src={b}
                alt="portfolio"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white font-semibold text-lg tracking-wide">
                  View Image
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {SelectedImage && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={closeModel}
        >
          <div
            className="relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModel}
              className="absolute -top-5 -right-5 bg-white hover:bg-red-500 hover:text-white transition-all duration-300 rounded-full shadow-lg text-gray-700 text-xl w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>

            <img
              src={SelectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};