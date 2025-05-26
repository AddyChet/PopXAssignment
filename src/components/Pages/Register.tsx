import { BiX } from "react-icons/bi";
import authImg from "../../assets/auth.png";
import Button from "../ui/Button";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { useNavigate } from "react-router";
import type { authProp } from "../../utils/Interfaces";
import type { RegisterFormData } from "../../utils/Interfaces";

const Register: React.FC<authProp> = ({ setUser }) =>{
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();



const onSubmit = (data: RegisterFormData) => {
    navigate("/dashboard");
    setUser(data);
    console.log("Form Data:", data);
    // Handle form submission (API call, etc.)
};

  return (
    <div className="flex justify-center items-center h-screen w-screen px-4">
      <main className="max-w-7xl  flex flex-col md:flex-row gap-6 py-5 overflow-hidden border border-gray-200 shadow-md rounded-xl">
        {/* Left Section (Form) */}
        <section className="lg:w-5xl md:w-3xl flex flex-col justify-center px-6 ">
          {/* Logo */}
          <div className="flex items-center ">
            <BiX className="text-2xl  sm:text-xl lg:text-2xl text-button-600" />
            <span className="font-bold text-md sm:text-xl lg:text-2xl">
              PopX
            </span>
          </div>

          {/* Welcome Text */}
          <div className="py-5">
            <h1 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              Create your PopX Account
            </h1>
          </div>

          {/* Input Fields */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your full name"
              required="Required"
              register={register}
              errors={errors}
            />

            {/* Phone Number */}
            <Input
              label="Phone Number"
              name="phoneNumber"
              type="text"
              placeholder="Enter your number"
              required="Required"
              register={register}
              errors={errors}
            />

            {/* Email Address */}
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required="Required"
              register={register}
              errors={errors}
            />
            {/*Password */}
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required="Required"
              register={register}
              errors={errors}
            />

            <Input
              label="Company Name"
              name="companyName"
              type="text"
              register={register}
              errors={errors}
            />

            {/* Is Agency */}
            <div className="mb-4 relative">
              <p className="text-sm font-medium text-purple-600 mb-2">
                Are you an Agency?<span className="text-red-500 ml-1">*</span>
              </p>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="yes"
                    {...register("isAgency", {
                      required: "Please select an option.",
                    })}
                    className="mr-2 accent-purple-600"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="no"
                    {...register("isAgency", {
                      required: "Please select an option.",
                    })}
                    className="mr-2 accent-purple-600"
                  />
                  No
                </label>
              </div>
              {errors.isAgency && (
                <p className="text-red-500 lg:text-sm md:text-xs text-xs left-36 absolute md:left-28 bottom-0.5">
                  {typeof errors.isAgency?.message === "string" ? errors.isAgency.message : null}
                </p>
              )}
            </div>
            {/* Button */}
            <div>
              <Button
                text="Create Account"
                variant="primary"
                className="w-full py-2 px-2"
                type="submit"
              />
            </div>
          </form>

          {/* <p className='mt-4 text-sm text-gray-500'>Don’t have an account?<span className='ml-2'><Link to="/register">Sign Up</Link></span></p> */}

          <Link to="/login">
            <Button
              text="Already Registered? Login"
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

export default Register;
