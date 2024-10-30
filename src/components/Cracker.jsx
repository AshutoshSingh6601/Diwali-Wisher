import React from "react";
import { Link } from "react-router-dom";

const Cracker = ({ SingleCracker }) => {
  let {cracker, sound} = SingleCracker
  return (
    <div className="w-full h-screen bg-gray-700 overflow-hidden">
      <Link to="/">
        <img
          src={cracker}
          className="object-contain object-center w-full h-full "
          alt=""
        />
      </Link>
      <audio controls autoPlay loop>
        <source src={sound} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Cracker;
