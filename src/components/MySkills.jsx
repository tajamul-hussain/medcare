import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "./shared/LineGradient";
import ServiceDetail from "./ServiceDetail";

const MySkills = ({ setSelectedPage }) => {
  const [selectedService, setSelectedService] = useState(null);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const services = [
    {
      id: 1,
      title: "Medical Assistance",
      description: "Professional medical services at your doorstep",
      image: "../assets/medical-assistance.jpg",
      features: [
        {
          name: "Injection Administration",
          price: "₹500/visit",
          description:
            "Professional administration of prescribed injections by trained paramedics",
        },
        {
          name: "Wound Dressing",
          price: "₹600/visit",
          description: "Sterile wound cleaning and dressing changes",
        },
        {
          name: "Blood Pressure Monitoring",
          price: "₹300/visit",
          description: "Regular BP monitoring and recording",
        },
      ],
    },
    {
      id: 2,
      title: "Health Monitoring",
      description: "Regular health check-ups and monitoring",
      image: "../assets/health-monitoring.jpg",
      features: [
        {
          name: "Vital Signs Check",
          price: "₹800/visit",
          description: "Complete vital signs monitoring",
        },
        {
          name: "Blood Sugar Testing",
          price: "₹400/test",
          description: "Diabetes monitoring and management",
        },
        {
          name: "ECG Recording",
          price: "₹1200/test",
          description: "At-home ECG service with report",
        },
      ],
    },
    {
      id: 3,
      title: "Nursing Care",
      description: "24/7 professional nursing services",
      image: "../assets/nursing-care.jpg",
      features: [
        {
          name: "24/7 Nursing",
          price: "₹2000/shift",
          description: "Round-the-clock nursing care",
        },
        {
          name: "Post-Surgery Care",
          price: "₹2500/day",
          description: "Specialized post-operative care",
        },
        {
          name: "Elderly Care",
          price: "₹1800/shift",
          description: "Dedicated elderly care services",
        },
      ],
    },
    {
      id: 4,
      title: "Specialized Care",
      description: "Specialized medical services and therapy",
      image: "../assets/specialized-care.jpg",
      features: [
        {
          name: "Physiotherapy",
          price: "₹1000/session",
          description: "Professional physiotherapy sessions",
        },
        {
          name: "Oxygen Therapy",
          price: "₹1500/day",
          description: "Oxygen support and monitoring",
        },
        {
          name: "Catheterization",
          price: "₹800/procedure",
          description: "Professional catheter care",
        },
      ],
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setSelectedPage("skills");
  };

  return (
    <section id="skills" className="pt-10 pb-24">
      {selectedService ? (
        <>
          <button
            onClick={() => setSelectedService(null)}
            className="text-yellow hover:text-red mb-8 inline-block"
          >
            ← Back to Services
          </button>
          <ServiceDetail service={selectedService} />
        </>
      ) : (
        <div className="md:h-full">
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
              <p className="font-playfair font-semibold text-4xl mb-5">
                OUR <span className="text-red">SERVICES</span>
              </p>
              <LineGradient width="w-1/3" />
              <p className="mt-10 mb-7">
                We provide comprehensive healthcare services at your doorstep
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="relative cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                onClick={() => handleServiceClick(service)}
              >
                <div className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60">
                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm opacity-90">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default MySkills;
