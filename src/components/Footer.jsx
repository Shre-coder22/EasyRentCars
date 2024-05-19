import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-router-dom'

const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-primary mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              EasyRentCars
            </h1>
            <p className="text-sm">
              "© 2024 EasyRentCars. All rights reserved. Your journey starts
              here – fast, safe, and reliable car rentals for every adventure.
              Contact us at support@easyrentcars.com ."
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Lucknow, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 9598180522</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <BiLogoGmail />
              <p>shresthasaxema1@gmail.com</p>
            </div>
            
            <div className="flex items-center gap-3 mt-6">
              <Link to="#">
                <FaInstagram className="text-3xl dark:hover:text-primary hover:text-white duration-300" />
              </Link>
              <Link to="#">
                <FaFacebook className="text-3xl dark:hover:text-primary hover:text-white duration-300" />
              </Link>
              <Link to="https://www.linkedin.com/in/shrestha-saxena-907520298/" target="_blank">
                <FaLinkedin className="text-3xl dark:hover:text-primary hover:text-white duration-300" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:border-b-2 dark:hover:text-primary dark:hover:border-primary hover:text-white hover:border-white space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:border-b-2 dark:hover:text-primary dark:hover:border-primary hover:text-white hover:border-white space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
