import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import horizental from "./assats/horizontal ad 2.png";
import {
  FaHeart,
  FaShareAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center ">
        <img src={horizental} alt="Example" className="w-[70%] h-auto m-10" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 space-y-4">
          {/* Image Slider (placeholder) */}
          <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Image */}
            <img
              src={images[current]}
              alt="Slide"
              className="w-full h-full object-cover"
            />

            {/* Top Left Icons */}
            <div className="absolute top-2 left-2 flex gap-2">
              <button className="bg-white p-2 rounded-full shadow">
                <FaShareAlt className="text-gray-700" />
              </button>
              <button className="bg-white p-2 rounded-full shadow">
                <FaHeart className="text-orange-400" />
              </button>
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute bottom-2 left-2 bg-white p-2 rounded-full shadow"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow"
            >
              <FaChevronRight className="text-gray-700" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === current ? "bg-[#FFA424]" : "bg-white"
                  } border border-gray-400`}
                />
              ))}
            </div>
          </div>

          {/* Property Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center bg-white p-4 rounded shadow">
            <div>
              <p className="font-semibold">Building Type</p>
              <p>Studio</p>
            </div>
            <div>
              <p className="font-semibold">Building Size</p>
              <p>14 x 32</p>
            </div>
            <div>
              <p className="font-semibold">Color</p>
              <p>Dark Grey</p>
            </div>
            <div>
              <p className="font-semibold">Condition</p>
              <p>Pre-Loved</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 space-y-4">
          {/* Price Box */}
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-orange-500 text-2xl font-bold">
              $13,328.00 <span className="text-orange-300">+ Taxes</span>
            </p>
            <p className="text-sm text-gray-500">
              Free delivery up to 30 miles
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-orange-400 p-4 rounded space-y-2">
            <h1 className="font-bold text-[#002D4A]">Contact Dealer</h1>
            <hr className="text-black"></hr>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 rounded"
              rows="4"
            >
              Hello, I'm interested in Yoder Storage Building’s shed with SHIN:
              395390. Link of the shed: https://shedclick.com/395390 Thank you!
            </textarea>
            <button className="w-full bg-blue-900 text-white py-2 rounded">
              Send Message
            </button>
          </div>

          {/* Dealer Info */}
          <div className="bg-white p-4 rounded shadow">
            <h1 className="text-[#002D4A] font-semibold m-2">Dealer Profile</h1>
            <hr className="text-[#002D4A] m-2"></hr>
            <p className="font-semibold">Yoder Storage Buildings</p>
            <p className="text-sm text-gray-500">Member Since Apr 09, 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
