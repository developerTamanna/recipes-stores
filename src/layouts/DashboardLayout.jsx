// src/layouts/DashboardLayout.jsx
import { Outlet, NavLink } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-black text-[#c59d5f]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a1a1a] p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 border-b border-[#c59d5f] pb-2">
          Dashboard
        </h2>
        <nav className="space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? 'bg-[#c59d5f] text-black font-semibold'
                  : 'hover:bg-[#c59d5f33]'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? 'bg-[#c59d5f] text-black font-semibold'
                  : 'hover:bg-[#c59d5f33]'
              }`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/allRecipe"
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? 'bg-[#c59d5f] text-black font-semibold'
                  : 'hover:bg-[#c59d5f33]'
              }`
            }
          >
            All Recipes
          </NavLink>
          <NavLink
            to="/dashboard/addRecipe"
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? 'bg-[#c59d5f] text-black font-semibold'
                  : 'hover:bg-[#c59d5f33]'
              }`
            }
          >
            Add Recipe
          </NavLink>
          <NavLink
            to="/dashboard/myRecipe"
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? 'bg-[#c59d5f] text-black font-semibold'
                  : 'hover:bg-[#c59d5f33]'
              }`
            }
          >
            My Recipes
          </NavLink>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-6 bg-[#0d0d0d] rounded-l-xl">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
