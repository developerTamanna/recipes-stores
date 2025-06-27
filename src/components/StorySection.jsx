import React from 'react';

const StorySection = () => {
  return (
    <section className=" text-yellow-500 py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Side - Text */}
      <div className="md:w-1/2 z-10">
        <p className="text-sm tracking-widest text-yellow-600 mb-2">OUR STORY</p>
        <div className="h-[2px] w-12 bg-yellow-600 mb-6"></div>
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Every Flavor<br />Tells a Story
        </h2>
        <p className="text-[#c59d5f] mb-6 leading-relaxed">
          At our kitchen, food is not just prepared — it is curated with love, memory, and a touch of heritage. From sizzling street bites to soulful homestyle dishes, each recipe has a tale to tell. Whether it's the comfort of your mother's cooking or the thrill of a new taste, we bring together the best of both worlds — tradition and creativity. Sit back, take a bite, and let your taste buds explore a journey beyond the ordinary.


        </p>
        <p className="font-semibold mb-1">Book Through Call</p>
        <p className="text-yellow-500 text-xl mb-6">+80 (400) 123 4567</p>
        {/* <button className="border border-yellow-500 px-6 py-3 text-sm tracking-widest hover:bg-yellow-500 hover:text-black transition duration-300">
          READ MORE
        </button> */}
      </div>

      {/* Right Side - Images */}
      <div className="md:w-1/2 relative mt-10 md:mt-0">
        {/* Background Image */}
        <img
          src="https://i.postimg.cc/wvrW25xf/premium-photo-1661883237884-263e8de8869b.jpg"
          alt="Restaurant"
          className="rounded-md w-full h-auto object-cover"
        />

        {/* Foreground Image */}
        <img
          src="https://i.postimg.cc/W1sQhndg/chef-cooking-kitchen-while-wearing-professional-attire-23-2151208326.avif"
          alt="Chef"
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-64 rounded shadow-lg"
        />

        {/* Optional Decoration (like overlay pattern) */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pattern bg-cover opacity-60 pointer-events-none" />
      </div>

      {/* Optional Floating Circle Badge */}
      <div className="absolute top-8 right-8 bg-black text-white border border-yellow-500 rounded-full w-28 h-28 flex flex-col items-center justify-center text-xs text-center leading-tight">
        <span className="text-[10px] tracking-widest">SINCE</span>
        <span className="text-xl font-bold">1950</span>
        <span className="mt-1 uppercase">Quality Food</span>
      </div>

      {/* Optional floating garlic/leaf decor */}
      <img src="https://i.postimg.cc/xjtjfcxs/shape-3.png" alt="decor" className="absolute left-0 bottom-0 w-20" />
    </section>
  );
};

export default StorySection;
