import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./components/Services";
import CarList from "./components/CarList";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if(theme === 'dark'){
      element.classList.add('dark')
      localStorage.setItem('theme','dark');
    }
    else{
      element.classList.remove('dark')
      localStorage.setItem('theme','light');
    }
  },[theme])

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
