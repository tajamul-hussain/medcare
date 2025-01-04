import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "./shared/LineGradient";

const MySkills = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header and Image Section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-semibold text-4xl mb-5">
            OUR <span className="text-red">SERVICES</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10">
            At MedCare, we specialize in comprehensive elderly care and wellness
            assistance, providing tailored healthcare solutions that prioritize
            the physical, emotional, and social well-being of our clients. Our
            team of trained professionals delivers personalized care plans,
            ensuring comfort and dignity for your loved ones.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full  before:border-2 before:border-blue before:z-[-1]">
              <img
                className="z-10"
                src="../assets/skills-image.png"
                alt="skills"
              />
            </div>
          ) : (
            <img
              className="z-10"
              src="../assets/skills-image.png"
              alt="skills"
            />
          )}
        </div>
      </div>

      {/* Services Section */}
      <div className="md:flex md:justify-between mt-8 gap-32">
        {/* Medical Assistance */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-semibold text-5xl">01</p>
              <p className="font-semibold text-3xl mt-3">Medical Assistance</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Comprehensive medical support including routine healthcare
            monitoring, specialized home medical services, post-surgical care,
            and rehabilitation programs. Our trained staff ensures professional
            care delivery with 24/7 emergency response capabilities.
          </p>
        </motion.div>

        {/* Wellness Programs */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-semibold text-5xl">02</p>
              <p className="font-semibold text-3xl mt-3">Wellness Programs</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Holistic wellness solutions including mental health support,
            nutritional guidance, physical therapy, and lifestyle management. We
            offer personalized care plans, group therapy sessions, and
            specialized fitness programs for seniors.
          </p>
        </motion.div>

        {/* Support Services */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-semibold text-5xl">03</p>
              <p className="font-semibold text-3xl mt-3">Support Services</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Comprehensive support including caregiver training, respite care,
            telehealth services, and home safety assessments. We also facilitate
            social activities and provide technological solutions for remote
            monitoring and care management.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
