import React from "react";

export const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-sky-400 to-blue-600 px-6 py-10">

      {/* Inner Container */}
      <div className="w-full max-w-6xl bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Side */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center p-10">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Hello, How are you?
            </h1>
            <p className="text-blue-100 text-lg">
              We'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 bg-white flex flex-col justify-center p-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Contact Me
          </h2>

          <form
            className="space-y-5"
            action="https://formsubmit.co/howisyou88@email.com"
            method="POST"
          >
            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Name
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                name="name"
                type="text"
                placeholder="Your Full Name"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Email
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                name="email"
                type="email"
                placeholder="Something@gmail.com"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                name="Message"
                rows="4"
                placeholder="Write Message Here"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};