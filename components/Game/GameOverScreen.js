"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase"; // Ensure this path is correct based on your project structure

const GameOverScreen = ({ onRestart, score }) => {
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRestart = async () => {
    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);

    // Default values for name and wallet
    const playerName = name || "Anonymous";
    const playerWallet = wallet || "Not Provided";

    // Save data to Supabase
    try {
      const { data, error } = await supabase.from("leaderboard").insert([
        {
          name: playerName,
          wallet: playerWallet,
          score, // Use the score passed as a prop
        },
      ]);

      if (error) {
        console.error("Error saving score to the database:", error.message);
      } else {
        console.log("Score successfully saved:", data);
      }
    } catch (err) {
      console.error("Unexpected error while saving score:", err);
    } finally {
      setIsSubmitting(false);
      // Restart the game
      onRestart({ name: playerName, wallet: playerWallet });
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/game/intro.webp')" }}
    >
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,1)] mb-6">
        Game Over!
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] mb-4 max-w-xl">
        You scored <span className="text-yellow-300 font-bold">{score}</span> points! <br />
        But the rug got you in the end. Don't let the FUD win! <br />
        <span className="text-yellow-300 font-bold">
          Retry and aim for the airdrop leaderboard!
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

      {/* Retry Button */}
      <button
        className="px-8 py-3 bg-red-500 text-white text-lg font-bold uppercase rounded-md hover:bg-red-600 transition-shadow drop-shadow-lg hover:drop-shadow-xl"
        onClick={handleRestart}
        disabled={isSubmitting} // Disable button while submitting
      >
        {isSubmitting ? "Saving..." : "Retry the Chaos"}
      </button>
    </div>
  );
};

export default GameOverScreen;
