import React, { useState } from "react";
import Slider from "./Slider";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import HighestRated from "../HighestRated";
import WatchVideo from "../WatchVideo";
import OurService from "../OurService";

const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
        <div className="md:w-[1400px] mx-auto pt-2 md:pb-8 flex justify-center">
          
          <div className="sm:w-4 sm:h-4 w-12 h-12">
            <DarkModeSwitch
              style={{ marginBottom: "2rem" }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={40} 
            />
          </div>
        </div>

        <div>
          <Slider />
          <HighestRated></HighestRated>
          <WatchVideo></WatchVideo>
          <OurService></OurService>
        </div>
      </div>
    </div>
  );
};

export default Home;
