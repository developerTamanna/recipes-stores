import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal'; // Animation import
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router';

const slides = [
  {
    id: 1,
    image: 'https://i.postimg.cc/PCP52nQc/hero-slider-1.jpg',
    title: 'Flavors Inspired by the Seasons',
    subtitle: 'Come with family & feel the joy of mouthwatering food',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/kBj5QgKK/hero-slider-2.jpg',
    title: 'Delight in Every Bite',
    subtitle: 'Savor the taste of authentic cuisine',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/0zF24XtN/hero-slider-3.jpg',
    title: 'A Culinary Journey Awaits',
    subtitle: 'Explore dishes crafted with love and passion',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setTimeout(() => nextSlide(), 7000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative h-screen overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
            <Fade direction="down" triggerOnce>
              <p className="text-sm uppercase tracking-widest text-yellow-400 mb-4">
                Delightful Experience
              </p>
            </Fade>

            <Zoom triggerOnce>
              <h1 className="text-5xl md:text-6xl text-white font-serif mb-4">
                {slides[current].title}
              </h1>
            </Zoom>

            <Slide direction="up" triggerOnce>
              <p className="text-lg text-white mb-8">
                {slides[current].subtitle}
              </p>
            </Slide>

            <Fade delay={300} triggerOnce>
              <NavLink to="/allRecipe">
                <button className="px-6 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                  View Our Menu
                </button>
              </NavLink>
            </Fade>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-80"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-80"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
