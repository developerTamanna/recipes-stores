import React from 'react';
import { Link } from 'react-router'; 

const RecipeCard = ({ recipe }) => {
  const { _id, title, image, cuisine, likes } = recipe;

  return (
    <div className="bg-[#1a1a1a] text-[#c59d5f] rounded-xl overflow-hidden shadow-lg hover:shadow-[#c59d5f]/40 transition duration-300 border border-[#2e2e2e] flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain rounded-md shadow-md py-2"
      />

      <div className="p-5 flex-grow">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-1 text-sm text-gray-300">
          <span className="font-semibold text-[#c59d5f]">Cuisine:</span> {cuisine}
        </p>
        <p className="mb-4 text-sm">
          <span className="font-semibold text-[#c59d5f]">❤️ Likes:</span> {likes}
        </p>
      </div>

      <div className="px-5 pb-5">
        <Link to={`/recipes/${_id}`}>
          <button className="bg-[#c59d5f] hover:bg-[#b0884e] text-white font-semibold py-2 px-4 rounded w-full">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
