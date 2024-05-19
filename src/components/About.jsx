import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Car1Canvas from "../models/Car1";

const About = () => {
  return (
    <div className="dark:bg-dark dark:text-white bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className=" place-items-center">
        <motion.div
          data-aos="slide-right"
          data-aos-duration="2500"
          className="xl:flex-1 xl:h-auto md:h-[415px] h-[400px] z-10"
        >
          <Car1Canvas />
        </motion.div>
        <motion.div>
          <div className="space-y-5 sm:p-16 pb-6 text-center">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-serif"
            >
              About us
            </h1>
            <p data-aos="fade-up" className="leading-8 tracking-wide">
              About Us At EasyRentCars, we are dedicated to making car
              rental easy, affordable, and reliable. With a wide selection of
              vehicles and seamless booking, we cater to travelers and
              businesses alike. Our commitment to customer satisfaction drives
              us to provide exceptional service, competitive rates, and 24/7
              support, ensuring a smooth journey every time.
            </p>
            <p data-aos="fade-up">
            "EasyRentCars: Your go-to platform for seamless, affordable, and reliable car rentals worldwide."
            </p>
            <button data-aos="fade-up" className="button-outline">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default About;
