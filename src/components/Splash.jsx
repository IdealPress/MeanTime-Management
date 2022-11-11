// Modules
import { useEffect, useState, useRef } from "react";

// Styles
import logo from "../assets/Logo.svg"
import logo2 from "../assets/Logo2.svg"
import logo3 from "../assets/Logo3.svg"
import logo4 from "../assets/Logo4.svg"
import logo5 from "../assets/Logo5.svg"


// Assets
import "./Splash.css"

export function useInterval(callback, delay) {
  const intervalRef = useRef(null);
  const savedCallback = useRef(callback);
  
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);

  return intervalRef;
}

export function useTimeout(callback, delay) {

  const timeoutRef = useRef(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay);
      return () => window.clearTimeout(timeoutRef.current);
    }
  }, [delay]);
  
  return timeoutRef;
};

// Component
export default function Splash({ hide }) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  
  const logos = [logo, logo2, logo3, logo4, logo5]

  useTimeout(() => {
    hide();
  }, 4000);

  useInterval(
    () => {
      setTimeElapsed((timeElapsed) => 
        timeElapsed >= logos.length - 1 ? 0 : timeElapsed + 1
      );
    },
    500
  );

  return (
    <div id="splash" onClick={hide} >
      <img src={logos[timeElapsed]} />
    </div>
  )
}