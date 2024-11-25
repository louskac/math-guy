"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const sections = [
    {
      title: "I'm not really a math guy",
      description:
        "Meet MathGuy, your gateway to the meme token revolution. Inspired by the hilarious Puss in Boots quote, this token is all about combining the fun and whimsy of internet culture with the cutting-edge technology of Solana. Why join? Because MathGuy isn’t just a meme—it’s a movement. It’s a chance to laugh, connect, and grow together as we ride the wave of the blockchain revolution.",
      img: "/images/stickers/1.png",
    },
    {
      title: "Watch it pump",
      description:
        "The crypto market is buzzing, and Solana tokens are leading the charge. MathGuy is here to amplify the excitement with a community-powered token that’s as fun as it is ambitious. Hop on board as we aim for the moon, and don’t forget to grab some popcorn while watching those green candles light up the charts. Together, we’ll turn every pump into a party.",
      img: "/images/stickers/2.png",
    },
    {
      title: "HODL, my friend",
      description:
        "Hold On for Dear Life! The crypto journey can feel like a rollercoaster with its ups and downs, but MathGuy is here to remind you that patience is everything. When the journey gets tough, the tough get ahead. Our token is built on community and trust, so lean back, relax, and enjoy the ride. Good things come to those who wait—and those who hold.",
      img: "/images/stickers/3.png",
    },
    {
      title: "Sellers rekt",
      description:
        "We’ve all heard the stories—people who sold too soon and missed out on life-changing gains. Don’t be that person! MathGuy is here to remind you to think long-term and trust the process. Sellers may end up rekt, but those who stay strong and believe in the vision will be the ones celebrating at the finish line.",
      img: "/images/stickers/4.png",
    },
    {
      title: "Wish I could count it",
      description:
        "What’s better than imagining gains so big they can’t be counted? MathGuy is all about dreaming big and delivering results. Whether you’re in it for the memes or the moonshot, we’re building something that has the potential to take the world by storm. Let’s make those gains so massive that even MathGuy can’t calculate them.",
      img: "/images/stickers/5.png",
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
                    className="rounded-full shadow-lg"
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
