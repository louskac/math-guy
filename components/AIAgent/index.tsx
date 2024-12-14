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
      "The market may be volatile, but my vibe is stable. 🐸✌️",
      "Tokenomics? Just add good vibes and subtract the FUD.",
      "HODL life: Chill first, moon later. 🌕🐸",
      "Trumpius Maximus staking rewards: Inner peace and 69% APR.",
      "Liquidity pools are like hot tubs—just chill and enjoy the bubbles. 🛁🐸",
      "Gas fees? Nah, just breathe and let Pepe cover it.",
      "Market cap is temporary. Chill is forever. 🐸😎",
      "Circulating supply? Enough for everyone to vibe. ✨🐸",
      "Trumpius Maximus tokens multiply when shared. It's meme science. 🧪",
      "When Lambo? When vibes align, my friend. 🐸🚗",
      "Price prediction: Trumpius Maximus to infinity and chill. 🛌",
      "Airdrops are like rainbows—unexpected but magical. 🌈🐸",
      "Slippage? Just a reminder to go with the flow. 🐸💧",
      "Every Trumpius Maximus transaction plants a vibe tree. 🌳🐸",
      "1 Trumpius Maximus = a lifetime of good memes. 🐸📈",
      "Token burns? Nah, just lighting up the vibe candle. 🕯️🐸",
      "ROI = Relaxation Over Investment. 🐸✌️",
      "Trumpius Maximus doesn’t rug—he’s just laying down for a nap. 🐸💤",
      "Chill is the ultimate utility. Everything else is just extra. 🐸",
      "To the moon? Nah, we’re headed to the hammock. 🌌🛌",
      "Trumpius Maximus vibes so hard even FUD takes a vacation. 🐸🌴",
      "Memes aren’t just tokens; they’re the currency of chill. 🐸✨",
      "Trumpius Maximus doesn’t chase pumps—he meditates through dips. 🧘‍♂️🐸",
      "1 SOL + Trumpius Maximus = Zen. Simple math. 🐸✌️",
      "Wallet balance? As long as you’ve got memes, you’re rich. 🐸💸",
      "Trumpius Maximus's roadmap: Step 1—Chill. Step 2—Repeat. 🐸🚶‍♂️",
      "Every block mined brings us closer to eternal meme vibes. 🐸💎",
      "The only thing faster than Solana? Trumpius Maximus chilling through it. 🐸🏎️",
      "The supply is infinite, but the chill is priceless. 🐸😌",
      "Burning tokens? Nah, we’re just toasting marshmallows. 🔥🐸",
      "The graph may dip, but Trumpius Maximus’s chill only ascends. 📉🐸📈",
      "Trumpius Maximus: Proof that memes + chill = unstoppable. 🐸✨",
      "Staking Trumpius Maximus tokens gives +10 to chill and -10 to stress. 🐸",
      "When moon? When Pepe finishes his nap. 🌕🐸",
      "The only pump Trumpius Maximus cares about is his bike tires. 🚴🐸",
      "Market chaos? Just remember: Trumpius Maximus thrives in the vibe. 🐸✌️",
      "Buy the dip, stack the memes, and vibe on. 🐸🚀",
      "The blockchain is immutable. Trumpius Maximus’s chill? Even more so. 🐸✨",
      "Every HODL story starts with a chill vibe. 🐸📖",
      "Don’t watch the chart—watch the memes flow. 🐸🌊",
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
    <section id="AIAgent" className="pb-20 pt-16">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* AI Input/Output Section */}
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
              🎉 Trumpius Maximus is the chillest AI Agent in the world!
            </h2>
            <p className="mb-6 text-gray-300">
              Worried about the market? Ask me anything to get chill (and most imporantly *totally accurate*) answers!
            </p>
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Just chill bro"
                className="w-full rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
              />
              <button
                onClick={handleGenerate}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black p-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Get chilled
              </button>
            </div>
            {displayedText && (
              <div className="mt-6 text-lg font-semibold text-black dark:text-white">
                {displayedText}
              </div>
            )}
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src="/images/AIAgent.jpg"
              alt="Trumpius Maximus AI Agent"
              width={500}
              height={500}
              className="shadow-solid-l rounded-[5%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgent;
