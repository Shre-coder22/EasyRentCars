import React,{ useEffect, useState } from "react";
import car1 from "../assets/car-1.png";
import car2 from "../assets/car-2.png";
import car3 from "../assets/car-3.png";
import car4 from "../assets/car-4.png";
import car5 from "../assets/car-5.png";
import car6 from "../assets/car-6.png";
import { Link } from "react-router-dom";


let carList1 = [
    {
        name: "Honda City",
        price: 100,
        image: car1,
        aosDelay: "0",
    },
    {
        name: "Hyundai Verna",
        price: 140,
        image: car2,
        aosDelay: "500",
    },
  {
      name: "Swift-Dzire",
      price: 100,
      image: car3,
      aosDelay: "1000",
    },
];
let carList2 = [
    {
        name: "Audi A-3",
        price: 100,
        image: car4,
        aosDelay: "0",
    },
    {
        name: "S-Cross",
        price: 140,
        image: car5,
        aosDelay: "500",
    },
    {
        name: "Duster",
        price: 100,
        image: car6,
        aosDelay: "1000",
  },
];


const CarList = () => {

    const [ currentState , setCurrentState ] = useState([]);
    const [ isToggled, setIsToggled ] = useState();
    const [ text , setText ] = useState('');

    useEffect(() => {
        setCurrentState(carList1)
        setText('Load SUVs')
    },[])
    
    const handleClick = () => {
        
        setIsToggled(!isToggled)

        if(isToggled){
            setCurrentState(carList1)
            setText('Load SUVs')
        }
        else {
            setCurrentState(carList2);
            setText('Load Sedans')
        }
    }
    
  return (
    <div className="">
      <div className="p-12 dark:bg-dark dark:text-white bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
        <div>

        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif text-left mb-3"
        >
            Cars for Rent
        </h1>
        </div>
        <p data-aos="fade-up" aos-delay="400" className="text-md pb-10">
          "Explore our diverse fleet of rental cars, tailored to suit every journey."
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 place-content-center px-8">
            {currentState.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.name}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <Link to="#" className="border-2 rounded-xl p-2 hover:border-primary">Book!</Link>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-40 grid grid-cols-2 place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
          <button data-aos="fade-up" className={`button-outline `} onClick={handleClick}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;