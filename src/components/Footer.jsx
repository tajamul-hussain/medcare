import React from "react";
import SocialMediaIcons from "./shared/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-teal pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-semibold text-2xl text-yellow">
            MEDCARE HOME SERVICES
          </p>
          <p className=" text-md text-yellow">
            @{new Date().getFullYear()} MEDCARE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
