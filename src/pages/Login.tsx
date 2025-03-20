import Button from "../components/Button";
import Footer from "../sections/Footer";

import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col w-[100%] h-screen bg-background dots to-white">
      <header className="h-[70px] sticky top-0 flex bg-white items-center px-8 border shadow">
        <h2 className="text-3xl max-lg:text-2xl text-primary font-bold">
          MindScribe
        </h2>
      </header>

      <main className="flex flex-1 items-center justify-center">
        <div className="flex max-w-[900px] w-full h-[700px] max-xl:max-w-[700px] max-lg:flex-col max-lg:h-auto max-lg:my-8 max-lg:max-w-[600px] bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="max-lg:w-full w-1/2 bg-primary  h-full px-8 flex flex-col gap-4 items-center justify-center">
            <h2 className="max-lg:py-4 text-white text-3xl text-center font-medium">
              Welcome to MindScribe
            </h2>
            <p className="text-white text-xl text-center font-light max-lg:hidden">
              Record your thoughts, track your emotions, and discover insights
              about yourself.
            </p>
          </div>

          <div className=" max-lg:w-full w-1/2 h-full p-10">
            <h3 className="text-primary text-3xl font-bold pb-4">Sign In</h3>
            <span className="text-text-light block mb-8">
              Welcome back! Please enter your details.
            </span>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-lg">
                Email
              </label>
              <input
                type="text"
                placeholder="Email or phone number"
                className="border p-4 rounded-xl text-text bg-background mb-4 focus:outline-primary focus:bg-white transition-all duration-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-medium text-lg">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="border p-4 rounded-xl text-text bg-background mb-4 focus:outline-primary focus:bg-white transition-all duration-500"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="size-4" />
              <span className="px-2 text-lg">Remember me</span>
            </div>

            <Button type="default" className="w-full">
              Sign In
            </Button>

            <div className="flex items-center justify-between">
              <div className="w-1/4 h-0.5 bg-gray-300" />
              <span className="text-text text-lg">Or continue with</span>
              <div className="w-1/4 h-0.5 bg-gray-300" />
            </div>

            <div className="grid grid-cols-3 my-2 gap-4">
              <div className="p-3 rounded-xl border bg-white hover:bg-pl hover:border-primary hover:-translate-y-[1px] transition-all duration-200">
                <FcGoogle className="size-6 mx-auto" />
              </div>
              <div className="p-3 rounded-xl border bg-white hover:bg-pl hover:border-primary hover:-translate-y-[1px] transition-all duration-200">
                <IoLogoFacebook className="size-6 text-[#1877F2] mx-auto" />
              </div>
              <div className="p-3 rounded-xl border bg-white hover:bg-pl hover:border-primary hover:-translate-y-[1px] transition-all duration-200">
                <FaXTwitter className="size-6 mx-auto" />
              </div>
            </div>
            <span className="text-text block text-center py-4">
              Don't have an account?
              <Link to="/signup">
                <span className="text-primary hover:underline">
                  Sign up for free
                </span>
              </Link>
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
