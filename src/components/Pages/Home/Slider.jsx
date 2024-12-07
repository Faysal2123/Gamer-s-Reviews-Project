import React, { useState } from "react";
import img1 from "../../../images/fifa.png";
import img2 from "../../../images/valorant.png";
import img3 from "../../../images/witcher.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Slider = () => {
 

  return (
    <div> 
      
  
        <div className="md:w-[1400px] mx-auto mt-2 mb-3">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div className="relative">
              <img
                className="md:w-[800px] md:h-[650px] h-[310px] "
                src={img1}
                alt="FIFA 23"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white md:p-4 p-1 w-full">
                <h3 className="text-xl font-bold">FIFA 23</h3>
                <p className="text-sm">Experience the world's most popular football game with realistic graphics and gameplay.</p>
              </div>
            </div>
            <div className="relative">
              <img
                className="md:w-[800px] md:h-[650px] h-[310px] "
                src={img2}
                alt="Valorant"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white md:p-4 p-1 w-full">
                <h3 className="text-xl font-bold">Valorant</h3>
                <p className="text-sm">Step into the tactical world of Valorant and become a champion of the battlefield.</p>
              </div>
            </div>
            <div className="relative">
              <img
                className="md:w-[800px] md:h-[650px] h-[310px] "
                src={img3}
                alt="The Witcher: Wild Hunt"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white md:p-4 p-1 w-full">
                <h3 className="text-xl font-bold">The Witcher: Wild Hunt</h3>
                <p className="text-sm">Embark on an epic journey as Geralt of Rivia in a world full of mystery and monsters.</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    
  );
};

export default Slider;
