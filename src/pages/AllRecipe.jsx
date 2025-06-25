import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../components/RecipeCard';
import DiscoverRecipes from '../components/DiscoverRecipes';

const AllRecipe = () => {

  //dynamic path change
  useEffect(()=>{
  
      document.title ="All Recipe"
    },[])

  //next
  const recipes = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  const cuisines = ['All', ...new Set(recipes.map(r => r.cuisine))];

  const filteredRecipes = selectedCuisine === 'All'
    ? recipes
    : recipes.filter(recipe => recipe.cuisine === selectedCuisine);

  return (
   <>
    <div className="min-h-screen  text-white p-4 max-w-6xl mx-auto mt-40">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#c59d5f]">All Recipes</h1>

      {/* Cuisine Dropdown */}
      <div className="mb-8 text-center">
        <label className="mr-2 font-medium   text-[#c59d5f]">Filter by Cuisine:</label>
        <select
          className="px-4 py-2 rounded text-[#c59d5f]"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          {cuisines.map((cuisine, i) => (
            <option key={i} value={cuisine}>{cuisine}</option>
          ))}
        </select>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>

    {/* next */}
   <div className='mt-16'>
     {/* <DiscoverRecipes></DiscoverRecipes> */}
     <DiscoverRecipes></DiscoverRecipes>
   </div>
   </>
  );
};

export default AllRecipe;
