import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../components/RecipeCard';
import DiscoverRecipes from '../components/DiscoverRecipes';

const AllRecipe = () => {
  // dynamic path change
  useEffect(() => {
    document.title = 'All Recipe';
  }, []);

  const recipes = useLoaderData();

  // state
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const cuisines = ['All', ...new Set(recipes.map((r) => r.cuisine))];

  const filteredRecipes =
    selectedCuisine === 'All'
      ? recipes
      : recipes.filter((recipe) => recipe.cuisine === selectedCuisine);

  return (
    <>
      {/* ---------- main wrapper ---------- */}
      <div className="min-h-screen bg-white dark:bg-black text-blue-800 dark:text-[#c59d5f] p-4 max-w-6xl mx-auto  transition-colors duration-500">
        {/* title */}
        <div className='mt-30'>
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-800 dark:text-[#c59d5f]">
            All Recipes
          </h1>

          {/* cuisine dropdown */}
          <div className="mb-8 text-center">
            <label className="mr-2 font-medium text-blue-800 dark:text-[#c59d5f]">
              Filter by Cuisine:
            </label>

            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="px-4 py-2 rounded border border-blue-300 dark:border-[#c59d5f] bg-white dark:bg-black text-blue-800 dark:text-[#c59d5f] focus:outline-none"
            >
              {cuisines.map((cuisine, i) => (
                <option
                  key={i}
                  value={cuisine}
                  className="text-blue-800 dark:text-[#c59d5f] bg-white dark:bg-black"
                >
                  {cuisine}
                </option>
              ))}
            </select>
          </div>

          {/* recipe cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* discover more */}
        <div className="mt-16">
          <DiscoverRecipes />
        </div>
      </div>
    </>
  );
};

export default AllRecipe;
