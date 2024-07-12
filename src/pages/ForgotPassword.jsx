import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };


  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset password')   
    }

  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6 ">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Sign up
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Send reset password
            </button>
            <div
              className="items-center flex my-4 before:border-t before:flex-1  before:border-gray-300 
          after:border-t after:flex-1  after:border-gray-300
          "
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
