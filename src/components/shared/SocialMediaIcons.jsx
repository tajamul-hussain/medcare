import React from "react";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/tajamul-khanday"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={25} />
      </a>
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <FiTwitter size={25} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <CiFacebook size={27} />
      </a> */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/medcarehomeservices"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram size={25} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="tel:+917780830508"
        target="_blank"
        rel="noreferrer"
      >
        <FaPhone size={25} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
