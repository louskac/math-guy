"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const sections = [
    {
      title: "PepeGuy: Master of Chill",
      description:
        "PepeGuy isn’t just a token; it’s a lifestyle. Inspired by the legendary meme and the art of taking it easy, PepeGuy invites you to embrace the chill life while enjoying the potential of meme tokens. Join a community where humor meets innovation, and every day feels like a vibe-filled journey through the blockchain jungle.",
      img: "/images/stickers/1.jpg",
    },
    {
      title: "Pump? Chill.",
      description:
        "While the market panics, PepeGuy stays calm. Watch those green candles rise, but remember—the real value is in the memes we shared along the way. PepeGuy is here to amplify the fun of crypto without losing the chill. Sit back, grab a coffee, and watch the charts with a smirk.",
      img: "/images/stickers/2.jpg",
    },
    {
      title: "HODL Like a True Pepe",
      description:
        "The crypto world can be wild, but PepeGuy reminds you to stay cool. HODL isn’t just a strategy—it’s a mindset. Relax, take a deep breath, and let PepeGuy guide you through the waves. The best gains come to those who wait... and meme.",
      img: "/images/stickers/3.jpg",
    },
    {
      title: "Rekt Avoidance Plan",
      description:
        "Selling too soon? That’s a one-way ticket to Rektville. PepeGuy teaches you the art of patience, where believers are rewarded and paper hands are left behind. Stick with Pepe, and let’s vibe our way to the finish line.",
      img: "/images/stickers/4.jpg",
    },
    {
      title: "Gains Beyond Counting",
      description:
        "Imagine gains so massive even calculators give up. That’s the dream PepeGuy delivers. With a mix of memes, community, and unstoppable chill, we’re aiming for the kind of growth that makes headlines. Let’s make the future of crypto fun, impactful, and, above all, meme-tastic.",
      img: "/images/stickers/5.jpg",
    },
  ];

  return (
    <section id='about' className="overflow-hidden pt-40 pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <h2 className="mb-10 text-center text-3xl font-bold text-black dark:text-white">
          About MathGuy
        </h2>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse items-center gap-10 pb-20 lg:gap-32.5 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Text Content */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? 20 : -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                {section.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {section.description}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative mx-auto aspect-[1/1] w-full max-w-xs lg:w-1/2"
            >
              {/* Add a wrapper for 3D perspective */}
              <div className="image-wrapper">
                <div className="image-container">
                  <Image
                    src={section.img}
                    alt={section.title}
                    width={300} /* Replace with your preferred width */
                    height={300} /* Replace with your preferred height */
                    className="rounded-[5%] shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
