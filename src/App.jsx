import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import LandingScreen from "./pages/LandingScreen";
import SignUp from "./pages/SignUp";
import Login from "./pages/LoginScreen";
import AccountSettings from "./pages/AccountSetting";

const App = () => {
  return (
    <div className="h-[599px] mt-0 flex items-center justify-center bg-[#F7F8F9]">
      <div className="w-[375px] h-[588px] bg-gray-199 border-2 border-gray-300">
        <Router>
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AccountSettings" element={<AccountSettings />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
