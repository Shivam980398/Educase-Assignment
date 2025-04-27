import React from "react";
import FormComponent from "../components/formComponent";
import { signupFormFields } from "../assets/signupFormFields";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-35 m-5">
        <h1 className="font-sans font-bold text-xl ">
          Create Your PopX account
        </h1>
      </div>

      <FormComponent fields={signupFormFields} />

      <div className="px-3">
        <label className="text-sm font-semibold px-2 text-[#6C25FF]">
          <span className="text-red-600">*</span>
          Are you an Agency?{" "}
        </label>
        <br />
        <input type="radio" name="agency" value="yes" className="ml-3" /> Yes
        <input type="radio" name="agency" value="no" className="ml-1" /> No
        {/* <span className="text-red-600">*</span> */}
      </div>
      <div className="absolute bottom-8 ml-5 flex justify-center align-bottom self-end ">
        <button
          type="submit"
          className="w-80 bg-[#6C25FF] align-bottom text-white text-xl py-2 px-12 rounded-md font-medium"
          onClick={() => navigate("/AccountSettings")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
