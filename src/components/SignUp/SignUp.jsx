import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { AuthContext } from "../../contextApi/AuthProvider";
import { useContext } from "react";

const SignUp = () => {

  const {createUser}=useContext(AuthContext);




  const [emailUserError, setEmailUserError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailSignUp = (e) => {
    setEmailUserError('');
    setSuccess('');
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const termsAccepted = e.target.terms.checked;

    createUser(email, password)
      .then(result=>{
        const user=result.user
        console.log(user);
      })
      .catch(error=>{
        const errorMessage = error.message;
        console.log(errorMessage);

      })
      

    // if (!termsAccepted) {
    //   // Show error if terms are not accepted
    //   setEmailUserError('You must accept the Terms and Conditions');
    //   toast.error('You must accept the Terms and Conditions', {
    //     position: "top-center",
    //   });
    //   return;
    // }

    // // Password validation: minimum length
    // if(password.length < 6) {
    //   setEmailUserError('Password must be at least 6 characters long'); 
    //   toast.error('Password must be at least 6 characters long', {
    //     position: "top-center",
    //   });
    //   return; 
    // }
    // // Password validation: at least one uppercase letter
    // else if(!/(?=.*[A-Z])/.test(password)) {
    //   setEmailUserError('Password must contain at least one uppercase letter'); 
    //   toast.error('Password must contain at least one uppercase letter', {
    //     position: "top-center",
    //   });
    //   return; 
    // }
    
    // // Create user with email and password using Firebase
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     // Update user profile with display name
    //     updateProfile(user, {
    //       displayName: name,
    //     })
    //       .then(() => {
    //         // Profile updated successfully
    //         console.log("Profile updated successfully");
    //       })
    //       .catch((error) => { 
    //         // An error occurred while updating the profile
    //         console.error("Error updating profile:", error);
    //       });
    //     sendEmailVerification(user)
    //       .then(() => {
    //         // Email verification sent. Prompt user to check their email.
    //         toast.info('Verification email sent. Please check your inbox.', {
    //           position: "top-center",
    //         });
    //       }
    //     )


        
    //     setSuccess('User created successfully');
    //     toast.success('User created successfully', {
    //       position: "top-center",
    //       autoClose: 5000,
    //     });
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setEmailUserError(errorMessage);
    //     toast.error(errorMessage, {
    //       position: "top-center",
    //     });
    //   });
    // console.log(name, email, password);
  };

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        <p className="text-sm dark:text-gray-600">
          Sign up to access your account
        </p>
      </div>
      <form
        noValidate=""
        onSubmit={handleEmailSignUp}
        action=""
        className="space-y-12"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <ToastContainer />
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
                {showPassword ? <VscEyeClosed /> :<VscEye /> }
              </button>
            </div>
            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm">
                I accept the <a href="#" className="underline">Terms and Conditions</a>
              </label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="w-full mt-6 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign Up with google
              <FaGoogle className="inline ml-4" />
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link
              to="/sign-in"
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-600"
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
