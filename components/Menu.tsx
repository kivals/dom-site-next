import React from "react";
import MenuHeader from "@/components/MenuHeader";
import MenuBody from "@/components/MenuBody";
import MenuFooter from "@/components/MenuFooter";
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
