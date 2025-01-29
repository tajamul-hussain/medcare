import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "./shared/SocialMediaIcons";
import backgroundImage from "../assets/background.jpeg";

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-screen py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-deep-blue/70 z-0"></div>

      {/* Content Container */}
      <div className="w-5/6 max-w-3xl mx-auto relative z-10">
        {/* Main Content - Centered */}
        <div className="z-30 text-center">
          {/* Headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="text-6xl font-bold z-10 text-white mb-4">
              Bringing Care
              <span className="text-yellow"> Home</span>
            </h1>
            <p className="text-5xl z-10 mb-6">
              Medcare{" "}
              <span className="text-4xl xs:relative xs:text-white xs:font-semibold z-20 xs:before:h-[70px] before:w-[280px] before:bg-gradient-rainbow before:rounded-tr-md before:rounded-bl-lg before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-[10px] before:z-[-1]">
                Home Services
              </span>
            </p>
            <p className="mt-8 mb-7 text-lg text-gray-200 leading-relaxed">
              We understand that every moment of care matters. Our compassionate
              team brings professional healthcare right to your doorstep,
              providing:
            </p>
            <ul className="list-none space-y-3 text-gray-200 mb-8 inline-block text-left">
              <li className="flex items-center">
                <span className="text-yellow mr-2">✓</span> 24/7 Professional
                Medical Support
              </li>
              <li className="flex items-center">
                <span className="text-yellow mr-2">✓</span> Personalized Elder
                Care Plans
              </li>
              <li className="flex items-center">
                <span className="text-yellow mr-2">✓</span> Expert Nursing &
                Rehabilitation
              </li>
            </ul>
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            className="flex mt-8 justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <AnchorLink
              className="bg-yellow text-deep-blue rounded-full py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 shadow-lg"
              onClick={() => setSelectedPage("contacts")}
              href="#contact"
            >
              Get Care Now
            </AnchorLink>
            <AnchorLink
              className="border-2 border-yellow text-yellow rounded-full py-3 px-7 font-semibold hover:bg-yellow hover:text-deep-blue transition duration-500"
              onClick={() => setSelectedPage("contacts")}
              href="#contact"
            >
              Learn More
            </AnchorLink>
          </motion.div>

          <motion.div
            className="flex mt-8 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
