import Footer from "../sections/Footer";

import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import FormComponent from "../components/Form";

export default function Signup() {
  return (
    <div className="flex flex-col w-[100%] h-screen bg-background dots to-white">
      <header className="h-[70px] sticky top-0 flex bg-white items-center px-8 border shadow">
        <h2 className="text-3xl max-lg:text-2xl text-primary font-bold">
          MindScribe
        </h2>
      </header>

      <main className="flex flex-1 items-center justify-center">
        <div className="flex max-w-[900px] w-full h-[820px] max-xl:max-w-[700px] max-lg:flex-col max-lg:h-auto max-lg:my-8 max-lg:max-w-[600px] bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="max-lg:w-full w-1/2 bg-primary h-full px-8 flex flex-col gap-4 items-center justify-center">
            <h2 className="max-lg:py-4 text-white text-3xl text-center font-medium">
              Begin Your Mindfulness Journey
            </h2>
            <p className="text-white text-xl text-center font-light max-lg:hidden">
              Create an account to start recording your thoughts, tracking
              emotions, and gaining self-insights.
            </p>
          </div>

          <div className=" max-lg:w-full w-1/2 h-full p-10">
            <h3 className="text-primary text-2xl font-bold pb-2">
              Create Account
            </h3>
            <span className="text-text-light text-sm block mb-6">
              Sign up to start your personal journaling experience.
            </span>

            <FormComponent />

            <div className="flex items-center justify-between">
              <div className="w-1/4 h-0.5 bg-gray-300" />
              <span className="text-text">Or sign up with</span>
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
              Already have an account?
              <Link to="/login">
                <span className="text-primary hover:underline"> Sign in</span>
              </Link>
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
