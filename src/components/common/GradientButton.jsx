'use client'
import React from 'react';

const GradientButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick ? onClick : null}
      className="relative md:px-8 md:py-3 px-5 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 overflow-hidden cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-400 via-blue-300 via-blue-100 to-blue-900"
        style={{
          animation: 'waveShift 3s ease-in-out infinite',
          backgroundSize: '300% 100%'
        }}
      ></div>
      
      {/* Button text */}
      <span className="relative z-10 drop-shadow-sm">{label}</span>
      
      <style jsx>{`
        @keyframes waveShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </button>
  );
};

export default GradientButton;

