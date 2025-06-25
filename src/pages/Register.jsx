import React, { useState, use, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';

const Register = () => {
  
  //dynamic path change
  useEffect(()=>{
      document.title ="Register|| Recipe"
    },[])
  //next
  const { createUser, handleGoogleLogin } = use(AuthContext);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Password validation function
  const isValidPassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;
    return hasUppercase && hasLowercase && isLengthValid;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, password, photo } = Object.fromEntries(formData.entries());

    if (!isValidPassword(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }

    setPasswordError("");

    createUser(email, password, name, photo)
      .then((user) => {
        const userProfile = {
          name,
          email,
          photo,
          creationTime: user?.metadata?.creationTime,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };

        fetch('https://cecipe-server-site.vercel.app/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userProfile),
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
              form.reset();
              navigate('/');  
            }
          });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });
  };

  //google login
  const handleGoogleSignIn = () => {
    handleGoogleLogin()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Google Login Failed',
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg- text-white px-4 mt-38">
      <div className="bg-[#1e1e1e] w-full max-w-md rounded-xl shadow-lg p-8 space-y-6 border border-[#c59d5f]">
        <h2 className="text-3xl font-bold text-center text-[#c59d5f]">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-[#c59d5f]">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-black border border-[#c59d5f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-[#c59d5f]">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-black border border-[#c59d5f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-[#c59d5f]">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-2 bg-black border border-[#c59d5f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-[#c59d5f]">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="w-full px-4 py-2 bg-black border border-[#c59d5f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c59d5f]"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#c59d5f] hover:bg-[#b3864e] text-black font-semibold py-2 px-4 rounded-lg transition"
          >
            Register
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
          <FaGoogle /> Register with Google
        </button>

        <p className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-[#c59d5f] hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
