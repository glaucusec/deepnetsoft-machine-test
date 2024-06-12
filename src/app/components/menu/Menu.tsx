import React from "react";
import MenuWrapper from "./MenuItemWrapper";
import MenuLayout from "./MenuLayout";
import MenuItem from "./MenuItem";
import HookahMenu from "./HookahMenu";

export default function Menu() {
  return (
    <MenuLayout>
      <MenuWrapper>
        <MenuItem />
      </MenuWrapper>
      <MenuWrapper>
        <MenuItem />
      </MenuWrapper>
      <MenuWrapper>
        <HookahMenu />
      </MenuWrapper>
    </MenuLayout>
  );
}
