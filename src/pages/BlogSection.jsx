import React from 'react';

const blogs = [
  {
    id: 1,
    title: '5 Must-Try Bengali Dishes',
    date: 'June 25, 2025',
    description:
      'Discover the rich flavors of Bengali cuisine—from Shorshe Ilish to Mishti Doi. These dishes are a must for every food lover!',
    image: 'https://i.postimg.cc/fVnbmGQZ/menu-5.png',
  },
  {
    id: 2,
    title: 'How to Perfect Your Biryani',
    date: 'June 20, 2025',
    description:
      'Biryani is more than rice and meat. Learn the art of layering, spicing, and cooking the perfect biryani every time.',
    image: 'https://i.postimg.cc/fLKkskXN/pexels-fotios-photos-109275.jpg',
  },
  {
    id: 3,
    title: 'Quick Tips for Healthy Cooking',
    date: 'June 15, 2025',
    description:
      'Healthy doesn’t mean boring. Here are simple cooking hacks to keep your meals nutritious yet full of flavor.',
    image: 'https://i.postimg.cc/50SC6JKq/shape-9.png',
  },
];

const BlogSection = () => {
  return (
    <section className="bg-black text-[#c59d5f] py-16 px-4 md:px-20 mt-20">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">
        Our Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#111] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 space-y-3">
              <p className="text-sm text-gray-400">{blog.date}</p>
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-300">{blog.description}</p>
              <button className="mt-2 inline-block text-sm text-black bg-[#c59d5f] px-4 py-2 rounded hover:bg-[#b3864e] transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
