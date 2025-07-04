import { NavLink } from 'react-router';

export default function SpecialDishSection() {
  return (
    <section
      className="flex flex-col lg:flex-row relative
      bg-white text-gray-900
      dark:bg-black dark:text-[#c59d5f]"
    >
      {/* Left Image Section */}
      <div className="lg:w-1/2 w-full">
        <img
          src="https://i.postimg.cc/2SMSpyj1/1-c-Wnjs2-Y0-9-qb3-XTWd-Gr-A-1.jpg"
          alt="Special Dish"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center px-10 py-12 relative">
        <div
          className="text-sm tracking-widest
          text-blue-600 dark:text-[#c59d5f] mb-2"
        >
          SPECIAL DISH
        </div>
        <h2
          className="text-5xl font-serif font-semibold mb-6
          text-blue-500 dark:text-[#c59d5f]"
        >
          Lobster
          <br />
          Tortellini
        </h2>
        <p
          className="mb-6
          text-blue-500 dark:text-[#c59d5f]"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the when an unknown printer took a galley of type.
        </p>

        <div className="flex items-center mb-6">
          <span className="line-through text-gray-500 dark:text-gray-400 mr-3">
            $40.00
          </span>
          <span className="text-blue-500 dark:text-[#c59d5f] text-xl">
            $20.00
          </span>
        </div>
        <NavLink to="/allRecipe">
          <button
            className="border border-blue-500 dark:border-[#c59d5f]
            text-blue-500 dark:text-[#c59d5f]
            px-6 py-2 hover:bg-blue-500 dark:hover:bg-[#c59d5f]
            hover:text-black dark:hover:text-black
            transition-all w-max"
          >
            VIEW ALL MENU
          </button>
        </NavLink>

        {/* Bottom right extra image */}
        <img
          src="https://i.postimg.cc/50SC6JKq/shape-9.png"
          alt="Extra Dish"
          className="absolute bottom-0 right-0 w-28 lg:w-40"
        />
      </div>
    </section>
  );
}
