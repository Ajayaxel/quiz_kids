import React, { useState } from "react";
import {
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaEnvelope,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/videopage");
  };

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleLoginClick = () => {
    setIsRegistering(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-cover bg-center" style={{ backgroundImage: "url('/neww  bg 1.png')" }}>
      {/* Left side: Bear image */}
      <div className="w-full md:w-1/2 flex justify-center items-end relative pt-10 md:pt-0">
        <img
          src="/all gif.gif"
          alt="Animals"
          className="max-h-[300px] md:max-h-[500px] lg:max-h-[700px] object-contain w-auto"
        />
      </div>

      {/* Right side: Login form */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-4 sm:px-8 md:px-12 py-8">
        <div className="w-full max-w-[95%] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[600px] bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              {isRegistering ? "Create Account" : "Welcome"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {isRegistering ? "Register with Email" : "Login with Email"}
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-4 mt-6">
            {isRegistering && (
              <div className="flex items-center border border-gray-300 rounded-lg px-3 mt-1">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 outline-none"
                />
              </div>
            )}

            <div className="flex items-center border border-gray-300 rounded-lg px-3 mt-1">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full p-3 outline-none"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg px-3 mt-1">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="**********"
                className="w-full p-3 outline-none"
              />
            </div>

            <div className="text-right text-sm text-black mt-2 cursor-pointer">
              Forgot your password?
            </div>
          </div>

          {/* Login/Register Button */}
          <button
            onClick={handleLogin}
            type="submit"
            className="bg-blue-500 font-bold text-sm text-black bg-opacity-30 py-3 rounded-lg border border-black-300 backdrop-blur-lg hover:bg-blue-600 hover:bg-opacity-40 transition duration-300 mt-4 w-full"
          >
            {isRegistering ? "Register" : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4">
            <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
              <FaGoogle className="text-xl" />
            </button>
            <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
              <FaFacebookF className="text-xl text-blue-600" />
            </button>
            <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
              <FaApple className="text-xl" />
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-4">
            {isRegistering ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={handleLoginClick}
                  className="text-black font-bold cursor-pointer"
                >
                  Login Now
                </span>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <span
                  onClick={handleRegisterClick}
                  className="text-blue-500 font-medium cursor-pointer"
                >
                  Register Now
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}






















