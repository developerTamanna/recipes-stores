import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const CardDetails = () => {
  //dynamic path change
  useEffect(()=>{
  
      document.title ="Recipe Details"
    },[])
  //next
  const {user} = use(AuthContext)
  
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
  } = recipe;

   const [like, setLike] = useState((likes))

 const addLike = async () => {
  console.log(_id);
  const updatedLikes = like + 1;
  setLike(updatedLikes);

  try {
    const res = await fetch(`https://cecipe-server-site.vercel.app/update-likes/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ likes: updatedLikes }),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Error updating like:', error);
  }
};


  return (
    <div className="min-h-screen bg- text-[#c59d5f] p-6 flex justify-center items-start mt-40">
      <div className="max-w-3xl w-full bg-[#121212] rounded-lg shadow-lg p-6">
        <img
          src={image}
          alt={title}
          className="flex mx-auto"
        />

        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        <p className="mb-2"><span className="font-semibold">Cuisine:</span> {cuisine}</p>
        <p className="mb-2"><span className="font-semibold">Prep Time:</span> {prepTime} minutes</p>
        <p className="mb-2"><span className="font-semibold">Category:</span> {categories}</p>
        <p className="mb-2 text-sm italic text-gray-400">
  {like} people interested in this recipe
</p>

      <p
  onClick={() => {
    if (user?.email !== recipe?.email) {
      addLike();
    }
  }}
  className={`mb-2 cursor-pointer ${user?.email === recipe?.email ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`}
>
  <span className="font-semibold">Likes:</span> {like}
</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
          <pre className="whitespace-pre-wrap bg-[#222] p-4 rounded text-sm">{ingredients}</pre>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
          <pre className="whitespace-pre-wrap bg-[#222] p-4 rounded text-sm">{instructions}</pre>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
