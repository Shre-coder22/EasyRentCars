import React from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "CARS",
    link: "/cars",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/about",
  },
  {
    id: 4,
    name: "BOOKING",
    link: "/booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className=" shadow-md py-1 bg-primary dark:bg-dark dark:text-white duration-700">
      <div className=" container md:py-0 ">
        <div className=" flex justify-between items-center">
          <div>
            <h1 className=" text-3xl font-bold font-serif"> EasyRentCars </h1>
          </div>
          <div className=" hidden md:block ">
            <ul className=" flex items-center gap-8">
              {NavLinks.map((pages) => (
                <li key={pages.id} className="py-4">
                  <Link
                    to={pages.link}
                    className="py-2 hover:border-b-2 dark:hover:text-primary dark:hover:border-primary hover:text-white hover:border-white transition-colors duration-500 text-lg font-medium "
                  >
                    {pages.name}
                  </Link>
                </li>
              ))}
              <li>
                {theme === "dark" ? (
                  <BiSolidSun
                    onClick={() => setTheme("light")}
                    className=" text-2xl cursor-pointer hover:border-b-2 hover:text-primary hover:border-primary duration-500 font-medium"
                  />
                ) : (
                  <BiSolidMoon
                    onClick={() => setTheme("dark")}
                    className=" text-2xl cursor-pointer hover:border-b-2 hover:text-primary hover:border-primary duration-500 font-medium"
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
