import React from "react";

const testimonialData = [
  {
    name: "Dilshad",
    image: "https://fastly.picsum.photos/id/987/200/200.jpg?hmac=9X6IIE8qZgx6bJb7rf3dZELTmfyt3rZAHw65r8_ko_4",
    description: "I had an amazing experience with this car rental service! The vehicle was in excellent condition, and the booking process was quick and hassle-free. Highly recommend for anyone needing a reliable and convenient rental.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "https://fastly.picsum.photos/id/1053/200/200.jpg?hmac=JOtR2adXynxSVClz0LNlPZjW0TJTRXc7c15kka2QoRk",
    description: "Renting a car from this service was seamless and convenient. The vehicle was in excellent condition, and the customer service was outstanding. Highly recommended for a hassle-free rental experience!",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "https://fastly.picsum.photos/id/478/200/200.jpg?hmac=YfKBYcZHT991lmrKfB0pYNaztmUvQecXbVrc5V4mj8E",
    description: "Renting a car from this site was a breeze! The booking process was straightforward, and the vehicle was in excellent condition. Exceptional customer service made my travel experience truly seamless.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
             Exceptional service, immaculate cars, and a seamless rental experience that keeps them coming back for more!<br/>
             Here's what our past clients have to say about us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={skill.image}
                    alt="logo"
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;