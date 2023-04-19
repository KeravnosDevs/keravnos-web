import { motion } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const contactSectionRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Welcome to
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        KERAVNOS{" "}
        <span className="text-textDark mt-2 lgl:mt-4">Development</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {" "}
        Discover the power of custom software development with Keravnos. Our team of experts specializes in delivering tailored solutions that help businesses achieve their goals. We pride ourselves on our commitment to transparency, efficiency, and quality, ensuring that every project is delivered on time and to the highest standards. From consultation to delivery, our team is dedicated to providing exceptional service and support. <a href="#contact" onClick={handleClick} className="text-textGreen cursor-pointer">Contact us today to learn how Keravnos can help your business thrive.</a>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out our Portfolio!
      </motion.button>

      <div ref={contactSectionRef} id="contact" className="my-12"></div>
    </section>
  );
};

export default Banner;