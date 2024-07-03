import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {AlignJustify, X} from "lucide-react";
import * as React from "react";
import Image from "next/image";
import MenuFooter from "@/components/menu/MenuFooter";
import Menu from "@/components/menu/Menu";

const BurgerNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <span className="hidden sm:block text-brand">Меню</span>
            <AlignJustify className="cursor-pointer text-brand" />
          </div>
        </SheetTrigger>
        <SheetContent className="flex h-[90vh] lg:top-10 pl-12 justify-center" side="top">
          <SheetClose className="absolute flex items-center justify-center w-[50px] h-[50px] bg-brand right-1 top-1 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-8 w-8 text-background" />
            <span className="sr-only">Close</span>
          </SheetClose>
           {/*content*/}
          <div className="flex gap-x-14 pt-10">
            <div className="hidden md:block">
              <Image src="/menu/menu-img.png" alt="Танцор" width={250} height={500} />
            </div>
            <Menu containerStyles="w-full"/>
          </div>
        </SheetContent>
      </Sheet>
    </div>

  );
};

export default BurgerNav;