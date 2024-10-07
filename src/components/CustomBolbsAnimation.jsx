"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CustomBlobsAnimation() {
  const interBubbleRef = useRef(null); // Reference for the bubble element
  const [curX, setCurX] = useState(0); // State for current X position
  const [curY, setCurY] = useState(0); // State for current Y position
  const [tgX, setTgX] = useState(0); // State for target X position
  const [tgY, setTgY] = useState(0); // State for target Y position

  // Function to handle the movement animation
  const move = () => {
    setCurX((prevX) => prevX + (tgX - prevX) / 20);
    setCurY((prevY) => prevY + (tgY - prevY) / 20);
    if (interBubbleRef.current) {
      interBubbleRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }
    requestAnimationFrame(move); // Continue the animation loop
  };

  useEffect(() => {
    // Function to update target positions on mousemove
    const handleMouseMove = (event) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Start the animation
    move();

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [curX, curY]); // Dependencies to ensure the effect runs correctly

  return (
    
<>
<svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div className="gradients-container">
      <div className="g1"></div>
      <div className="g2"></div>
      <div className="g3"></div>
      <div className="g4"></div>
      <div className="g5"></div>
      <div id="interactive"></div>
    </div>
  </>
  );
}
