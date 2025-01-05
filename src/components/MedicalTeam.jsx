import React from "react";
import { motion } from "framer-motion";
import LineGradient from "./shared/LineGradient";

const MedicalTeam = ({ setSelectedPage }) => {
  const teamMemberStyles =
    "mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-16";

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "./assets/person-1.png",
      description:
        "Specialized in Emergency Medicine with 15+ years of experience in home healthcare services.",
      bgColor: "bg-blue",
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Physician",
      image: "./assets/person-2.png",
      description:
        "Expert in Geriatric Care and Chronic Disease Management with a focus on personalized treatment plans.",
      bgColor: "bg-red",
    },
    {
      name: "Nurse Rebecca White",
      role: "Head of Nursing",
      image: "./assets/person-3.png",
      description:
        "Registered Nurse with extensive experience in critical care and home nursing management.",
      bgColor: "bg-yellow",
    },
  ];

  return (
    <section id="team" className="pt-32 pb-16 mb-2">
      {/* Heading */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
          OUR <span className="text-red">MEDICAL TEAM</span>
        </p>
        <LineGradient width="w-2/4 mx-auto md:mx-0" />
        <p className="mt-10">
          Meet our experienced healthcare professionals dedicated to providing
          exceptional medical care in the comfort of your home.
        </p>
      </motion.div>

      {/* Team Members */}
      <div className="md:flex md:justify-between gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className={`${member.bgColor} ${teamMemberStyles}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="absolute -top-10 left-0 w-full flex justify-center">
              <img
                className="w-[150px] h-[150px] rounded-full object-cover border-4 border-white shadow-lg"
                src={member.image}
                alt={member.name}
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg font-semibold mb-4">{member.role}</p>
              <p className="text-sm">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MedicalTeam;
