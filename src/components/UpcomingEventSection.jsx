import React from 'react';
import { NavLink } from 'react-router';

const events = [
  {
    date: '15/09/2022',
    category: 'FOOD, FLAVOUR',
    description: 'Flavour so good you’ll try to eat with your eyes.',
    image:
      'https://i.postimg.cc/k2LTJ84X/220202-Crown-Melbourne-Restaurants-Silks4-1200px.jpg',
  },
  {
    date: '08/09/2022',
    category: 'HEALTHY FOOD',
    description: 'Flavour so good you’ll try to eat with your eyes.',
    image: 'https://i.postimg.cc/VSMDd6r9/pexels-photo-262978.jpg',
  },
  {
    date: '03/09/2022',
    category: 'RECIPIE',
    description: 'Flavour so good you’ll try to eat with your eyes.',
    image: 'https://i.postimg.cc/VJJ7P4zV/shutterstock-642632641.jpg',
  },
];

const UpcomingEventSection = () => {
  return (
    <section className="bg-white dark:bg-black text-gray-900 dark:text-[#c59d5f] py-16 px-4">
      <h2 className="text-4xl text-center font-serif mb-12 text-blue-800 dark:text-[#c59d5f]">
        Upcoming Event
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-md shadow-lg cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={event.image}
              alt="event"
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Date Tag */}
            <div
              className="absolute top-4 left-4 px-3 py-1 text-sm font-semibold
              bg-white dark:bg-black
              text-blue-800 dark:text-[#c59d5f]
              z-20
              rounded"
            >
              {event.date}
            </div>

            {/* Sliding Overlay */}
            <div className="absolute inset-0 z-10 overflow-hidden">
              <div className="absolute -left-full top-0 w-full h-full bg-black opacity-20 skew-x-[-20deg] transition-all duration-700 group-hover:left-0" />
            </div>

            {/* Text Content */}
            <div className="absolute bottom-6 left-6 right-6 text-center z-20">
              <div
                className="
                  text-sm tracking-widest
                  text-blue-800 dark:text-[#c59d5f] mb-2
                  bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-60
                  px-3 py-1 rounded inline-block
                "
              >
                {event.category}
              </div>
              <p
                className="
                  text-lg font-light
                  text-gray-900 dark:text-[#c59d5f]
                  bg-white  bg-opacity-60 dark:bg-black dark:bg-opacity-60
                  px-3 py-2 rounded mt-2
                "
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Button */}
      <div className="text-center mt-12">
        <NavLink to="/blogs">
          <button
            className="border border-blue-800 dark:border-[#c59d5f]
            text-blue-800 dark:text-[#c59d5f]
            px-6 py-2
            hover:bg-blue-800 dark:hover:bg-[#c59d5f]
            hover:text-white dark:hover:text-black
            transition-colors duration-300 rounded"
          >
            VIEW OUR BLOG
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default UpcomingEventSection;
