import React from 'react';

const StrengthSection = () => {
  const items = [
    {
      title: 'Hygienic Food',
      icon: 'https://i.postimg.cc/vD5gkyrg/features-icon-1.png',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting.',
    },
    {
      title: 'Fresh Environment',
      icon: 'https://i.postimg.cc/N5Y9wnDN/features-icon-2.png',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting.',
    },
    {
      title: 'Skilled Chefs',
      icon: 'https://i.postimg.cc/GHQB3jSb/features-icon-3.png',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting.',
    },
    {
      title: 'Event & Party',
      icon: 'https://i.postimg.cc/XrYrryTd/features-icon-4.png',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-[#0f0f0f]">
      <h1 className="text-2xl font-bold text-blue-700 dark:text-[#c59d5f] text-center p-2 mt-2">
        Why Choose Us
      </h1>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl text-blue-700 dark:text-[#c59d5f] font-serif mb-12">
          Our Strength
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#181818] p-8 rounded-lg shadow-md transition hover:shadow-lg"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mx-auto mb-6 h-16 transition-transform duration-700 group-hover:rotate-[360deg]"
              />
              <h3 className="text-blue-700 dark:text-white text-xl font-serif mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthSection;
