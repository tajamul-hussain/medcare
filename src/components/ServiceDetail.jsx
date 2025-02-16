import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaArrowLeft } from "react-icons/fa";

const ServiceDetail = ({ service, onBack }) => {
  if (!service) return null;

  const handleCallButton = () => {
    window.location.href = "tel:+917780830508"; // Replace with your actual phone number
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-5/6 mx-auto"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-yellow mb-8 hover:text-red transition duration-300"
      >
        <FaArrowLeft /> Back to Services
      </button>

      {/* Service Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg text-gray-300 mb-6">{service.description}</p>
        <button
          onClick={handleCallButton}
          className="bg-teal text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-sage-green hover:text-white transition duration-300"
        >
          <FaPhoneAlt /> Book On Call
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {service.features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-deep-blue">
              {feature.name}
            </h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <p className="text-2xl font-bold text-blue">{feature.price}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
