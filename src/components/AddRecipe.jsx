import React, { useEffect, use } from 'react';
import Swal from 'sweetalert2';

import { useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const AddRecipe = () => {
  useEffect(() => {
    document.title = "AddRecipe"
  }, [])

  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRecipe = Object.fromEntries(formData.entries());
    newRecipe.likes = parseInt(newRecipe.likes);
    newRecipe.email = user.email;

    fetch('https://cecipe-server-site.vercel.app/recipes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Recipe Added!',
            text: 'Your recipe has been added successfully.',
            confirmButtonColor: '#7c3aed'
          }).then(() => {
            navigate('/allRecipe');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong while adding the recipe.'
          });
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to connect to the server.'
        });
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-black text-white shadow-md p-8 rounded-lg mt-40 border border-[#c59d5f]">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#c59d5f]">
        Add New Recipe
      </h2>
      <form onSubmit={handleAddRecipe} className="space-y-6">

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#c59d5f]">Image URL</label>
          <input
            type="text"
            name="image"
            className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#c59d5f]">Title</label>
          <input
            type="text"
            name="title"
            className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#c59d5f]">Ingredients</label>
          <textarea
            name="ingredients"
            rows="3"
            className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
          ></textarea>
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#c59d5f]">Instructions</label>
          <textarea
            name="instructions"
            rows="4"
            className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
          ></textarea>
        </div>

        {/* Cuisine Type */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#c59d5f]">Cuisine Type</label>
          <select
            name="cuisine"
            className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
          >
            <option value="">Select</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Preparation Time */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#c59d5f]">
            Preparation Time (minutes)
          </label>
          <input
            type="number"
            name="prepTime"
            className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium mb-2 text-[#c59d5f]">Categories</label>
          <div className="flex flex-wrap gap-4">
            {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map((cat) => (
              <label key={cat} className="flex items-center space-x-2 text-sm">
                <input type="checkbox" name="categories" value={cat} />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Like Count */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#c59d5f]">Like Count</label>
          <input
            type="number"
            name="likes"
            value={0}
            readOnly
            className="w-full bg-gray-900 border border-[#c59d5f] text-gray-400 px-4 py-2 rounded-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#c59d5f] hover:bg-[#b3864e] text-black font-semibold py-2 px-4 rounded-lg transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
