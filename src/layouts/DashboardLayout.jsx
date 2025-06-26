// src/layouts/DashboardLayout.jsx
import { Outlet, NavLink } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-black">
      <aside className="w-64 bg-gray-100 p-5">
        <h2 className="text-xl font-bold text-[#c59d5f] mb-4">Dashboard</h2>
        <nav className="space-y-2">
          <NavLink to="/dashboard" end className="block hover:text-[#c59d5f]">
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/allRecipe"
            className="block hover:text-[#c59d5f]"
          >
            All Recipes
          </NavLink>
          <NavLink
            to="/dashboard/addRecipe"
            className="block hover:text-[#c59d5f]"
          >
            Add Recipe
          </NavLink>
          <NavLink
            to="/dashboard/myRecipe"
            className="block hover:text-[#c59d5f]"
          >
            My Recipes
          </NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
