import { NavLink } from "react-router";

export default function SpecialDishSection() {
  return (
    <section className="flex flex-col lg:flex-row  text-white relative">
      {/* Left Image Section */}
      <div className="lg:w-1/2 w-full">
        <img
          src="https://i.postimg.cc/2SMSpyj1/1-c-Wnjs2-Y0-9-qb3-XTWd-Gr-A-1.jpg" // Update with actual image path
          alt="Special Dish"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center px-10 py-12 relative">
        <div className="text-sm tracking-widest text-yellow-600 mb-2">
          SPECIAL DISH
        </div>
        <h2 className="text-5xl font-serif font-semibold mb-6 text-yellow-500 dark:text-white">
          Lobster
          <br />
          Tortellini
        </h2>
        <p className="text-yellow-500 dark:text-white mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the when an unknown printer took a galley of type.
        </p>

        <div className="flex items-center mb-6">
          <span className="line-through text-gray-500 mr-3">$40.00</span>
          <span className="text-yellow-500 text-xl">$20.00</span>
        </div>
        <NavLink to="/allRecipe">
          <button className="border border-yellow-500 text-yellow-500 px-6 py-2 hover:bg-yellow-500 hover:text-black transition-all w-max">
            VIEW ALL MENU
          </button>
        </NavLink>

        {/* Bottom right extra image */}
        <img
          src="https://i.postimg.cc/50SC6JKq/shape-9.png" // Add the extra corner image
          alt="Extra Dish"
          className="absolute bottom-0 right-0 w-28 lg:w-40"
        />
      </div>
    </section>
  );
}
