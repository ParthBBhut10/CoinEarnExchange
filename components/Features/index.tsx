"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";


const Feature = () => {
  return (
    <>
      {/* ===== Features Start ===== */}
      <section id="features" className="relative py-20 lg:py-25 xl:py-30">

        {/* Background Image (stick) */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/shape/stickog.jpg"
            alt="Stick Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        <div className="relative mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 z-10">
          {/* Section Title */}
          <SectionHeader
            headerInfo={{
              title: "SOLID FEATURES",
              subtitle: "Core Features of Coin Earn Exchange",

              description: `Including robust security measures for safe trading, instant transaction capabilities for seamless user experiences, and a user-friendly interface designed for both beginners and experienced traders alike.`,
            }}
          />

          {/* Robot Image (left side) */}
          <div className="relative mb-10 md:mb-20 z-10">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <Image
                src="/images/shape/robot.png"
                alt="Robot"
                width={320}
                height={320}
                className="w-32 h-auto md:w-48 lg:w-64 xl:w-80"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* Map through features data */}
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>

          {/* New Image (Added at the end) with Floating Animation and Glow Effect */}
          <div className="mt-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Section: Paragraph */}
            <div className="flex-1 text-center md:text-left text-black dark:text-white">
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  lineHeight: "1.2", // Adjusted line height to provide space around the text
                  margin: "0", // Ensures no extra margin causes cutting
                  padding: "10px 0", // Adds space around the text to avoid clipping
                  backgroundImage: "linear-gradient(to left, #1F51FF, #B026FF, #FF6FFF, #FFFF33)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block", // Ensures proper layout for clipped text
                }}
              >
                AI Technology Token
              </h1>

              <br></br>
              <p className="text-lg md:text-xl">
                By integrating with the Solana blockchain, our AI-driven token ecosystem leverages the high-speed, low-cost infrastructure Solana offers. AI Technology Token's smart contract suite empowers users to seamlessly participate in cutting-edge AI modules built on Solana. This includes AI-powered prediction markets, decentralized data analysis, neural network-based automation, AI-enhanced DeFi protocols, machine learning-driven oracle networks, and secure multi-party computation frameworks.
              </p>
            </div>

            {/* Right Section: Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src="https://risingmax.com/assets/img/solna-two.png"
                alt="Descriptive Image"
                width={1000}
                height={750}
                className="w-full h-auto md:w-2/3 lg:w-1/2 xl:w-1/3 object-cover"
              />
            </div>
          </div>




        </div>

        {/* Floating Animation and Glow Effect CSS */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px); /* Adjust the floating height */
            }
            100% {
              transform: translateY(0);
            }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .glow-effect {
            /* Stronger Glow Effect */
            box-shadow: 0 0 20px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.6);
            transition: all 0.3s ease-in-out;
          }

          .glow-effect:hover {
            /* Intensified Glow on Hover */
            box-shadow: 0 0 40px rgba(0, 255, 255, 1), 0 0 80px rgba(0, 255, 255, 0.9), 0 0 120px rgba(0, 255, 255, 0.8);
          }
        `}</style>

      </section>
      {/* ===== Features End ===== */}
    </>
  );
};

export default Feature;
