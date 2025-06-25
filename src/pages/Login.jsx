import React, { use, useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2'; 

const Login = () => {
  useEffect(() => {
    document.title = "Login||recipe"
  }, [])

  const { signInUser, handleGoogleLogin } = use(AuthContext);
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
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from);
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error.message);
      if (error.message.includes('auth/wrong-password')) {
        Swal.fire({
          icon: "error",
          title: "Incorrect Password",
          text: "Please check your password and try again.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      }
    }
  };

  const handleGoogleSignIn = () => {
    handleGoogleLogin()
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        console.error('Google login failed:', error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  text-white px-4 mt-30">
      <div className="bg-[#1e1e1e] w-full max-w-md rounded-xl shadow-xl p-8 space-y-6 border border-[#c59d5f]">
        <h2 className="text-3xl font-bold text-center text-[#c59d5f]">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-black text-white border border-[#c59d5f] focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-black text-white border border-[#c59d5f] focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
            />
            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-[#c59d5f] hover:underline"
              >
                Forget Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#c59d5f] text-black font-bold rounded-lg hover:bg-[#b3864e] transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center gap-3 text-gray-400">
          <hr className="flex-grow border-gray-600" />
          <span className="text-sm">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 flex items-center justify-center gap-2 border border-[#c59d5f] text-[#c59d5f] rounded-lg hover:bg-[#c59d5f] hover:text-black transition"
        >
          <FaGoogle /> Login with Google
        </button>

        <p className="text-sm text-center">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-[#c59d5f] hover:underline font-semibold"
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
