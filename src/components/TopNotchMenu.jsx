import React from "react";

const menuItems = [
  {
    title: "Breakfast",
    image: "https://i.postimg.cc/Kvf0syY3/galleon-cafe.jpg",
    offset: "md:-translate-y-5",
  },
  {
    title: "Appetizers",
    image: "https://i.postimg.cc/9FQd0wWz/Hot-or-Cold-Crab-Appetizers.jpg",
    offset: "md:translate-y-5",
  },
  {
    title: "Drinks",
    image: "https://i.postimg.cc/tJYgQbjR/Ice-Milk-and-Lemon-Teas-Chilli-Cafe.jpg",
    offset: "md:-translate-y-5",
  },
];

export default function TopNotchMenu() {
  return (
    <section className=" text-white py-20 px-4 text-center mt-16">
      {/* Section Title */}
      <div className="mb-14">
        <p className="text-yellow-500 uppercase tracking-widest text-sm mb-2">
          Flavors for Royalty
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#c59d5f]">
          We Offer Top Notch
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base">
          Discover a world of culinary excellence with our handpicked selection of premium recipes — perfect for every occasion.
        </p>
      </div>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {menuItems.map((item, idx) => (
          <div key={idx} className={`transform transition-transform duration-500 ${item.offset}`}>
            {/* Top pattern */}
            <div className="h-4 w-16 mx-auto mb-3 bg-[url('https://i.postimg.cc/Wp8MBTmV/Screenshot-2025-05-20-180858.png')] bg-cover" />

            {/* Card */}
            <div className="relative group w-full h-[380px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
              {/* Blurred Background on Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-sm scale-100 group-hover:scale-110 transition-all duration-500 ease-in-out z-0"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 z-10" />

              {/* Main Image */}
              <img
                src={item.image}
                alt={item.title}
                className="relative z-20 w-full h-full object-cover scale-100 group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Bottom pattern */}
            <div className="h-4 w-16 mx-auto mt-3 bg-[url('https://i.postimg.cc/Wp8MBTmV/Screenshot-2025-05-20-180858.png')] bg-cover" />

            {/* Title */}
            <h3 className="mt-4 text-xl font-serif text-yellow-500">{item.title}</h3>
            <p className="text-yellow-500 text-sm tracking-wider mt-1 cursor-pointer hover:underline">
              VIEW MENU
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
