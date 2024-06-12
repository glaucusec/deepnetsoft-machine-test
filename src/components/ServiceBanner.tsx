import React from "react";
import MenuButton from "./buttons/MenuButton";
import ContentCardWrapper from "./ContentCardWrapper";

export default function ServiceBanner() {
  return (
    <ContentCardWrapper>
      <div className="relative flex flex-col items-center justify-center gap-4">
        <div className="flex lg:flex-row flex-col-reverse items-center">
          <div className="lg:mr-4 mb-4 lg:mb-0 lg:border-r lg:border-gray-300 lg:pr-4"></div>
          <MenuButton text="ORDER ONLINE" />
          <div className="lg:ml-4 mb-4 lg:mb-0 lg:border-l lg:border-gray-300 lg:pl-4"></div>
        </div>
        <div className="grid grid-cols-3 bg-stone-700 p-2">
          <div>
            Food may be refunded. If your food was made incorrectly we will
            remake it for you.
          </div>
          <div>18% service charge will be added to all checks over $100.</div>
          <div>
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or
            eggs may increase your risk of foodborne illness.
          </div>
        </div>
      </div>
    </ContentCardWrapper>
  );
}
