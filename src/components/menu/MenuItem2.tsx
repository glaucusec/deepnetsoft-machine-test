"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type ckType = {
  name: string;
  price: number;
  summary: string;
};

export default function MenuItem2() {
  const [cocktails, setCocktails] = useState<ckType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/cocktails");
      const data = await response.json();
      setCocktails(data);
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
          BRUNCH COCKTAILS
        </h1>
        <span className="w-6 md:w-24 border border-top-2 border-gray-600"></span>
      </div>
      {/* body */}
      <Image
        className="absolute top-0 w-20 -translate-x-5 -translate-y-12 lg:-translate-y-32 lg:-translate-x-20 lg:w-[140px] object-contain"
        src={"/images/glasslime.png"}
        width={220}
        height={10}
        alt="glass"
      />
      <Image
        className="absolute bottom-0 right-0 w-16 translate-x-2 translate-y-18 lg:translate-y-8 lg:translate-x-6 lg:w-[180px] object-contain"
        src={"/images/cocktail1.png"}
        width={200}
        height={10}
        alt="cocktail"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {cocktails.map((ct: ckType, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <h2 className="text-xl">{ct.name + "..........." + ct.price}</h2>
              <p className="text-sm text-zinc-500">{ct.summary}</p>
            </div>
          );
        })}
        <h2 className="text-xl">LYCHEETINI</h2>
        <p className="text-sm text-zinc-500">
          229 Vodka, vermouth, lychee juice fresh lime juice
        </p>
      </div>
    </React.Fragment>
  );
}
