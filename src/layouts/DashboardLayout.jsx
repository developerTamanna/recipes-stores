// src/layouts/DashboardLayout.jsx
import { Outlet, NavLink } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-blue-800 dark:text-[#c59d5f] transition-colors duration-500">
      {/* ---------- Sidebar ---------- */}
      <aside className="w-64 bg-gray-100 dark:bg-[#1a1a1a] p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 border-b border-blue-800 dark:border-[#c59d5f] pb-2">
          Dashboard
        </h2>

        <nav className="space-y-3">
          {[
            { to: '/', label: 'Home' },
            { to: '/dashboard', label: 'Overview', end: true },
            { to: '/dashboard/allRecipe', label: 'All Recipes' },
            { to: '/dashboard/addRecipe', label: 'Add Recipe' },
            { to: '/dashboard/myRecipe', label: 'My Recipes' },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  'block px-4 py-2 rounded transition',
                  isActive
                    ? 'bg-blue-800 dark:bg-[#c59d5f] text-white dark:text-black font-semibold'
                    : 'hover:bg-blue-100 dark:hover:bg-[#c59d5f33]',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* ---------- Main content ---------- */}
      <main className="flex-1 p-6 bg-gray-50 dark:bg-[#0d0d0d] rounded-l-xl transition-colors duration-500">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
