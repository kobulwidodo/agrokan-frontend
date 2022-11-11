import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bgGradient from "../../assets/images/bg-auth.png";
import humanFall from "../../assets/images/human-fall.png";
import orContinue from "../../assets/images/or-continue.svg";
import google from "../../assets/icons/google.svg";
import apple from "../../assets/icons/apple.svg";
import fb from "../../assets/icons/fb-color.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import NavbarAuth from "../../components/NavbarAuth";
import { useState } from "react";
import useSnackbar from "../../hooks/useSnackbar";
import { registerUser } from "../../api/model/user";

const formData = {
  email: {
    value: "",
    required: true,
  },
  phone_number: {
    value: "",
    required: true,
  },
  password: {
    value: "",
    required: true,
  },
};

const Signup = () => {
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const snackbar = useSnackbar();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        value: e.target.value,
      },
    });
  };

  const validateData = () => {
    let errorsData = {};
    Object.keys(data).forEach((key) => {
      const dataCheck = data[key];
      if (dataCheck.required) {
        if (!dataCheck.value) {
          errorsData = {
            ...errorsData,
            [key]: `${key + " tidak boleh kosong"}`,
          };
        }
      }
    });
    setErrors(errorsData);
    return Object.keys(errorsData).length < 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateData()) {
      try {
        setIsSubmit(true);
        const res = await registerUser(
          data.email.value,
          data.phone_number.value,
          data.password.value
        );
        snackbar.success(res.data.meta.message);
        navigate("/signin");
      } catch (error) {
        console.log(error);
        snackbar.error(error.response?.data.meta.message ?? error);
      } finally {
        setIsSubmit(false);
      }
    }
  };

  return (
    <>
      <img
        src={bgGradient}
        className="absolute h-screen scale-y-75 -top-20 -z-50"
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-3 relative max-w-7xl mx-auto px-4">
        <div className="hidden md:block relative col-span-2 min-h-screen">
          <NavbarAuth />
          <div className="py-52">
            <h1 className="text-5xl font-semibold w-1/2 leading-snug">
              Register to Recharge Direct
            </h1>
            <p className="text-xl mt-10 w-72 tracking-widest">
              if you have account you can{" "}
              <Link to="/signin" className="text-[#04B15E] font-semibold">
                Login here!
              </Link>
            </p>
            <img
              src={humanFall}
              className="absolute top-96 right-20 -z-50"
              alt=""
            />
          </div>
        </div>
        <div className="mx-auto pt-10 w-full">
          <div className="flex justify-between">
            <div className="flex gap-x-2">
              <h1 className="text-[#1D1D1F] text-lg">English</h1>
              <img src={arrowDown} alt="" />
            </div>
            <div className="">
              <h1 className="text-[#04B15E] text-lg">Register</h1>
            </div>
          </div>
          <div className="md:hidden block mt-10">
            <h1 className="text-5xl text-center font-semibold leading-snug">
              Register to Recharge Direct
            </h1>
            <p className="text-xl text-center mt-10 tracking-widest">
              if you have account you can{" "}
              <Link to="/signin" className="text-[#04B15E] font-semibold">
                Login here!
              </Link>
            </p>
          </div>
          <form className="mt-10 md:mt-40" onSubmit={handleSubmit}>
            <Input
              margin="mb-5"
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
            />
            <Input
              margin="mb-5"
              type="number"
              placeholder="Enter Phone Number"
              name="phone_number"
              onChange={handleChange}
            />
            <Input
              margin="mb-5"
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
            <div className="">
              <Button
                label="Sign Up"
                type="full"
                isLink={false}
                className="font-bold"
              />
            </div>
            <div className="">
              <img src={orContinue} className="w-full" alt="" />
            </div>
            <div className="grid grid-cols-3 gap-x-5">
              <Link className="bg-[#F6F6F6] px-8 py-3 rounded-md border border-[#DDDFDD] hover:bg-[#dcdcdc]">
                <img src={google} alt="" className="mx-auto" />
              </Link>
              <Link className="bg-[#F6F6F6] px-8 py-3 rounded-md border border-[#DDDFDD] hover:bg-[#dcdcdc]">
                <img src={apple} alt="" className="mx-auto" />
              </Link>
              <Link className="bg-[#F6F6F6] px-8 py-3 rounded-md border border-[#DDDFDD] hover:bg-[#dcdcdc]">
                <img src={fb} alt="" className="mx-auto" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
