import React from "react";
import Image from "../assets/4207.jpg";
const Welcome = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <img width={280} src={Image} alt="welcome" />
    </div>
  );
};

export default Welcome;
