import { motion } from "framer-motion";
import { useState } from "react";
import LineGradient from "./shared/LineGradient";
import { servicesData } from "../data/servicesData";
import ServiceDetail from "./ServiceDetail";

const Services = ({ setSelectedPage }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="pt-32 pb-16">
      {selectedService ? (
        <ServiceDetail
          service={selectedService}
          onBack={() => setSelectedService(null)}
        />
      ) : (
        <>
          {/* HEADER */}
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
                Our <span className="text-red">Services</span>
              </p>
              <div className="flex justify-center mt-5">
                <LineGradient width="w-1/3" />
              </div>
            </div>
            <p className="mt-10 mb-10">
              Comprehensive healthcare services delivered at your doorstep
            </p>
          </motion.div>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                className="bg-red rounded-lg cursor-pointer hover:scale-105 transition duration-300"
                onClick={() => setSelectedService(service)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="h-full p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-sm mb-4">{service.description}</p>
                  <p className="text-yellow font-semibold">
                    Click to view details →
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Services;
