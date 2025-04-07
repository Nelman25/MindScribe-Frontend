import Button from "../components/Button";
import Footer from "../sections/Footer";

import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../firebase";
import { handleAuthError } from "../utils/authHelpers";
import React, { useState } from "react";
import { Credentials } from "../types";
import AuthProviderButton from "../components/AuthProviderButton";
import { VscLoading } from "react-icons/vsc";

export default function Login() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleLogin = async (): Promise<void> => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setLoading(false);
      let errorMessage = "An unknown error occured: ";

      if (error instanceof Error) {
        errorMessage += error.message;
      } else if (typeof error === "string") {
        errorMessage += error;
      } else if (error && typeof error === "object" && "message" in error) {
        errorMessage += String(error.message);
      }
      setErrors(errorMessage);
    }
  };

  const handleSignInWithGoogle = async (): Promise<void> => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) setErrors(error.message);
      handleAuthError(error);
    }
  };

  const handleSignInWithFacebook = async (): Promise<void> => {
    setLoading(true);
    try {
      await signInWithPopup(auth, facebookProvider);
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      if (error instanceof Error) setErrors(error.message);
      handleAuthError(error);
    }
  };

  const handleSignInWithGithub = async (): Promise<void> => {
    setLoading(true);
    try {
      await signInWithPopup(auth, githubProvider);
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) setErrors(error.message);
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
                type="email"
                placeholder="Email or phone number"
                value={credentials.email}
                onChange={handleEmailChange}
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
                value={credentials.password}
                onChange={handlePasswordChange}
                className="border p-4 rounded-xl text-text bg-background mb-4 focus:outline-primary focus:bg-white transition-all duration-500"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="size-4" />
              <span className="px-2 text-lg">Remember me</span>
            </div>

            {errors && <p className="text-red-500 text-sm">{errors}</p>}

            <Button
              onClick={handleLogin}
              variant="default"
              htmlType="submit"
              className="w-full flex justify-center"
            >
              {loading ? (
                <VscLoading className="size-6 animate-spin" />
              ) : (
                "Sign In"
              )}
            </Button>

            <div className="flex items-center justify-between">
              <div className="w-1/4 h-0.5 bg-gray-300" />
              <span className="text-text text-lg">Or continue with</span>
              <div className="w-1/4 h-0.5 bg-gray-300" />
            </div>

            <div className="grid grid-cols-3 my-2 gap-4">
              <AuthProviderButton
                isLoading={loading}
                onClick={handleSignInWithGoogle}
              >
                <FcGoogle className="size-6 mx-auto" />
              </AuthProviderButton>
              <AuthProviderButton
                isLoading={loading}
                onClick={handleSignInWithFacebook}
              >
                <IoLogoFacebook className="size-6 text-blue-500 mx-auto" />
              </AuthProviderButton>
              <AuthProviderButton
                isLoading={loading}
                onClick={handleSignInWithGithub}
              >
                <FaGithub className="size-6 mx-auto" />
              </AuthProviderButton>
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
