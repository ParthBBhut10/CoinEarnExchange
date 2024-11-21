"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SpinningNumber = ({ value }) => {
  const [digits, setDigits] = useState([]);

  useEffect(() => {
    const valueArray = value.toString().split(""); // Split value into individual digits
    setDigits(valueArray);
  }, [value]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {digits.map((digit, index) => (
        <motion.div
          key={index}
          className="digit-container"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: index * 0.1, type: "spring", stiffness: 50 }}
          style={{
            display: "inline-block",
            overflow: "hidden",
            width: "1ch", // Keeps all digits the same width
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
          >
            {digit}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

const FunFact = () => {
  return (
    <>
      <section className="relative px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        {/* Full-Screen Background with Reduced Opacity */}
        <Image
          fill
          src="/images/shape/lines.png"
          alt="Dotted Background"
          className="absolute inset-0 -z-1 object-cover w-screen h-screen opacity-15" // Adjust the opacity

        />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
            Empowering Innovation, Building the Future.
          </h2>
          <p className="mx-auto lg:w-11/12">
            Coin Earn Exchange is at the forefront of empowering innovation in digital finance. Trusted by global companies, we are building the future of secure, efficient, and transparent financial solutions. Join us and unlock the potential of decentralized finance.
          </p>
        </motion.div>

        {/* Fun Facts Section */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
          {/* First Fact */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="animate_top text-center w-full md:w-1/3"
          >
            <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              <SpinningNumber value={500000} />
            </h3>
            <p className="text-lg lg:text-para2 ">World Wide Clients</p>
          </motion.div>

          {/* Second Fact */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="animate_top text-center w-full md:w-1/3"
          >
            <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              <SpinningNumber value={1000000} />
            </h3>
            <p className="text-lg lg:text-para2">Visitors</p>
          </motion.div>

          {/* Third Fact */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="animate_top text-center w-full md:w-1/3"
          >
            <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              <SpinningNumber value={865} />
            </h3>
            <p className="text-lg lg:text-para2">Winning Awards</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FunFact;
