import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/AI_Planet_Logo.png";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="h-14 px-5 md:px-24 py-2">
      <img
        onClick={() => {
          navigate("/");
        }}
        className="h-10"
        src={logo}
        alt=""
      />
    </div>
  );
}

export default Header;
