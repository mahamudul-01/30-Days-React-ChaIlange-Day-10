import { signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef('');

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        if (result.user.emailVerified) {
          toast.success("Sign in successful!", { position: "top-center" });
          navigate('/');
          console.log("Sign in successful!", result.user);
        } else {
          toast.error("Please verify your email address", { position: "top-center" });
          signOut(auth)
            .then(() => {
              toast.success("Sign out successful!", { position: "top-center" });
            })
            .catch((error) => {
              toast.error(error.message, { position: "top-center" });
            });
        }
      })
      .catch((error) => {
        toast.error(error.message, { position: "top-center" });
        setUser(null);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Google sign in successful!", { position: "top-center" });
      })
      .catch((error) => {
        toast.error(error.message, { position: "top-center" });
        setUser(null);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Github sign in successful!", { position: "top-center" });
      })
      .catch((error) => {
        toast.error(error.message, { position: "top-center" });
        setUser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign out successful!", { position: "top-center" });
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message, { position: "top-center" });
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email address", { position: "top-center" });
      return;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address", { position: "top-center" });
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!", { position: "top-center" });
      })
      .catch((error) => {
        toast.error(error.message, { position: "top-center" });
      });
  }

  

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto">
      <ToastContainer />
      <div className="mb-8 text-center">
        <div className="flex justify-center items-center">
          <h1 className="my-3  text-4xl font-bold">Sign in</h1>
          {user && (
            <img className="rounded-full w-20" src={user?.photoURL} alt="" />
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
              ref={emailRef}
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div onClick={handleForgetPassword} className="flex justify-between mb-2">
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-base text-gray-600"
                tabIndex={-1}
              >
                {showPassword ? <VscEyeClosed /> : <VscEye />}
              </button>
            </div>
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
              <FcGoogle className="inline ml-4" />
            </button>
            <button
              onClick={handleGithubSignIn}
              type="button"
              className="w-full mt-6 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign in with github
              <FaGithub className="inline ml-4" />
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
