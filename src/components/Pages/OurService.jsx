import React from "react";
import { Fade } from "react-awesome-reveal"; // React Awesome Reveal Import

// Import GIFs
import deliveryGif from "../../images/Delivery.gif";
import customerSupportGif from "../../images/Customer support.gif";
import discountGif from "../../images/Discount animation.gif";

const OurService = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">
          Our Services
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-300 mt-4">
          Explore the features that make us unique.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {/* Delivery Card */}
        <Fade duration={1000} direction="up">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="w-full h-48 overflow-hidden rounded-lg mx-auto mb-6">
              <img
                src={deliveryGif}
                alt="Delivery Service"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
              Fast Delivery
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Get your games delivered to your doorsteps within 24 hours.
            </p>
          </div>
        </Fade>

        {/* Customer Support Card */}
        <Fade duration={1000} direction="up">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="w-full h-48 overflow-hidden rounded-lg mx-auto mb-6">
              <img
                src={customerSupportGif}
                alt="Customer Support"
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Our customer service is available 24/7 to assist you.
            </p>
          </div>
        </Fade>

        {/* Discount Card */}
        <Fade duration={1000} direction="up">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="w-full h-48 overflow-hidden rounded-lg mx-auto mb-6">
              <img
                src={discountGif}
                alt="Discount Offers"
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
              Exclusive Discounts
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Unlock amazing deals and offers on your favorite games.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default OurService;
