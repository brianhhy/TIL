import React, { useState } from "react";
import googleImage from "../assets/google.png";
import kakaoImage from "../assets/kakao.png";
import naverImage from "../assets/naver.png";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="font-[sans-serif] flex ml-40 items-center justify-center min-h-screen bg-gray-50">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full py-6 px-4">
        {/* Left Section */}
        <div>
          <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px] text-gray-800">
            팀명이나 로고
          </h2>
          <p className="text-sm mt-6 text-gray-800">
            Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account. (서비스 소개)
          </p>
          {isLogin ? (
            <p className="text-sm mt-12 text-gray-800">
              Don't have an account
              <a
                onClick={() => setIsLogin(false)}
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Register here
              </a>
            </p>
          ) : (
            <p className="text-sm mt-12 text-gray-800">
              Already have an account?
              <a
                onClick={() => setIsLogin(true)}
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Sign in here
              </a>
            </p>
          )}
        </div>

        {/* Right Section */}
        {isLogin ? (
          <form className="max-w-md md:ml-auto w-full">
            <h3 className="text-gray-800 text-3xl font-extrabold mb-8">Sign in</h3>
            <div className="space-y-4">
              <div>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full bg-blue-600 text-white text-sm font-semibold py-3.5 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
            <div className="!mt-8 flex justify-center gap-4">
              {/* Google Button */}
              <button
                type="button"
                className="w-14 h-14 rounded-full overflow-hidden shadow-lg"
              >
                <img
                  src={googleImage}
                  alt="Google Login"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Kakao Button */}
              <button
                type="button"
                className="w-14 h-14 rounded-full overflow-hidden shadow-lg bg-[#FEE500] flex items-center justify-center"
              >
                <img
                  src={kakaoImage}
                  alt="Kakao Login"
                  className="w-[120%] h-auto object-contain"
                />
              </button>

              {/* Naver Button */}
              <button
                type="button"
                className="w-14 h-14 rounded-full overflow-hidden shadow-lg"
              >
                <img
                  src={naverImage}
                  alt="Naver Login"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </form>
        ) : (
          <form className="max-w-md md:ml-auto w-full">
            <h3 className="text-gray-800 text-3xl font-extrabold mb-8">Register</h3>
            <div className="space-y-4">
              <div>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-blue-600 text-white text-sm font-semibold py-3.5 rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
