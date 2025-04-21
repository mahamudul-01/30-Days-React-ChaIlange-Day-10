import {  GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignIn = () => {


  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    

  }

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setUser(null);
      });
  };

  const handleGithubSignIn = () => {
    // Handle Github sign-in logic here
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setUser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successfully");
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto">
      <div className="mb-8 text-center">
        <div classNameName="flex justify-center items-center">
          <h1 className="my-3  text-4xl font-bold">Sign in</h1>
          {user && (
            <img classNameName="rounded-full w-20" src={user?.photoURL} alt="" />
          )}
        </div>
        <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
      </div>
      <form onSubmit={handleEmailSignIn} noValidate="" action="" className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign in
            </button>
            {user && (
              <button
                onClick={handleSignOut}
                type="button"
                className="w-full mt-6 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Sign out
              </button>
            )}
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full mt-6 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign in with google
              <FcGoogle  classNameName="inline ml-4" />
            </button>
            <button
              onClick={handleGithubSignIn}
              type="button"
              className="w-full mt-6 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign in with github
              <FaGithub  classNameName="inline ml-4" />
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link
              to="/sign-up"
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-600"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
