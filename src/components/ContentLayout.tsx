import Image from "next/image";
import React from "react";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url('/images/menu-background.png')`,
      }}
    >
      <Image className="hidden lg:block absolute left-0 top-10 z-10" src="/images/leftFrame.png" width={100} height={100} alt="left side icons image" />
      <Image className="hidden lg:block absolute right-0 top-10 z-10" src="/images/rightFrame.png" width={100} height={100} alt="right side icons image" />
      <div className="absolute inset-0 bg-black opacity-80"></div>
      {children}
    </div>
  );
}
