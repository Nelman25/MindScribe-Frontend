import Footer from "../sections/Footer";
import FormComponent from "../components/Form";

import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../firebase";
import { handleAuthError } from "../utils/authHelpers";
import AuthProviderButton from "../components/AuthProviderButton";
import { useState } from "react";
import { VscLoading } from "react-icons/vsc";

export default function Signup() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCreateAccountWithGoogle = async (): Promise<void> => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setLoading(false);
      handleAuthError(error);
    }
  };

  const handleCreateAccountWithFacebook = async (): Promise<void> => {
    setLoading(true);
    try {
      await signInWithPopup(auth, facebookProvider);
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setLoading(false);
      handleAuthError(error);
    }
  };

  const handleCreateAccountWithGithub = async (): Promise<void> => {
    setLoading(true);
    try {
      await signInWithPopup(auth, githubProvider);
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setLoading(false);
      handleAuthError(error);
    }
  };

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
              <AuthProviderButton onClick={handleCreateAccountWithGoogle}>
                {loading ? (
                  <VscLoading className="size-4 animate-spin" />
                ) : (
                  <FcGoogle className="size-6 mx-auto" />
                )}
              </AuthProviderButton>
              <AuthProviderButton onClick={handleCreateAccountWithFacebook}>
                {loading ? (
                  <VscLoading className="size-4 animate-spin" />
                ) : (
                  <IoLogoFacebook className="size-6 mx-auto text-blue-500" />
                )}
              </AuthProviderButton>
              <AuthProviderButton onClick={handleCreateAccountWithGithub}>
                {loading ? (
                  <VscLoading className="size-4 animate-spin" />
                ) : (
                  <FaGithub className="size-6 mx-auto" />
                )}
              </AuthProviderButton>
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
