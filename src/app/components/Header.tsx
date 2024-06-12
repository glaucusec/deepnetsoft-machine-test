import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <nav className="relative grid grid-cols-2 min-h-20 bg-header">
      <div className="p-2 flex flex-row items-center justify-center">
        <Image
          className="absolute inset-x-auto top-14 z-10"
          alt="company logo"
          src={"/images/logo.png"}
          width={150}
          height={48}
        />
      </div>
      <div className="flex flex-row justify-center items-end">
        <ul className="flex flex-row gap-3 mb-3">
          <li className="text-sm">HOME</li>
          <li className="text-sm text-blue-600">MENU</li>
          <li className="text-sm">MAKE A RESERVATION</li>
          <li className="text-sm">CONTACT US</li>
        </ul>
      </div>
    </nav>
  );
}
