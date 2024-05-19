import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { Link } from "react-router-dom";

const skillsData = [
  {
    name: "Best Price Available",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Get the best price on your next car rental with EasyRentCars! Compare rates from top providers and enjoy unbeatable deals with no hidden fees.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe Travel",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Ensuring fast and safe travel with a diverse fleet of reliable rental vehicles. Experience hassle-free booking and top-notch customer service for your journeys.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "Experience Drivers: Expert drivers ready to ensure your journey is safe, comfortable, and stress-free. Trust our seasoned professionals for all your transportation needs.",
    aosDelay: "1000",
  },
];

const ServiceCard = ({ name, icon, link, description }) => {
  return (
    <Tilt className="flex justify-center ">
      <motion.div className="  w-[90%] rounded-[20px] shadow-card bg-gray-400 dark:bg-gray-800 dark:text-white py-10 sm:grid sm:place-items-center">
        <div
          className=" bg-tertiary rounded-[20px] py-7 px-12
           min-h-[280px] flex justify-evenly items-center flex-col "
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <div className="grid place-items-center" data-aos="fade-up">
            {icon}
          </div>
          <h1
            className="text-2xl text-center font-bold py-4"
            data-aos="fade-up"
          >
            {name}
          </h1>
          <p className="text-1xl text-center py-4" data-aos="fade-up">
            {description}
          </p>
          <Link
            to={link}
            className="inline-block text-lg font-semibold px-2 py-4 text-primary group-hover:text-black duration-300 border-2 border-primary"
          >
            Learn more
          </Link>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <>
      <div className=" sm:min-h-[600px] dark:bg-black bg-slate-200">
        <h1
          data-aos="fade-up"
          className="text-3xl font-extrabold text-center p-10 dark:text-gray-400 sm:text-4xl  font-serif"
        >
          Why Choose Us
        </h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-[20px] py-[20px]">
          {skillsData.map((skills) => (
            <ServiceCard
              key={skills.name}
              // data-aos="fade-up"
              // data-aos-delay={skills.aosDelay}
              // className="card text-center group space-y-3 sm:space-y-6 p-4 flex justify-center sm:py-16 bg-gray-800 hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              {...skills}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
