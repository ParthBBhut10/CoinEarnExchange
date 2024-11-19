"use client";
import React, { useState } from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggleColor = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Clients Section */}
      <section
        className={`border border-x-0 border-y-stroke ${isDark ? 'bg-black' : 'bg-alabaster'} py-11 dark:border-y-strokedark dark:bg-black`}
        onClick={handleToggleColor} // Toggle color on section click
      >
        <div className="mx-auto max-w-c-1700 px-4 md:px-8 2xl:px-0 text-center text-black dark:text-white">
          <h4 className="mb-5 text-xl font-bold text-black dark:text-white xl:text-4xl 2xl:text-5xl">
            Potential Partners
          </h4>

          <div className="overflow-hidden">
            {/* Animated scrolling container */}
            <div className="flex w-max animate-scroll">
              {brandData.concat(brandData).map((brand, key) => (
                <div className="flex-shrink-0 mx-4" key={key}>
                  <SingleBrand brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section End */}
    </>
  );
};

export default Brands;
