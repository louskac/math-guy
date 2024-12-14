"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [address, setAddress] = useState("E7FvTn2cebMVh8mai1qiA93Y5xwMvhHZ8nUxtsYVpump");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true); // Show the "Copied" tooltip
    setTimeout(() => setCopied(false), 2000); // Hide it after 2 seconds
  };

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🚀 Trumpius Maximus - The new lifestyle
            </h4>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
              To the Moon {" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                and Beyond!
              </span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
            Trumpius Maximus is the chillest meme token in the game, inspired by the timeless vibes of everyone's favorite frog. This is a community takeover with our own CTO. Whether you're here for the memes, the community, or the moon, Trumpius Maximus has you covered. Embrace the chill, HODL tight, and let’s vibe together as we ride the blockchain wave to new heights! 🐸✌️
            </p>

            <div className="mt-10">
              <div>
                <div className="relative flex flex-wrap gap-5">
                  <input
                    value={address}
                    readOnly
                    className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                  />
                  <div className="relative">
                    <button
                      onClick={handleCopy}
                      aria-label="copy address button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Copy Address
                    </button>
                    {copied && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 rounded-lg bg-black px-3 py-1 text-sm text-white shadow-lg dark:bg-gray-800">
                        Copied!
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-5 text-black dark:text-white">
                  Join us if you're really as chill as we are...
                </p>
              </div>
            </div>
          </div>

          <div className="animate_right hidden md:w-1/2 lg:block">
            <div className="relative 2xl:-mr-7.5">
              {/* Replace the static image with a GIF */}
              <div className="relative aspect-[500/500] w-full">
                <Image
                  className="shadow-solid-l"
                  src="/images/hero/trump.jpg" // Replace with the actual path to your GIF
                  alt="Trumpius Maximus Meme"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
