import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "./shared/SocialMediaIcons";
import backgroundImage from "../assets/background.jpeg";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="relative md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-deep-blue/70 z-0"></div>

      {/* Content Container */}
      <div className="w-5/6 mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
          {isAboveMediumScreens ? (
            <div className="relative w-[300px] z-0 ml-20 before:absolute before:-top-8 before:-left-16 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                className="h-[400px] rounded-t-[400px] saturate-150 hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] shadow-xl"
                src="../assets/MedCare.jpeg"
                alt="Caring medical professional"
              />
            </div>
          ) : (
            <div className="relative w-[300px] z-0 ml-20 before:absolute before:-top-6 before:-left-14 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                className="h-[400px] rounded-t-[400px] saturate-150 hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] shadow-xl"
                src="../assets/MedCare.jpeg"
                alt="Caring medical professional"
              />
            </div>
          )}
        </div>

        {/* Main Section */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
          {/* Headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="text-6xl font-bold z-10 text-center md:text-start text-white mb-4">
              Bringing Care
              <span className="text-yellow"> Home</span>
            </h1>
            <p className="text-5xl z-10 text-center md:text-start mb-6">
              Medcare{" "}
              <span className="text-4xl xs:relative xs:text-white xs:font-semibold z-20 xs:before:h-[70px] before:w-[280px] before:bg-gradient-rainbow before:rounded-tr-md before:rounded-bl-lg before:absolute before:-left-[5px] before:-top-[10px] before:z-[-1]">
                Home Services
              </span>
            </p>
            <p className="mt-8 mb-7 text-lg text-center md:text-start text-gray-200 leading-relaxed">
              We understand that every moment of care matters. Our compassionate
              team brings professional healthcare right to your doorstep,
              providing:
            </p>
            <ul className="list-none space-y-3 text-gray-200 mb-8">
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
            className="flex mt-8 justify-center md:justify-start gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
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
            className="flex mt-8 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
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
