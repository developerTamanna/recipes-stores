import React, { useEffect, useState, useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const CardDetails = () => {
  // change page title
  useEffect(() => {
    document.title = 'Recipe Details';
  }, []);

  const { user } = useContext(AuthContext);
  const recipe = useLoaderData();

  const {
    _id,
    image,
    title,
    ingredients,
    instructions,
    cuisine,
    prepTime,
    categories,
    likes,
    email,
  } = recipe;

  const [like, setLike] = useState(likes);

  const addLike = async () => {
    const updatedLikes = like + 1;
    setLike(updatedLikes);

    try {
      await fetch(`https://cecipe-server-site.vercel.app/update-likes/${_id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ likes: updatedLikes }),
      });
    } catch (err) {
      console.error('Error updating like:', err);
    }
  };

  const isOwner = user?.email === email;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-blue-800 dark:text-[#c59d5f] p-6 flex justify-center items-start mt-40 transition-colors duration-500">
      <div className="max-w-3xl w-full bg-gray-100 dark:bg-[#121212] border border-gray-200 dark:border-[#2e2e2e] rounded-lg shadow-lg p-6">
        {/* image */}
        <img src={image} alt={title} className="mx-auto mb-4 rounded-md" />

        {/* title & meta */}
        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        <p className="mb-2">
          <span className="font-semibold">Cuisine:</span> {cuisine}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Prep Time:</span> {prepTime} minutes
        </p>
        <p className="mb-2">
          <span className="font-semibold">Category:</span> {categories}
        </p>

        <p className="mb-2 text-sm italic text-gray-600 dark:text-gray-400">
          {like} people interested in this recipe
        </p>

        {/* like button / text */}
        <p
          onClick={() => !isOwner && addLike()}
          className={`mb-6 cursor-pointer ${
            isOwner
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:underline transition'
          }`}
        >
          <span className="font-semibold">Likes:</span> {like}
        </p>

        {/* ingredients */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
          <pre className="whitespace-pre-wrap bg-gray-50 dark:bg-[#222] p-4 rounded text-sm">
            {ingredients}
          </pre>
        </div>

        {/* instructions */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
          <pre className="whitespace-pre-wrap bg-gray-50 dark:bg-[#222] p-4 rounded text-sm">
            {instructions}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
