import { useState } from "react";

import Splash from "./components/Splash";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true); 
  return (
    <>
      {showSplash && 
        <Splash
          hide={() => {setShowSplash(false)}} 
        />
      }
      <Navigation />
      <Hero />
      <Footer />
    </>
  )
}

export default App
