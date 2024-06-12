import Image from "next/image";
import React from "react";

export default function MenuItem() {
  return (
    <React.Fragment>
      {/* head */}
      <div className="flex flex-row items-center justify-center gap-2">
        <span className="w-24 border border-top-2 border-gray-600"></span>
        <h1
          className="text-4xl text-center before:content-[''] before:w-2 before:h-2"
          style={{ textShadow: "1px 1px #FF0000" }}
        >
          DRINKS
        </h1>
        <span className="w-24 border border-top-2 border-gray-600"></span>
      </div>
      {/* body */}
      <Image
        className="absolute top-0 -translate-y-60 -translate-x-24 object-contain"
        src={"/images/glass1.png"}
        width={220}
        height={10}
        alt="glass"
      />
      <Image
        className="absolute right-0 -translate-y-56 translate-x-8 object-contain"
        src={"/images/cocktail.png"}
        width={200}
        height={10}
        alt="cocktail"
      />
      <div className="grid grid-cols-2 gap-4 p-4">

        <div className="flex flex-col">
          <h2 className="text-xl">LYCHEETINI</h2>
          <p className="text-sm text-zinc-500">
            229 Vodka, vermouth, lychee juice fresh lime juice
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">LYCHEETINI</h2>
          <p className="text-sm text-zinc-500">
            229 Vodka, vermouth, lychee juice fresh lime juice
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">LYCHEETINI</h2>
          <p className="text-sm text-zinc-500">
            229 Vodka, vermouth, lychee juice fresh lime juice
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">LYCHEETINI</h2>
          <p className="text-sm text-zinc-500">
            229 Vodka, vermouth, lychee juice fresh lime juice
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">LYCHEETINI</h2>
          <p className="text-sm text-zinc-500">
            229 Vodka, vermouth, lychee juice fresh lime juice
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">LYCHEETINI</h2>
          <p className="text-sm text-zinc-500">
            229 Vodka, vermouth, lychee juice fresh lime juice
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">LYCHEETINI</h2>
          <p className="text-sm text-zinc-500">
            229 Vodka, vermouth, lychee juice fresh lime juice
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">LYCHEETINI</h2>
          <p className="text-sm text-zinc-500">
            229 Vodka, vermouth, lychee juice fresh lime juice
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
