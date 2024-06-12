import React from "react";
import MenuWrapper from "./MenuItemWrapper";
import MenuLayout from "./MenuLayout";
import MenuItem from "./MenuItem";
import MenuItem2 from "./MenuItem2";
import HookahMenu from "./HookahMenu";

export default function Menu() {
  return (
    <MenuLayout>
      <MenuWrapper>
        <MenuItem />
      </MenuWrapper>
      <MenuWrapper>
        <MenuItem2 />
      </MenuWrapper>
      <MenuWrapper>
        <HookahMenu />
      </MenuWrapper>
    </MenuLayout>
  );
}
