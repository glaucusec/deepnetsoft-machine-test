import Image from "next/image";
import React from "react";

export default function HookahMenu() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <Image
          src={"/images/hookah.png"}
          width={62}
          height={62}
          alt={"hookah image"}
        />
      </div>
      <div className="mt-8 flex flex-row items-center justify-center gap-2">
        <span className="w-24 border border-top-2 border-gray-600"></span>
        <h1
          className="text-4xl text-center before:content-[''] before:w-2 before:h-2"
          style={{ textShadow: "1px 1px #FF0000" }}
        >
          HOOKAH FLAVORS
        </h1>
        <span className="w-24 border border-top-2 border-gray-600"></span>
      </div>
      <div className="mt-8 flex flex-col items-center justify-around md:flex-row gap-2">
        <h3>ORANGE MINT</h3>
        <h3>BLUE MIST</h3>
        <h3>MIGHTY FREEZE</h3>
        <h3>LUV 66</h3>
        <h3>PEACH</h3>
        <h3>WATERMELON</h3>
      </div>
    </React.Fragment>
  );
}
