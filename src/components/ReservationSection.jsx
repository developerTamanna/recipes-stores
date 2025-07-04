// src/components/ReservationSection.jsx
import React from 'react';

const ReservationSection = () => {
  return (
    <section className="bg-white dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:via-[#1a1a1a] dark:to-[#000000] text-black dark:text-white py-16 px-4 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
      {/* Left - Reservation Form */}
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-serif mb-3 text-blue-700 dark:text-[#c59d5f]">
          Online Reservation
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base">
          Booking request{' '}
          <span className="text-blue-700 dark:text-[#c59d5f] font-medium">
            +88–123–123456
          </span>{' '}
          or fill out the order form
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white dark:bg-[#111] border border-blue-700 dark:border-[#c59d5f] px-4 py-3 w-full placeholder-gray-400 dark:placeholder-gray-300 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-[#c59d5f]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-white dark:bg-[#111] border border-blue-700 dark:border-[#c59d5f] px-4 py-3 w-full placeholder-gray-400 dark:placeholder-gray-300 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-[#c59d5f]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="bg-white dark:bg-[#111] border border-blue-700 dark:border-[#c59d5f] px-4 py-3 w-full text-black dark:text-white rounded-md focus:outline-none">
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4+ People</option>
            </select>
            <input
              type="date"
              className="bg-white dark:bg-[#111] border border-blue-700 dark:border-[#c59d5f] px-4 py-3 w-full text-black dark:text-white rounded-md focus:outline-none"
            />
            <select className="bg-white dark:bg-[#111] border border-blue-700 dark:border-[#c59d5f] px-4 py-3 w-full text-black dark:text-white rounded-md focus:outline-none">
              <option>08 : 00 am</option>
              <option>09 : 00 am</option>
              <option>10 : 00 am</option>
              <option>12 : 00 pm</option>
              <option>06 : 00 pm</option>
            </select>
          </div>

          <textarea
            placeholder="Message"
            rows="4"
            className="bg-white dark:bg-[#111] border border-blue-700 dark:border-[#c59d5f] px-4 py-3 w-full placeholder-gray-400 dark:placeholder-gray-300 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 dark:focus:ring-[#c59d5f]"
          ></textarea>

          <button
            type="button"
            className="w-full bg-blue-700 dark:bg-[#c59d5f] hover:bg-blue-800 dark:hover:bg-[#b3864e] text-white dark:text-black font-semibold tracking-widest py-3 rounded-md transition"
          >
            BOOK A TABLE
          </button>
        </form>
      </div>

      {/* Right - Contact Info */}
      <div className="w-full md:pl-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-blue-700 dark:text-[#c59d5f]">
          Contact Us
        </h2>

        <div className="space-y-6 text-sm md:text-base">
          <div>
            <p className="font-semibold">Booking Request</p>
            <p className="text-blue-700 dark:text-[#c59d5f] text-xl font-semibold">
              +88–123–123456
            </p>
          </div>

          <div>
            <p className="font-semibold">Location</p>
            <p className="text-gray-600 dark:text-gray-400">
              Restaurant St, Delicious City,
              <br />
              Sylhet 9578, BD
            </p>
          </div>

          <div>
            <p className="font-semibold">Lunch Time</p>
            <p className="text-gray-600 dark:text-gray-400">
              Monday to Sunday
              <br />
              11.00 am – 2.30pm
            </p>
          </div>

          <div>
            <p className="font-semibold">Dinner Time</p>
            <p className="text-gray-600 dark:text-gray-400">
              Monday to Sunday
              <br />
              05.00 pm – 10.00pm
            </p>
          </div>
        </div>
      </div>

      {/* Leaf image - Optional Decoration */}
      <img
        src="https://i.postimg.cc/c1pKyKrV/shape-7.png"
        alt="leaf"
        className="absolute bottom-4 right-4 w-10 md:w-14 opacity-80"
      />
    </section>
  );
};

export default ReservationSection;
