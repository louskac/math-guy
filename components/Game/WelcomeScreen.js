"use client";

import React, { useState } from "react";

const WelcomeScreen = ({ onStart }) => {
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");

  const handleStart = () => {
    onStart({ name: name || "Anonymous", wallet: wallet || "Not Provided" }); // Allow starting without a name or wallet
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/game/intro.webp')" }}
    >
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,1)] mb-6">
        Welcome to Rug Escape!
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] mb-4 max-w-xl">
        Pepe’s worst nightmare is here: <br />
        The rug is after him, Elon is laughing, and Belle is watching. <br />
        Dodge the FUD, grab those Diamond Hands, and don’t miss the Chill Guy power-ups. <br />
        <span className="text-yellow-300 font-bold">
          Best 3 result of the day gets rewarded with an airdrop!
        </span>
      </p>

      {/* Input Fields */}
      <div className="flex flex-col gap-4 items-center w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Enter your name (optional)"
          className="w-full px-4 py-2 border-2 border-gray-400 rounded-md text-black text-center text-lg focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your wallet address (optional)"
          className="w-full px-4 py-2 border-2 border-gray-400 rounded-md text-black text-center text-lg focus:outline-none"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />
        <p className="text-sm text-gray-300">
          <strong>Note:</strong> Games without a valid name and wallet address won’t count in the
          competition.
        </p>
      </div>

      {/* Start Button */}
      <button
        onClick={handleStart}
        className="px-8 py-3 bg-red-500 text-white text-lg font-bold uppercase rounded-md hover:bg-red-600 transition-shadow drop-shadow-lg hover:drop-shadow-xl"
      >
        Start the Chaos
      </button>
    </div>
  );
};

export default WelcomeScreen;