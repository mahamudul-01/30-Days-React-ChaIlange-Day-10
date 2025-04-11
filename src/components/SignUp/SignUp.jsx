import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div class="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto">
      <div class="mb-8 text-center">
        <h1 class="my-3 text-4xl font-bold">Sign Up</h1>
        <p class="text-sm dark:text-gray-600">Sign up to access your account</p>
      </div>
      <form noValidate="" action="" class="space-y-12">
        <div class="space-y-4">
          <div>
            <label htmlFor="email" class="block mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="leroy@jenkins.com"
              class="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" class="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              class="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div class="flex justify-between mb-2">
              <label htmlFor="password" class="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                class="text-xs hover:underline dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              class="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div class="space-y-2">
          <div>
            <button
              type="button"
              class="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign Up
            </button>
            <button
              type="button"
              class="w-full mt-6 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign Up with google
              <FaGoogle className="inline ml-4" />
            </button>
          </div>
          <p class="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link
              q
              to="/sign-in"
              rel="noopener noreferrer"
              href="#"
              class="hover:underline dark:text-violet-600"
            >
              Sign in
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
