import React from "react";
import { BiX } from "react-icons/bi";
import authImg from "../../assets/auth.png";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { defaultUser } from "../../utils/defaultUser";

const Login= () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    navigate("/dashboard")
    localStorage.setItem("user", JSON.stringify(defaultUser));
    // Handle form submission (API call, etc.)
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen px-4">
      <main className="max-w-7xl flex flex-col md:flex-row gap-6  py-5 overflow-hidden border border-gray-200 shadow-md rounded-xl">
        {/* Left Section (Form) */}
        <section className="w-full lg:w-5xl md:w-3xl flex flex-col justify-center p-6 ">
          {/* Logo */}
          <div className="flex items-center py-4">
            <BiX className="text-2xl  sm:text-2xl lg:text-2xl text-button-600" />
            <span className="font-bold text-md sm:text-xl lg:text-2xl">
              PopX
            </span>
          </div>

          {/* Welcome Text */}
          <div className="py-5">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              Welcome to POPX
            </h1>
            <p className="text-gray-400 mt-1">
              Hey, welcome back to your special place.
            </p>
          </div>

          {/* Input Fields */}
          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email Address"
              name="email"
              errors={errors}
              register={register}
              placeholder="Enter your email"
              required="Required"
              type="text"
            />

             <Input
              label="Password"
              name="password"
              errors={errors}
              register={register}
              placeholder="Enter your password"
              required="Required"
              type="password"
              
            />
             <Button
              text="Sign in"
              variant="primary"
              className="w-full py-2 px-2"
            />
          </form>

          <Link to="/register">
            <Button
              text="Not Registered? Login"
              className="w-full py-2 px-2 mt-4"
              variant="secondary"
            />
          </Link>
        </section>

        {/* Right Section (Image) */}
        <section className="w-full md:3/4 hidden md:block mr-6">
          <img
            src={authImg}
            alt="Auth Visual"
            className="w-full h-full object-cover rounded-4xl"
          />
        </section>
      </main>
    </div>
  );
};

export default Login;
