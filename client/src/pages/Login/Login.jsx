import logo from '../../assets/images/logo.png';
import login from '../../assets/images/login.jpg';
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import usePostApi from '../../hooks/usePostApi';
const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const { mutate, isLoading } = usePostApi('/users', {
    successMessage: 'User added successfully',
    invalidateKey: 'users',
  });
  const handleSubmit = async e => {
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
    try {
      await signIn(userInfo.name, userInfo.password);
    } catch (err) {
      console.log('Sign In Feald', err);
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithGoogle();
      const user = userCredential.user;
      const userInfo = {
        name: user.displayName || 'No Name',
        email: user.email,
        image: user.photoURL || '', // optional
        uid: user.uid,
        role: 'Customer',
        status: 'Active',
      };

      mutate(userInfo);
    } catch (err) {
      console.error('Google sign-in failed', err);
    }
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
            <button
              className="btn btn-outline w-full mt-6 flex items-center gap-3 border border-gray-400"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle />
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
                {isLoading ? 'sign up...' : 'sign up'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
