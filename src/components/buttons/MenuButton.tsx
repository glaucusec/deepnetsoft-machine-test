import React from "react";

export default function MenuButton({
  text,
  clicked,
}: {
  text: string;
  clicked?: boolean;
}) {
  return (
    <button
      className={`p-2 w-24 border border-blue-600 ${
        clicked ? "bg-blue-600" : "bg-black"
      } text-white text-sm hover:bg-blue-600`}
    >
      {text}
    </button>
  );
}
