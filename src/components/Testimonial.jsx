import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

const Testimonial = () => {
  return (
    <div className="bg-white dark:bg-black text-blue-900 dark:text-white py-16 px-4 flex flex-col items-center text-center transition-colors duration-500">
      <div className="max-w-xl">
        {/* Awesome Reveal Animation */}
        <Fade direction="up" duration={800} triggerOnce>
          <p className="text-xl md:text-2xl italic mb-6 min-h-[100px]">
            {/* Typewriter Effect */}
            <Typewriter
              words={[
                'I wanted to thank you for inviting me down for that amazing dinner the other night.',
                'The food was extraordinary.',
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </p>
        </Fade>
      </div>

      {/* Profile */}
      <Fade delay={300} triggerOnce>
        <div className="flex flex-col items-center mt-4">
          <img
            src="https://i.postimg.cc/1z14nXkL/web-profile.jpg"
            alt="Sathi"
            className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-yellow-500"
          />
          <p className="font-semibold text-lg">Sathi</p>
        </div>
      </Fade>
    </div>
  );
};

export default Testimonial;
