import React from "react";
import MenuButton from "./buttons/MenuButton";

export default function ItemsBanner() {
  return (
    <div
      style={{
        backgroundImage: `url('/images/top-paints.png')`,
      }}
      className="relative flex flex-row items-center justify-center"
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative text-white flex flex-row p-4 gap-2">
        <MenuButton text="FOOD" />
        <MenuButton text="DRINKS"/>
        <MenuButton text="BRUNCH"/>
      </div>
    </div>
  );
}
