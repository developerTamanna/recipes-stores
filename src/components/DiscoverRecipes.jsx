import React from 'react';

const DiscoverRecipes = () => {
  const images = [
  "https://i.postimg.cc/NKcxSb2Y/636657968620589435-Mc-Donald-s-New-Menu.webp",
  "https://i.postimg.cc/hz6Lr0Rk/98049389.avif",
  "https://i.postimg.cc/8jWHZx5t/chicken-sandwich-grilled-classic-american-260nw-2038439963.webp",
  "https://i.postimg.cc/dhj9YdGC/digital-restaurant-menu-horizontal-format-23-2148649585.avif",
  "https://i.postimg.cc/PLfQrxMR/istockphoto-1045891638-612x612.jpg",
  "https://i.postimg.cc/CZvHZgPL/Taco-Bell-Has-Added-A-Bunch-of-New-Items-to-Its-Menu-Heres-a-Full-List-of-All-Their-Additions.jpg",
  "https://i.postimg.cc/2LW4XBzV/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant-Content-image2-min-10.png",
  "https://i.postimg.cc/hXsVwnqb/l-intro-1706118904.jpg"
];


  return (
    <section className=" px-4 lg:px-16 py-12  text-white text-center">
      <h2 className="text-4xl font-semibold mb-2 text-[#c59d5f]">Discover Delicious Creations</h2>
      <p className=" max-w-xl mx-auto mb-10  text-[#c59d5f]">
        Browse through a vibrant gallery of community-shared recipes, each one a testament to culinary creativity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((url, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden border border-[#c59d5f] group"
          >
            <img
              src={url}
              alt={`recipe-${index}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover Shadow */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverRecipes;
