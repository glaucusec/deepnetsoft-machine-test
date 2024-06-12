import React from "react";

export default function FooterCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-8 flex flex-col lg:flex-row gap-2">{children}</div>;
}
