import React, { useContext, useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';

const Register = () => {
  /* ---------- page title ---------- */
  useEffect(() => {
    document.title = 'Register‖Recipe';
  }, []);

  /* ---------- hooks ---------- */
  const { createUser, handleGoogleLogin } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  /* ---------- helpers ---------- */
  const isValidPassword = (password) =>
    /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length >= 6;

  /* ---------- handlers ---------- */
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, email, password, photo } = Object.fromEntries(
      new FormData(form).entries()
    );

    if (!isValidPassword(password)) {
      setPasswordError(
        'Password must be at least 6 characters long and include both uppercase and lowercase letters.'
      );
      return;
    }
    setPasswordError('');

    createUser(email, password, name, photo)
      .then((user) => {
        /* save to DB */
        const profile = {
          name,
          email,
          photo,
          creationTime: user?.metadata?.creationTime,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };
        return fetch('https://cecipe-server-site.vercel.app/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(profile),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your account has been created',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        }
      })
      .catch((err) =>
        Swal.fire({ icon: 'error', title: 'Oops…', text: err.message })
      );
  };

  const handleGoogleSignIn = () =>
    handleGoogleLogin()
      .then(() => navigate('/'))
      .catch((err) =>
        Swal.fire({
          icon: 'error',
          title: 'Google Login Failed',
          text: err.message,
        })
      );

  /* ---------- UI ---------- */
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-blue-800 dark:text-[#c59d5f] px-4 transition-colors duration-500 ">
      <div className="w-full max-w-md rounded-xl shadow-lg p-8 space-y-6 border border-blue-800 dark:border-[#c59d5f] bg-gray-50 dark:bg-[#1e1e1e] mt-30">
        {/* title */}
        <h2 className="text-3xl font-bold text-center">Register</h2>

        {/* form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* name */}
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-white dark:bg-black border border-blue-800 dark:border-[#c59d5f] rounded-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:focus:ring-[#c59d5f] text-blue-800 dark:text-white"
              required
            />
          </div>

          {/* email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-white dark:bg-black border border-blue-800 dark:border-[#c59d5f] rounded-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:focus:ring-[#c59d5f] text-blue-800 dark:text-white"
              required
            />
          </div>

          {/* photo */}
          <div>
            <label className="block mb-1 text-sm font-medium">Photo URL</label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="w-full px-4 py-2 bg-white dark:bg-black border border-blue-800 dark:border-[#c59d5f] rounded-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:focus:ring-[#c59d5f] text-blue-800 dark:text-white"
            />
          </div>

          {/* password */}
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Your Password"
              className="w-full px-4 py-2 bg-white dark:bg-black border border-blue-800 dark:border-[#c59d5f] rounded-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:focus:ring-[#c59d5f] text-blue-800 dark:text-white"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* submit */}
          <button
            type="submit"
            className="w-full bg-blue-800 dark:bg-[#c59d5f] text-white dark:text-black font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-[#b3864e] transition"
          >
            Register
          </button>
        </form>

        {/* divider */}
        <div className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="text-sm">OR</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>

        {/* google button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 flex items-center justify-center gap-2 border border-blue-800 dark:border-[#c59d5f] rounded-lg text-blue-800 dark:text-[#c59d5f] hover:bg-blue-800 hover:text-white dark:hover:bg-[#c59d5f] dark:hover:text-black transition"
        >
          <FaGoogle /> Register with Google
        </button>

        {/* link */}
        <p className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
