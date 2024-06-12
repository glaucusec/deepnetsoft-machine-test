import React from "react";
import ContentCardWrapper from "../ContentCardWrapper";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContentCardWrapper>
      <div className="relative flex flex-col gap-4">{children}</div>
    </ContentCardWrapper>
  );
}
