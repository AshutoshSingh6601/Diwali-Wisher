import React from "react";
import Frame from "../assets/images/Frame.png";
import Bhagwaan from "../assets/images/Bhagwaan.png";
import Cycle2 from "../assets/images/Cycle2.png";
import Cycle3 from "../assets/images/Cycle3.png";
import Gift from "../assets/images/Gift.png";
import Bomb1 from "../assets/images/Bomb1.png";
import Bomb2 from "../assets/images/Bomb2.png";
import { Link } from "react-router-dom";

const BlessingsPage = () => {
  return (
    <>
    {/* =====Blessings====== */}
      <div className="bg-[#f2ddb4] w-full h-[40rem] phone:h-screen overflow-x-hidden relative">
        <img
          className="absolute phone:top-24 -top-48 animate-spin phone:-right-72 w-[36rem] mix-blend-darken"
          src={Cycle2}
          alt=""
        />
        <img
          className="absolute phone:top-10 phone:left-24 bottom-0 p-2 phone:w-[55rem] object-contain object-center z-10"
          src={Frame}
          alt=""
        />
        <img
          className="absolute bottom-10 left-2 w-[65rem] phone:left-[4.7rem] phone:w-[60rem] object-contain object-center "
          src={Bhagwaan}
          alt=""
        />
      </div>

    {/* =====Wishing====== */}
      <div className="bg-gradient-to-r from-[#f6bc64] to-[#f97f65] w-full h-screen overflow-hidden phone:grid phone:grid-cols-4 relative">
      <div className="phone:bg-[#ffdf63] phone:h-screen h-1/5 phone:col-span-1">
        <img
          className="absolute phone:top-24 -top-56 animate-spin phone:-left-80 w-[36rem] z-10"
          src={Cycle3}
          alt=""
        />
      </div>
      <div className="phone:col-span-3 phone:p-24 p-5 phone:px-36">
          <div className="relative w-full h-full bg-gradient-to-tr from-[#870551] to-[#481d6c] p-5 phone:p-14 rounded-xl text-gray-50">
            <h2 className="phone:text-4xl text-xl pb-10 font-medium font-[Poppins]">Thank You for Being a Part of This Light!</h2>
            <p className="phone:text-xl font-[Poppins] text-sm">
This website was created especially for you, a small gift to share in the warmth and wonder of Diwali. 
<br /><br />
Every colour, every word holds a wish for your happiness, woven together with the hope that it brings a spark of joy into your day.
<br /><br />
As you scroll through, know that each moment here is a gentle reminder of the light you bring to those around you. May this Diwali fill your heart with laughter, warmth, and a glow that brightens every corner of your world.
<br /><br />
With love and light,<br />
Ashutosh</p>

<p className="text-sm phone:absolute bottom-5 left-20 text-red-500">Click on Gift to go Home Page ---- &gt;</p>
<Link to='/' className="py-1 px-5 rounded absolute -bottom-10 right-14 phone:-bottom-16 phone:right-52 z-10"><img
          className=" w-[6rem] phone:w-[15rem] object-contain object-center"
          src={Gift}
          alt=""
        /></Link>
        <img
          className="absolute -top-5 -left-5 w-14 phone:-top-20 phone:-left-36 phone:w-[15rem] object-contain object-center z-10"
          src={Bomb1}
          alt=""
        />
        <img
          className="absolute -bottom-20 -right-10 phone:-bottom-40 phone:-right-14 w-28 phone:w-[15rem] object-contain object-center z-10"
          src={Bomb2}
          alt=""
        />
          </div>
      </div>
      </div>
    </>
  );
};

export default BlessingsPage;
