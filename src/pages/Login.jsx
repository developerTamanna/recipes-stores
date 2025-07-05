import React, { useContext, useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  useEffect(() => {
    document.title = 'Login‖recipe';
  }, []);

  const { signInUser, handleGoogleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const from = location?.state?.from || '/';
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from);
    } catch (error) {
      if (error.message.includes('auth/wrong-password')) {
        Swal.fire({
          icon: 'error',
          title: 'Incorrect Password',
          text: 'Please check your password and try again.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        });
      }
    }
  };

  const handleGoogleSignIn = () =>
    handleGoogleLogin()
      .then(() => navigate(from))
      .catch((err) => console.error('Google login failed:', err.message));

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-blue-800 dark:text-[#c59d5f] px-4 transition-colors duration-500 ">
      <div className="w-full max-w-md rounded-xl shadow-xl p-8 space-y-6 border border-blue-800 dark:border-[#c59d5f] bg-gray-50 dark:bg-[#1e1e1e] mt-30">
        {/* title */}
        <h2 className="text-3xl font-bold text-center">Login</h2>

        {/* form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border border-blue-800 dark:border-[#c59d5f] placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:focus:ring-[#c59d5f] text-blue-800 dark:text-white"
            />
          </div>

          {/* password */}
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border border-blue-800 dark:border-[#c59d5f] placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:focus:ring-[#c59d5f] text-blue-800 dark:text-white"
            />
            <div className="text-right mt-1">
              <Link to="/forgot-password" className="text-sm hover:underline">
                Forget Password?
              </Link>
            </div>
          </div>

          {/* submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-800 dark:bg-[#c59d5f] text-white dark:text-black font-bold rounded-lg hover:bg-blue-700 dark:hover:bg-[#b3864e] transition"
          >
            Login
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
          <FaGoogle /> Login with Google
        </button>

        {/* link */}
        <p className="text-sm text-center">
          Don't have an account?{' '}
          <Link to="/register" className="hover:underline font-semibold">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
