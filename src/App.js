import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import Landing from "./components/Landing";
import LineGradient from "./components/shared/LineGradient";
import Services from "./components/Services";
import MedicalTeam from "./components/MedicalTeam";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app bg-deep-blue">
            <Navbar
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <div className="w-5/6 mx-auto md:h-full">
              {isAboveMediumScreens && (
                <DotGroup
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              )}
              <Landing setSelectedPage={setSelectedPage} />
            </div>

            <LineGradient />

            <div className="w-5/6 mx-auto">
              <Services setSelectedPage={setSelectedPage} />
            </div>

            <LineGradient />

            <div className="w-5/6 mx-auto">
              <MedicalTeam setSelectedPage={setSelectedPage} />
            </div>

            <LineGradient />

            {/* <div className="w-5/6 mx-auto">
              <Testimonials />
            </div> */}

            <LineGradient />

            <div className="w-5/6 mx-auto">
              <Contact setSelectedPage={setSelectedPage} />
            </div>

            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
