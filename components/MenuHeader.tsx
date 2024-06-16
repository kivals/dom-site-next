import React from 'react';
import Logo from "@/components/Logo";
import {Separator} from "@/components/ui/separator";

const MenuHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Logo />
        <span className="text-xl sm:text-2xl text-muted">Меню</span>
      </div>
      <Separator className="bg-muted mb-4" />
    </>
  );
};

export default MenuHeader;