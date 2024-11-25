"use client";
import React, { useState } from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode on section click
  const handleToggleColor = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Clients Section */}
      <section
        className={`border border-x-0 border-y-stroke ${isDark ? "bg-black" : "bg-alabaster"
          } py-11 dark:border-y-strokedark dark:bg-black`}
        onClick={handleToggleColor} // Toggle color on section click
      >
        <div className="mx-auto max-w-c-1700 px-4 md:px-8 2xl:px-0 text-center text-black dark:text-white">
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              backgroundImage: "linear-gradient(to left, #1F51FF, #B026FF, #FF6FFF, #FFFF33)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              padding: "20px 0", // Adjusted padding for spacing
            }}
          >
            Potential Partners
          </h1>

          <div className="overflow-hidden relative">
            {/* Animated scrolling container */}
            <div className="flex w-full animate-scroll">
              {/* Repeat brand data multiple times for a seamless loop */}
              {Array(20)
                .fill(brandData)
                .flat()
                .map((brand, key) => (
                  <div className="flex-shrink-0 mx-4" key={key}>
                    <SingleBrand brand={brand} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section End */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </>
  );
};

export default Brands;
