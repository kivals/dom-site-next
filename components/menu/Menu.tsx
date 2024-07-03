import React from "react";
import MenuHeader from "@/components/menu/MenuHeader";
import MenuBody from "@/components/menu/MenuBody";
import MenuFooter from "@/components/menu/MenuFooter";
import { cn } from "@/lib/utils";
import {ContainerStyles} from "@/types/types";

const Menu = ({ containerStyles }: ContainerStyles) => {
  return (
    <div className={cn("flex flex-col", containerStyles)}>
      <MenuHeader />
      <MenuBody containerStyles="grow" />
      <MenuFooter />
    </div>
  );
};

export default Menu;
