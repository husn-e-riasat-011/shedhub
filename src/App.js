import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import horizental from "./assats/horizontal ad 2.png";
import SimilarSheds from "./component/SimilarSheds";
import Footer from "./component/footer";
// import Foot from "./component/foot";
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
        <img
          src={horizental}
          alt="Example"
          className="max-w-[80%] h-auto m-10"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-6 ">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 space-y-4 bg-white p-4 rounded shadow">
          <h1 className="text-[#002D4A] font-semibold ">Studio Shed</h1>
          <p>With Black LP Barn Siding</p>
          <p className="flex items-center gap-2 text-sm text-gray-700">
            <span className="text-red-500">
              <FaMapMarkerAlt />
            </span>
            5000 Old Preston Highway North, Shepherdsville, KY
          </p>
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
          {/* Details */}
          <div className="grid grid-cols-2 gap-4 mt-4 border-b pb-4 text-sm">
            <p>
              <span className="font-semibold">Main Color:</span> Black
            </p>
            <p>
              <span className="font-semibold">Roofing:</span> Metal
            </p>
            <p>
              <span className="font-semibold">Roof Color:</span> Shiney Black
            </p>
            <p>
              <span className="font-semibold">Siding:</span> Wood
            </p>
            <p>
              <span className="font-semibold">Siding Color:</span> Clay
            </p>
            <p>
              <span className="font-semibold">Last Updated:</span> 02 Jun 2025
            </p>
          </div>

          {/* Shed ID */}
          <div className="flex justify-between items-center mt-4">
            <p className="font-medium">Shed ID</p>
            <p className="font-bold">395930</p>
          </div>
          {/* Map */}
          {/* Map */}
          <div className="mt-4">
            <iframe
              title="Map - 5000 Old Preston Hwy N"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.0970260955945!2d-85.71276572416526!3d37.9929289009927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8869070ff12be59f%3A0x8f82bb5e5edc670b!2s5000%20Old%20Preston%20Hwy%20N%2C%20Shepherdsville%2C%20KY%2040170%2C%20USA!5e0!3m2!1sen!2s!4v1723298456000!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="font-semibold text-lg border-b pb-2">
              Shed Description
            </h2>
            <p className="text-gray-600 mt-3 text-sm">
              Our studio sheds are just that. Have you ever dreamed of your
              ideal office shed? You no longer have to wait. Our studio sheds
              are designed just for you, and we have in-stock options. You can
              also customize this deluxe studio shed to meet your specific
              needs.
            </p>
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
          <div className="w-full lg:w-80 bg-white p-6 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-2">Dealer Profile</h2>
            <div className="border-b pb-4 mb-4">
              <p className="font-medium">Yoder Storage Buildings</p>
              <p className="text-sm text-gray-500">Member Since Apr 09, 2017</p>
            </div>
            <div className="space-y-3 text-sm">
              <p>www.yodersbuildings.com</p>
              <p>info@yodersbuildings.com</p>
              <p>3322 Mennonite School Rd, Montezuma, GA</p>
              <p className="text-orange-500 font-bold text-lg">478-375-4784</p>
            </div>
            <button className="mt-6 text-xs text-gray-500 underline">
              Report This Ad
            </button>
          </div>
        </div>
      </div>
      <SimilarSheds />
      <Footer />
      {/* <Foot /> */}
    </div>
  );
}

export default App;
