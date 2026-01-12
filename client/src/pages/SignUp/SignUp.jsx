import React from 'react';
import logo from '../../assets/images/logo.png';
import register from '../../assets/images/register.jpg';
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from 'react-icons/io';
import useAuth from './../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
  const { createUser, signInWithGoogle } = useAuth();
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userInfo = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      image: formData.get('image'),
    };
    console.log(userInfo);
    // Optional: reset form
    form.reset();
    try {
      await createUser(userInfo.email, userInfo.password);
    } catch (err) {
      console.error('Sign-up failed', err);
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      signInWithGoogle();
    } catch (err) {
      console.error('Google sign-in failed', err);
    }
  };

  return (
    <div className="relative">
      <div className="bg-base-200 absolute top-10 left-10 p-2 rounded-md hover:bg-base-300 cursor-pointer">
        <Link to="/" className="flex items-center">
          Go Back <IoIosArrowRoundForward />
        </Link>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl overflow-hidden bg-base-100 rounded-box shadow-xl">
          {/* Left Image */}
          <div
            className="hidden lg:block lg:w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${register})` }}
          />

          {/* Right Content */}
          <div className="w-full lg:w-1/2 px-6 py-8 sm:px-8 md:px- shadow-lg">
            {/* Logo */}
            <Link to="/" className="flex justify-center">
              <img src={logo} alt="logo" className="h-20 w-20 object-contain" />
            </Link>

            <h2 className="mt-4 text-lg sm:text-xl font-semibold text-center">
              Create your account
            </h2>
            {/* Google Login */}
            <button
              className="btn btn-outline w-full mt-6 flex items-center gap-3 border-gray-400"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle />
              <span className="text-sm sm:text-base">Sign in with Google</span>
            </button>
            <form onSubmit={handleSubmit}>
              {/* Name (optional) */}
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Image */}
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Your Image</span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="file-input file-input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password */}
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-neutral w-full mt-6">
                Create Account
              </button>
            </form>

            {/* Footer */}
            <div className="divider text-xs uppercase mt-6">
              Already have an account?
              <Link className="underline ml-1" to="/login">
                sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
