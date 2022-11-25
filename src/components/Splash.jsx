// Modules
import { useEffect, useState, useRef } from "react";

// Components
import { LogoA, LogoB, LogoC, LogoD, LogoE } from "./svg"


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
  
  const logoComponents = [
    <LogoA />, 
    <LogoB />, 
    <LogoC />, 
    <LogoD />, 
    <LogoE />
  ]

  useTimeout(() => {
    hide();
  }, 4000);

  useInterval(
    () => {
      setTimeElapsed((timeElapsed) => 
        timeElapsed >= logoComponents.length - 1 ? 0 : timeElapsed + 1
      );
    },
    500
  );

  return (
    <div id="splash" onClick={hide} >
      { logoComponents[timeElapsed] }
    </div>
  )
}