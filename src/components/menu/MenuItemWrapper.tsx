import React from "react";

export default function MenuItemWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative p-6 border-2 border-gray-300">{children}</div>;
}
