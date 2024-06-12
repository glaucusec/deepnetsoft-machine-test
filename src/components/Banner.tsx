import React from "react";

export default function Banner() {
  return (
    <div
      className="relative h-64 bg-cover"
      style={{
        backgroundImage: `url('/images/vintage-old-rustic-cutlery-dark.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1
          className="text-6xl text-white"
          style={{ textShadow: "1px 1px #FF0000" }}
        >
          MENU
        </h1>
        <p className="text-slate-300">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
      </div>
    </div>
  );
}
