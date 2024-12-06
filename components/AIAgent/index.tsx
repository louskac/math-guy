"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const AIAgent = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleGenerate = () => {
    if (!input) return;

    const funResponses = [
      "1 SOL = 10^googol MathGuy tokens. Just trust me, bro.",
      "Pump it up! 2 + 2 = 🚀.",
      "The current market cap of MathGuy is infinity + 42.",
      "Burning tokens? That's just dividing by 0!",
      "Staking rewards are 500%... per second. HODL tight!",
      "Solana block time is so fast it travels back in time!",
      "1 MathGuy = 3.14 SOL. Don’t ask why. It’s math.",
      "Circulating supply? All of it, and then some.",
      "Market cap = Number of memes posted × Number of tacos eaten.",
      "Liquidity pools are just bathtubs full of SOL.",
      "Tokenomics? Easy! Multiply vibes by 🚀 and divide by FUD.",
      "Airdrops coming soon... as soon as I figure out how planes work.",
      "Gas fees on Solana = 0 + whatever you feel like donating.",
      "Price prediction: 1 SOL = 1 SOL but upside-down.",
      "When moon? When SOL + SOL = SUN.",
      "Your wallet balance just tripled. You're welcome.",
      "If MathGuy’s volume goes to zero, it loops back to infinity.",
      "Every transaction increases your IQ by 10 points. Math checks out.",
      "MathGuy tokens are worth more than your calculator says.",
      "Supply is capped at ∞ tokens. Scarcity is overrated.",
      "To the moon? Nah, we’re going to Pluto and back twice.",
      "MathGuy doesn’t follow Fibonacci. It follows memes!",
      "Quadratic equations solved? No, we quadratic YOLO.",
      "Divide SOL by MathGuy, and you get Elon’s next tweet.",
      "2 SOL + 2 SOL = More SOL. That's tokenomics 101.",
      "The utility of MathGuy tokens? Proving all math teachers wrong.",
      "Slippage is 0%, but only if you believe in magic.",
      "HODL + HODL = 🚀🚀🚀.",
      "MathGuy is deflationary because it defies inflation.",
      "Token burns reduce supply by multiplying by π.",
      "Decimals? MathGuy doesn’t need decimals—just vibes.",
      "Total value locked = $1B + your mom’s credit card limit.",
      "MathGuy liquidity pools are made of SOL and good intentions.",
      "Every block mined by MathGuy grants eternal meme powers.",
      "Supply = 420,000,000,000, but only after staking rewards.",
      "The only thing faster than Solana? MathGuy’s jokes.",
      "ROI = Infinity minus FUD plus diamond hands.",
      "Memes ÷ SOL = MathGuy dominance in the crypto space.",
      "The price chart is a parabola because MathGuy loves geometry.",
      "1 SOL = infinite MathGuy, but only if you ask nicely.",
    ];

    const randomResponse =
      funResponses[Math.floor(Math.random() * funResponses.length)];

    setResponse(randomResponse);
    setDisplayedText(""); // Reset displayed text
    setIsTyping(true); // Start typing effect
  };

  useEffect(() => {
    if (isTyping && response) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => {
          const nextLength = prev.length + 1;
          if (nextLength === response.length) {
            setIsTyping(false); // Stop typing effect when done
            clearInterval(interval);
          }
          return response.slice(0, nextLength);
        });
      }, 50); // Adjust speed of typing effect (milliseconds per character)

      return () => clearInterval(interval);
    }
  }, [isTyping, response]);

  return (
    <section className="pb-20 pt-16">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* AI Input/Output Section */}
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-white">
              🎉 MathGuy is the smartes AI Agent on the Market!
            </h2>
            <p className="mb-6 text-gray-300">
              Test me to get fast and fun (and mathematically *totally sound*) answers!
            </p>
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything math-related"
                className="w-full rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
              />
              <button
                onClick={handleGenerate}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 p-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blue-700 dark:bg-btndark dark:hover:bg-blackho"
              >
                Get Answer
              </button>
            </div>
            {displayedText && (
              <div className="mt-6 text-lg font-semibold text-white">
                {displayedText}
              </div>
            )}
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src="/images/AIAgent.png"
              alt="MathGuy AI Agent"
              width={500}
              height={500}
              className="rounded-lg shadow-solid-l"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgent;
