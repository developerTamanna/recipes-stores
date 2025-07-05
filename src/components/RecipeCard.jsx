import React from 'react';
import { Link } from 'react-router';

const RecipeCard = ({ recipe }) => {
  const { _id, title, image, cuisine, likes } = recipe;

  return (
    <div className="bg-white dark:bg-[#1a1a1a] text-blue-800 dark:text-[#c59d5f] rounded-xl overflow-hidden shadow-md hover:shadow-blue-300 dark:hover:shadow-[#c59d5f]/40 transition duration-300 border border-gray-200 dark:border-[#2e2e2e] flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain rounded-md shadow-md py-2"
      />

      <div className="p-5 flex-grow">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">
          <span className="font-semibold text-blue-800 dark:text-[#c59d5f]">
            Cuisine:
          </span>{' '}
          {cuisine}
        </p>
        <p className="mb-4 text-sm text-blue-800 dark:text-[#c59d5f]">
          <span className="font-semibold">❤️ Likes:</span> {likes}
        </p>
      </div>

      <div className="px-5 pb-5">
        <Link to={`/recipes/${_id}`}>
          <button className="bg-blue-800 dark:bg-[#c59d5f] hover:bg-blue-700 dark:hover:bg-[#b0884e] text-white dark:text-black font-semibold py-2 px-4 rounded w-full transition">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
