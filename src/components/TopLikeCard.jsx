// src/components/TopLikeCard.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const TopLikeCard = () => {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    fetch('https://cecipe-server-site.vercel.app/topRecipes')
      .then((res) => res.json())
      .then((data) => {
        setTopRecipes(data);
      })
      .catch((error) => {
        console.error('Error fetching top recipes:', error);
      });
  }, []);

  return (
    <div className="py-10 px-4 md:px-10 min-h-screen bg-white text-black dark:bg-[#0e0e0e] dark:text-white">
      <h1 className="text-3xl font-bold mb-10 text-center text-blue-700 dark:text-[#c59d5f] uppercase tracking-wide">
        Top Liked Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-gray-100 dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-[#c59d5f]/40 transition duration-300 border border-gray-300 dark:border-[#2e2e2e] flex flex-col"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 rounded-md border p-2 mx-auto object-contain bg-white dark:bg-black shadow-md"
            />

            <div className="p-5 flex-grow">
              <h2 className="text-xl font-semibold text-blue-700 dark:text-[#c59d5f] mb-1">
                {recipe.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Category: {recipe.categories}
              </p>
              <p className="text-sm text-blue-700 dark:text-[#c59d5f] mb-4">
                ❤️ Likes: {recipe.likes || 0}
              </p>
            </div>
            <div className="px-5 pb-5">
              <Link to={`/recipes/${recipe._id}`}>
                <button className="bg-blue-700 dark:bg-[#c59d5f] hover:bg-blue-800 dark:hover:bg-[#b0884e] text-white font-semibold py-2 px-4 rounded w-full">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/allRecipe">
        <button className="py-2 px-4 bg-blue-700 dark:bg-black text-white dark:text-[#c59d5f] mt-5">
          See All Recipes
        </button>
      </Link>
    </div>
  );
};

export default TopLikeCard;
