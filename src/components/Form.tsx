import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";
import { newAccountSchema } from "../schemas";
import Button from "./Button";
import { FormValues } from "../types";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { VscLoading } from "react-icons/vsc";

export default function FormComponent() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAccountCreation = async (
    values: FormValues,
    {
      setErrors,
    }: {
      setErrors: (errors: FormikErrors<FormValues>) => void;
    }
  ) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = result.user;

      await updateProfile(user, {
        displayName: `${values.firstName} ${values.lastName}`,
      });

      setLoading(false);
      // const token = await user.getIdToken();
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setLoading(false);
      let errorMessage = "Something went wrong: ";
      if (error instanceof Error) {
        errorMessage += error.message;
        setErrors({ email: error.message });
      }
      throw new Error(errorMessage);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={newAccountSchema}
      onSubmit={(values, { setErrors }) =>
        handleAccountCreation(values, { setErrors })
      }
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="border py-2 px-3  text-sm  rounded-xl text-text bg-background focus:outline-primary focus:bg-white transition-all duration-500"
              />
              <ErrorMessage
                name="firstName"
                component="span"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="border px-3 py-2  text-sm rounded-xl text-text bg-background focus:outline-primary focus:bg-white transition-all duration-500"
              />
              <ErrorMessage
                name="lastName"
                component="span"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium mt-4">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email or phone number"
              className="border py-2 px-3 text-sm rounded-xl text-text bg-background focus:outline-primary focus:bg-white transition-all duration-500"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium mt-2">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="border py-2 px-3 text-sm rounded-xl text-text bg-background mb-2 focus:outline-primary focus:bg-white transition-all duration-500"
            />
            <ErrorMessage
              name="password"
              component="span"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium mt-2">
              Confirm Password
            </label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm password"
              className="border py-2 px-3 text-sm rounded-xl text-text bg-background focus:outline-primary focus:bg-white transition-all duration-500"
            />
            <ErrorMessage
              name="confirmPassword"
              component="span"
              className="text-red-500 text-sm"
            />
          </div>
          <Button type="default" className="w-full">
            {loading ? (
              <VscLoading className="size-6 animate-spin" />
            ) : (
              "Create Account"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
