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
      <div className="absolute inset-0 bg-black opacity-80"></div>
      {children}
    </div>
  );
}
