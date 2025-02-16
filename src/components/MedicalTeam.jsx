import { motion } from "framer-motion";
import LineGradient from "./shared/LineGradient";
import { teamData } from "../data/teamData";
import backgroundImage from "../assets/teams.jpeg";

const MedicalTeam = ({ setSelectedPage }) => {
  return (
    <section
      id="team"
      className="relative pt-32 pb-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        minHeight: "100vh",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-deep-blue/70 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* HEADING */}
        <motion.div
          className="md:w-2/4 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div>
            <p className="font-semibold text-4xl">
              Our <span className="text-red">Team</span>
            </p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-1/3" />
            </div>
          </div>
          <p className="mt-10 mb-10">
            Meet our dedicated team of healthcare professionals committed to
            providing you with the best care
          </p>
        </motion.div>

        {/* TEAM MEMBERS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-teal rounded-xl shadow-md overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative h-48">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-yellow">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-yellow">
                    {member.specialization}
                  </p>
                  {member.experience && (
                    <p className="text-sm">{member.experience} Experience</p>
                  )}
                </div>

                <p className="text-sm mb-4">{member.description}</p>

                <div className="text-sm">
                  {member.qualifications && (
                    <>
                      <p className="font-semibold">Qualifications:</p>
                      <p className="mb-2">{member.qualifications}</p>
                    </>
                  )}
                  <p className="font-semibold">Availability:</p>
                  <p>{member.availability}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalTeam;
