import logo from '../../assets/images/logo.png';
import login from '../../assets/images/login.jpg';
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from 'react-icons/io';
const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const userInfo = {
      name: formData.get('name'),
      password: formData.get('password'),
    };

    console.log(userInfo);

    // Optional: reset form
    form.reset();
  };
  return (
    <div className="relative">
      <div className="bg-base-200 absolute top-10 left-10 p-2 rounded-md hover:bg-base-300 cursor-pointer">
        <Link to={'/'} className=" flex items-center">
          Go Back <IoIosArrowRoundForward />
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl overflow-hidden bg-base-100 rounded-box shadow-xl">
          {/* Left Image (Desktop only) */}
          <div
            className="hidden lg:block lg:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(${login})`,
            }}
          />

          {/* Right Content */}
          <div className="w-full lg:w-1/2 px-6 py-8 sm:px-8 md:px-10  shadow-2xl">
            {/* Logo */}
            <Link to={'/'} className="flex justify-center">
              <img src={logo} alt="logo" className="h-20 w-20 object-contain" />
            </Link>

            {/* Title */}
            <h2 className="mt-4 text-lg sm:text-xl font-semibold text-center">
              Welcome back!
            </h2>

            {/* Google Login */}
            <button className="btn btn-outline w-full mt-6 flex items-center gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
              <span className="text-sm sm:text-base">Sign in with Google</span>
            </button>

            {/* Divider */}
            <div className="divider text-xs uppercase my-6">
              or login with email
            </div>
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm">Email Address</span>
                </label>
                <input
                  type="email"
                  name="name"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password */}
              <div className="form-control mt-4">
                <div className="flex justify-between">
                  <label className="label">
                    <span className="label-text text-sm">Password</span>
                  </label>
                  <a href="#" className="text-xs link link-hover">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-neutral w-full mt-6">
                Sign In
              </button>
            </form>

            {/* Footer */}
            <div className="divider text-xs uppercase mt-6  text-black cursor-pointer">
              Don't have an account?
              <Link className="underline" to="/signup">
                sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
