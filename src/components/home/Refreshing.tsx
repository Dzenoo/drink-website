"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Refreshing: React.FC = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(textRef.current, {
      duration: 0.5,
      webkitTextFillColor: "transparent",
      webkitTextStrokeWidth: "1.5px",
      delay: 0.5,
    }).to(textRef.current, {
      duration: 0.5,
      webkitTextFillColor: "black",
      webkitTextStrokeWidth: "0px",
      delay: 0.5,
    });
  }, []);

  return (
    <div>
      <h1 ref={textRef} className="text-[27em] font-bold">
        Refreshing
      </h1>
    </div>
  );
};

export default Refreshing;
