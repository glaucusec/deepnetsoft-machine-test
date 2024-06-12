"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type drinkType = {
  name: string;
  price: number;
  summary: string;
};

export default function MenuItem() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/drinks");
      const data = await response.json();
      setDrinks(data);
    }
    fetchData();
  }, []);
  
  return (
    <React.Fragment>
      {/* head */}
      <div className="flex flex-row items-center justify-center gap-2">
        <span className="w-6 md:w-24 border border-top-2 border-gray-600"></span>
        <h1
          className="text-4xl text-center before:content-[''] before:w-2 before:h-2"
          style={{ textShadow: "1px 1px #FF0000" }}
        >
          DRINKS
        </h1>
        <span className="w-6 md:w-24 border border-top-2 border-gray-600"></span>
      </div>
      {/* body */}
      <Image
        className="absolute top-0 w-20 -translate-x-5 -translate-y-12 lg:-translate-y-60 lg:-translate-x-24 lg:w-[220px] object-contain"
        src={"/images/glass1.png"}
        width={220}
        height={10}
        alt="glass"
      />
      <Image
        className="absolute right-0 w-16 translate-x-1 -translate-y-16 lg:-translate-y-56 lg:translate-x-8 lg:w-[220px] object-contain"
        src={"/images/cocktail.png"}
        width={200}
        height={10}
        alt="cocktail"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {drinks.map((drink: drinkType, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <h2 className="text-xl">{drink.name + "..........." + drink.price}</h2>
              <p className="text-sm text-zinc-500">{drink.summary}</p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
