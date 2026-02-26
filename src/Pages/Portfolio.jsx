import React from "react";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import drus from "../assets/images/img5.jpeg"
import ddd from "../assets/images/img6.jpeg"

export const Portfolio = () => {

  const [SelectedImage, setSelectedImage] = React.useState(null);
  const closeModel = ()=> setSelectedImage(null);
  const ram = [img1, img2, img3, img4, drus, ddd ];
  return (    <>    <div className=" w-277.5 h-162.5 fixed p-5 gap-5  grid grid-cols-3">
      {ram.map((b) => (
        <div className="shadow-md transform transition-all hover:-translate-y-2 duration-500 rounded-md" onClick={() => setSelectedImage(b)}>
          <img src={b} alt="firsimg" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
    {SelectedImage && (
      <div
      className="fixed inset-0 backdrop-blur-sm bg-opacity-60 flex items-center justify-center z-50"
      onClick={closeModel}
      >

      <div className="relative"
      onClick={(e) => e.stopPropagation()}>

      <button 
      onClick={closeModel}
      className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg text-gray-700 hover:text-red-500 text-2xl w-10 h-10 flex items-center justify-center"
      >
      X
      </button>

      <img
      src={SelectedImage}
      className="max-w-[80vw] max-h-[80vh] rounded-lg "
      />
      </div>
      </div>
    )}
    </>
  );
};