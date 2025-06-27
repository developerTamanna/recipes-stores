import React from 'react';
import { NavLink } from 'react-router';

const Banner = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center px-4 py-10 space-y-10">
      {/* Text Section */}
      <div className="text-center px-4 max-w-2xl space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-[#c59d5f] font-[Orbitron]">
          unleash your culinary
          <br />
          creativity
        </h1>
        <p className="text-sm text-[#c59d5f]">
          Join our vibrant community of food enthusiasts and embark on a
          flavorful journey. Manage your personal recipe collection, discover
          new favorites, and curate a wishlist of must-try dishes. Dive into our
          top-rated recipes and let your cooking adventure begin.
        </p>
        <div className="flex justify-center space-x-4">
          {/* <button className="bg-[#c59d5f] text-black px-4 py-2 rounded hover:bg-[#b3864e] transition">
            Discover
          </button> */}
          <NavLink to="/register">
            <button className="bg-transparent border border-[#c59d5f] text-[#c59d5f] px-4 py-2 rounded hover:bg-[#c59d5f] hover:text-black transition">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full px-4 flex justify-center relative">
        <img
          src="https://i.postimg.cc/vBvmx2qF/682b4f4863ed7474bfdfbe55-c0f7cc1f-dc22-4daf-878e-9321020c1219.avif"
          alt="Culinary dish"
          className="rounded-xl shadow-lg max-w-3xl w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-xl shadow-inner"></div>
      </div>
    </div>
  );
};

export default Banner;
