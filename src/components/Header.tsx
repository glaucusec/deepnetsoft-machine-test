import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <nav className="relative grid grid-cols 1 lg:grid-cols-2 min-h-12 lg:min-h-20 bg-header">
      <div className="p-2 flex flex-row items-center justify-center">
        <Image
          className="absolute inset-x-auto top-4  w-[58px] h-[58px] lg:top-10 lg:w-[72px] lg:h-[72px] z-10"
          alt="company logo"
          src={"/images/logo-square.png"}
          width={72}
          height={72}
        />
        <div className="hidden lg:flex flex-col gap-2 absolute inset-x-auto top-10 translate-x-16 translate-y-3 z-10 ">
          <span className="text-blue-600">
            DEEP <span className="text-white">NET</span>
          </span>
          <span className="text-slate-600">SOFT</span>
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-center items-end">
        <ul className="flex flex-row gap-5 mb-3">
          <li className="text-sm">HOME</li>
          <li className="text-sm text-blue-600">MENU</li>
          <li className="text-sm">MAKE A RESERVATION</li>
          <li className="text-sm">CONTACT US</li>
        </ul>
      </div>
    </nav>
  );
}
