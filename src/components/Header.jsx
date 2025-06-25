import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import Swal from 'sweetalert2';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
 const handleLogout = async () => {
  try {
    await logOut();
    Swal.fire({
      icon: 'success',
      title: 'Logged Out Successfully!',
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.error('Logout failed:', error.message);
    Swal.fire({
      icon: 'error',
      title: 'Logout Failed',
      text: error.message,
    });
  }
};

  const activeClass =
    'border-2 border-double border-[#c59d5f] px-2 rounded text-[#c59d5f]';

  const commonLinks = [
    { path: '/', label: 'Home' },
    { path: '/allRecipe', label: 'All Recipes' },
    { path: '/addRecipe', label: 'Add Recipe' },
    { path: '/myRecipe', label: 'My Recipes' },
  ];

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-8 h-8 rounded-md" src="https://i.postimg.cc/s2HMTNPY/logo.png" alt="logo" />
          <NavLink to="/" className="text-xl font-bold text-[#c59d5f]">
            Recipe Book
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {commonLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? activeClass : 'hover:text-[#c59d5f] px-2'
              }
            >
              {label}
            </NavLink>
          ))}
           
           {/* theme toggle */}
            <ThemeToggle></ThemeToggle>
           {/* next */}

          {user ? (
            <>
              {/* Profile with Tooltip */}
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border border-[#c59d5f]"
                />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm bg-black text-[#c59d5f] rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                  {user.displayName }
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="bg-[#c59d5f] text-black px-4 py-1 rounded hover:bg-[#b3864e] transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? 'block px-4 py-2 rounded bg-black text-white border-2 border-double border-[#c59d5f]'
                    : 'block px-4 py-2 rounded bg-[#c59d5f] text-black hover:bg-[#b3864e]'
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? 'block px-4 py-2 rounded bg-black text-white border-2 border-double border-[#c59d5f]'
                    : 'block px-4 py-2 rounded bg-[#c59d5f] text-black hover:bg-[#b3864e]'
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-[#1a1a1a] text-white">
           {/* ✅ Theme toggle added for mobile menu */}
    <div className="flex justify-end">
      <ThemeToggle />
    </div>
          {commonLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              onClick={() => setIsOpen(false)}
              to={path}
              className={({ isActive }) =>
                isActive ? activeClass + ' block' : 'block hover:text-[#c59d5f] px-2'
              }
            >
              {label}
            </NavLink>
          ))}
           
          {user ? (
            <>
              <div className="flex items-center gap-3">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-8 h-8 rounded-full border border-[#c59d5f]"
                />
                <span className="text-[#c59d5f] text-sm">{user.displayName || 'No Name'}</span>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="block w-full text-left px-4 py-2 rounded bg-[#c59d5f] text-black"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/login"
                className="block px-4 py-2 rounded bg-[#c59d5f] text-black"
              >
                Login
              </NavLink>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/register"
                className="block px-4 py-2 rounded bg-[#c59d5f] text-black"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
