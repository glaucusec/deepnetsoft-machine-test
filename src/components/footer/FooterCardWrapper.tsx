import React from "react";

export default function FooterCardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative w-full p-2 flex flex-col items-center justify-center border-2 border-gray-600 rounded-xl gap-2">{children}</div>;
}
