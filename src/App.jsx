import React, { useState } from "react";
import BlessingsPage from "./components/BlessingsPage";
import HomePage from "./components/HomePage";
import Cracker from "./components/Cracker";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cracker1 from "./assets/images/Cracker 1.gif";
import Cracker2 from "./assets/images/Cracker 2.gif";
import Cracker3 from "./assets/images/Cracker 3.gif";
import Cracker4 from "./assets/images/Cracker 4.gif";

import sound1 from './assets/images/Cracker1Sound.mp3'
import sound3 from './assets/images/Cracker3Sound.mp3'
import sound4 from './assets/images/Cracker4Sound.mp3'
import Name from "./components/Name";

const App = () => {

  let crackers = [{cracker: Cracker1, sound: sound1}, {cracker: Cracker2}, {cracker: Cracker3, sound: sound3}, {cracker: Cracker4, sound: sound4}]
  const [SingleCracker, setSingleCracker] = useState(crackers[0])
    
    const handelBurstCracker = () =>{
      setSingleCracker(crackers[Math.floor(Math.random() * crackers.length)])
    }
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage handelBurstCracker={handelBurstCracker} />} />
        <Route path="/blessing" element={<BlessingsPage />} />
        <Route path="/cracker" element={<Cracker SingleCracker={SingleCracker} />} />
        <Route path="/name" element={<Name SingleCracker={SingleCracker} />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
