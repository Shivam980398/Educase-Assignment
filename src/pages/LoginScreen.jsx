import React from "react";
import FormComponent from "../components/formComponent";
import { useNavigate } from "react-router-dom";

const loginFields = {
  username: {
    label: "Username",
    placeholder: "Enter your username",
    required: true,
    type: "text",
  },
  password: {
    label: "Password",
    placeholder: "Enter password",
    required: true,
    type: "password",
  },
};

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-35 m-5 mb-0">
        <h1 className="font-sans font-bold text-xl ">
          Signin to your PopX account
        </h1>
      </div>
      <div className="w-55 m-3 ml-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
      </div>
      <FormComponent fields={loginFields} />
      <div className="  flex justify-center mt-4">
        <button
          className="w-80 bg-[#6C25FF] align-bottom text-white text-xl py-2 rounded-md font-medium"
          onClick={() => navigate("/AccountSettings")}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
