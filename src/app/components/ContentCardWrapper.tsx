import React from "react";

export default function ContentCardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:gap-8 px-2 lg:px-24 py-2 lg:py-12 lg:min-w-screen-md xl:min-w-screen-lg max-w-screen-xl mx-auto">
      {children}
    </div>
  );
}
