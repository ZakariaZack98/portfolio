"use client"
import React from "react";

const AnimatedBtn = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-2 rounded-lg font-semibold text-white bg-black overflow-hidden ${className}`}
    style={{ zIndex: 1 }}
  >
    <span className="relative z-10">{children}</span>
    <span
      aria-hidden
      className="absolute inset-0 rounded-lg p-[2px] pointer-events-none"
      style={{
        background:
          "linear-gradient(90deg, #ff6a00, #ee0979, #ff6a00, #ee0979)",
        backgroundSize: "200% 200%",
        animation: "gradient-border 3s linear infinite",
      }}
    />
    <style jsx>{`
      button:hover span[aria-hidden] {
        animation: gradient-border-hover 1.5s linear infinite;
        background: linear-gradient(90deg, #00f2fe, #4facfe, #00f2fe, #4facfe);
        background-size: 200% 200%;
      }
      button span[aria-hidden] {
        z-index: 0;
        mask-image: linear-gradient(#fff 0 0), linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-image: linear-gradient(#fff 0 0), linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
      }
      @keyframes gradient-border {
        0% {
          background-position: 0% 50%;
        }
        100% {
          background-position: 100% 50%;
        }
      }
      @keyframes gradient-border-hover {
        0% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `}</style>
  </button>
);

export default AnimatedBtn;