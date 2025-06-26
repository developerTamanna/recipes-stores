import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';

const MyRecipe = () => {
  useEffect(() => {
    document.title = 'myRecipe';
  }, []);

  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'];

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch(
          `https://cecipe-server-site.vercel.app/myRecipes?email=${user.email}`
        );
        const data = await res.json();
        setGroups(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching groups:', error);
        setLoading(false);
      }
    };

    if (user?.email) fetchGroups();
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will permanently delete the group!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            `https://cecipe-server-site.vercel.app/deleteRecipe/${id}`,
            {
              method: 'DELETE',
            }
          );

          const result = await res.json();
          if (result.deletedCount > 0) {
            setGroups((prev) => prev.filter((g) => g._id !== id));
            Swal.fire('Deleted!', 'Your recipe has been deleted.', 'success');
          } else {
            console.log(result);
          }
        } catch (error) {
          console.error('Error deleting recipe:', error);
          Swal.fire('Error', 'Something went wrong!', 'error');
        }
      }
    });
  };

  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [merror, seterror] = useState(false);
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    ingredients: '',
    instructions: '',
    cuisine: '',
    prepTime: '',
    categories: [],
  });

  useEffect(() => {
    try {
      const group = location?.state?.massage ?? null;
      if (!group || !user?.email || user.email !== group.email) {
        seterror('You do not Author such a recipe.');
      } else {
        setFormData({
          email: group.email,
          recipe_id: group._id,
          image: group.image,
          title: group.title,
          ingredients: group.ingredients,
          instructions: group.instructions,
          cuisine: group.cuisine,
          prepTime: group.prepTime,
          categories: Array.isArray(group.categories)
            ? group.categories
            : [group.categories],
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [user, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will permanently update the recipe!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, update it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            'https://cecipe-server-site.vercel.app/updateRecipe',
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            }
          );
          if (res.ok) {
            setGroups((prevGroups) =>
              prevGroups.map((recipe) =>
                recipe._id === formData.recipe_id
                  ? { ...recipe, ...formData }
                  : recipe
              )
            );
            Swal.fire({
              icon: 'success',
              title: 'Recipe Updated!',
              text: 'Your recipe has been successfully updated.',
            }).then((result) => {
              if (result.isConfirmed) {
                // navigate('/myRecipe');
              }
            });
          } else {
            const error = await res.json();
            Swal.fire('Error', error.message || 'Update failed', 'error');
          }
        } catch (error) {
          console.error('Error saving group:', error);
          Swal.fire('Error', 'Something went wrong!', 'error');
        }
      }
    });
  };

  if (loading) return <div className="text-center text-white">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 text-white mt-40">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#c59d5f]">My Recipes</h2>
      {groups.length === 0 ? (
        <p className="text-center text-[#c59d5f]">You haven’t created any recipes yet.</p>
      ) : (
        <div className="grid gap-6">
          {groups.map((group) => (
            <div
              key={group._id}
              className="flex flex-col md:flex-row bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden border border-[#c59d5f]"
            >
              {/* Image */}
              <img
                src={group.image}
                alt={group.title}
                className="w-full md:w-48 h-48 rounded-md object-cover"
              />

              {/* Content */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                {/* Title + Price */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="text-xl font-bold text-white">
                      {group.title}
                    </h3>
                     <span className='text-[#c59d5f] font-normal'>like:❤ {group.likes}</span>
                    <span className="text-[#c59d5f] font-semibold">
                      Preparation Time  {group.prepTime}.00
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 italic">
                    {group.categories} Cuisine
                  </p>
                </div>

                {/* Scrollable box */}
                <div className="mt-3 h-[120px] sm:h-[140px] md:h-[150px] overflow-y-auto pr-2 text-sm text-gray-300 bg-white/5 p-3 rounded-md scrollbar-thin scrollbar-thumb-[#c59d5f]/70">
                  <p className="whitespace-pre-line">
                    <span className="text-[#c59d5f] font-semibold">
                      Instructions:
                    </span>{' '}
                    {group.instructions}
                  </p>
                  <p className="whitespace-pre-line mt-2">
                    <span className="text-[#c59d5f] font-semibold">
                      Ingredients:
                    </span>{' '}
                    {group.ingredients}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <button
                    className="px-2.5 py-1 rounded-sm border-none outline-none hover:bg-purple-800 transition-colors duration-300 ease-in-out cursor-pointer bg-primary"
                    onClick={() => {
                      document.getElementById('my_modal_5').showModal();
                      setFormData({
                        email: group.email,
                        recipe_id: group._id,
                        image: group.image,
                        title: group.title,
                        ingredients: group.ingredients,
                        instructions: group.instructions,
                        cuisine: group.cuisine,
                        prepTime: group.prepTime,
                        categories: Array.isArray(group.categories)
                          ? group.categories
                          : [group.categories],
                      });
                    }}
                  >
                    Update
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    {/* start close */}

                    {/* next */}
                    <div className="modal-box">
                      <div className="max-w-3xl mx-auto p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 text-gray-100 space-y-5">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-300">
                          Update My recipe
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          {/* Image URL */}
                          <div>
                            <label className="block text-sm font-medium mb-1 text-[#c59d5f]">
                              Image URL
                            </label>
                            <input
                              type="text"
                              name="image"
                              value={formData.image}
                              onChange={handleChange}
                              className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
                            />
                          </div>

                          {/* Title */}
                          <div>
                            <label className="block text-sm font-medium mb-1 text-[#c59d5f]">
                              Title
                            </label>
                            <input
                              type="text"
                              name="title"
                              value={formData.title}
                              onChange={handleChange}
                              className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
                            />
                          </div>

                          {/* Ingredients */}
                          <div>
                            <label className="block text-sm font-medium mb-1 text-[#c59d5f]">
                              Ingredients
                            </label>
                            <textarea
                              name="ingredients"
                              value={formData.ingredients}
                              onChange={handleChange}
                              rows="3"
                              className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
                            ></textarea>
                          </div>

                          {/* Instructions */}
                          <div>
                            <label className="block text-sm font-medium mb-1 text-[#c59d5f]">
                              Instructions
                            </label>
                            <textarea
                              name="instructions"
                              value={formData.instructions}
                              onChange={handleChange}
                              rows="4"
                              className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
                            ></textarea>
                          </div>

                          {/* Cuisine Type */}
                          <div>
                            <label className="block text-sm font-medium mb-1 text-[#c59d5f]">
                              Cuisine Type
                            </label>
                            <select
                              name="cuisine"
                              value={formData.cuisine}
                              onChange={handleChange}
                              className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
                            >
                              <option value="">Select</option>
                              {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              ))}
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
                              value={formData.prepTime}
                              onChange={handleChange}
                              className="w-full bg-black border border-[#c59d5f] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-[#c59d5f]">
                              Categories
                            </label>
                            <div className="flex flex-wrap gap-4 text-[#c59d5f]">
                              {[
                                'Breakfast',
                                'Lunch',
                                'Dinner',
                                'Dessert',
                                'Vegan',
                              ].map((cat) => (
                                <label
                                  key={cat}
                                  className="flex items-center space-x-2 text-sm"
                                >
                                  <input
                                    type="checkbox"
                                    name="categories"
                                    value={cat}
                                    checked={formData.categories.includes(cat)}
                                    onChange={(e) => {
                                      const checked = e.target.checked;
                                      const value = e.target.value;
                                      setFormData((prev) => ({
                                        ...prev,
                                        categories: checked
                                          ? [...prev.categories, value]
                                          : prev.categories.filter(
                                              (c) => c !== value
                                            ),
                                      }));
                                    }}
                                  />
                                  <span>{cat}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* Submit Button */}
                        <div className="flex items-center justify-end gap-2 mt-4">
                            <button
                              className="px-3.5 py-2 cursor-pointer rounded bg-gray-600 text-white hover:bg-gray-700 transition-colors duration-300"
                              onClick={() => {
                                document.getElementById('my_modal_5').close();
                              }}
                              type="button"
                            >
                              Cencle
                            </button>
                            <button
                              onClick={() => {
                                document.getElementById('my_modal_5').close();
                              }}
                              type="submit"
                              className="px-3.5 py-2 cursor-pointer rounded bg-gray-600 text-white hover:bg-gray-700 transition-colors duration-300'"
                            >
                              Update Recipe
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  <button
                    onClick={() => handleDelete(group._id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRecipe;
