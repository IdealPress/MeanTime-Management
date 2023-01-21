import { useState } from "react";


import Splash from "./components/Splash";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import './App.css'
import Organogram from "./components/Organogram";
import Walk from "./components/Walk";

function App() {
  const [showSplash, setShowSplash] = useState(true); 
  return (
    <>
      {showSplash && 
        <Splash
          hide={() => {setShowSplash(false)}} 
        />
      }
      <Navigation invert />
      <div className="headline">
        <p>Does your <i>time</i> work for you?</p>
      </div>
      <Hero />
      <Walk />
      <Organogram />
      <Footer />
    </>
  )
}

export default App
