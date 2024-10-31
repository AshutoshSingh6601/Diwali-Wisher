import React, { useEffect } from 'react'
import Cycle1 from "../assets/images/Cycle1.png";
import Kandil from "../assets/images/Kandil.png";
import Diya1 from "../assets/images/Diya1.png";
import Diya2 from "../assets/images/Diya2.png";
import Mithai1 from "../assets/images/Mithai1.png";
import Mithai2 from "../assets/images/Mithai2.png";
import Ghee from "../assets/images/Ghee.png";
import { Link, useNavigate } from 'react-router-dom';


const HomePage = ({handelBurstCracker}) => {

  let userName = new URLSearchParams(location.search).get('name')

  // let navigate = useNavigate()

  // useEffect(() => {
  //   if(localStorage.getItem('Wisher')){
  //       navigate('/')
  //   }
  //   else{
  //       navigate('/name')
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className="relative overflow-x-hidden bg-gradient-to-r from-[#ce6051] to-[#9f2f76] h-screen w-full text-gray-50 flex flex-col items-center justify-center">
    <div className="phone:w-5/12 w-11/12">
      <h1 className="phone:text-6xl text-3xl font-semibold phoen:font-bold text-shadow">Happy Diwali <span className='capitalize'>{userName}</span>!</h1>
      <p className="phone:py-10 py-5 text-2xl text-shadow">
        Let’s dive into the sweets, light up the crackers, <br className='hidden phone:block' /> share the
        laughs and build memories that light up your hearts as much as the
        night sky. <br className='hidden phone:block' />
        Let’s celebrate!
      </p>
      <div className="phone:flex justify-between">
        <Link to='/cracker'><button onClick={handelBurstCracker} className="bg-gray-50 hover:bg-gray-200 text-gray-900 phone:px-16 px-11 rounded-full font-semibold shadow-lg text-xl py-2 mb-5 phone:mb-0">
          Burst a Cracker!
        </button></Link>
        <Link to='/blessing' ><button className="border-2 phone:px-16 px-11 rounded-full drop-shadow-lg shadow-lg text-shadow text-xl py-2">
          Get Blessings
        </button> </Link>
      </div>
    </div>
      <img
        className="absolute phone:top-24 -top-48  animate-spin left-10 phone:-left-80 w-80 phone:w-[35rem]"
        src={Cycle1}
        alt=""
      />
      <img
        className="absolute bottom-16 max-[414px]:left-5 phone:bottom-0 phone:top-0 phone:right-5 phone:w-32 w-10"
        src={Kandil}
        alt=""
      />
      <img
        className="absolute phone:top-20 phone:right-80 top-56 right-3 w-8 phone:w-48 hidden phone:block"
        src={Diya1}
        alt=""
      />
      <img
        className="absolute top-[27rem] phone:top-[27vw] -right-1 w-32 -rotate-12 "
        src={Ghee}
        alt=""
      />
      <img
        className="absolute bottom-0 right-1 phone:w-64 w-40 z-10"
        src={Mithai1}
        alt=""
      />
      <img
        className="absolute bottom-0 phone:right-60 right-36 w-48"
        src={Mithai2}
        alt=""
      />
      <img
        className="absolute bottom-0 right-[26rem] w-40 hidden phone:block"
        src={Diya2}
        alt=""
      />

  </div>
  )
}

export default HomePage