import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, X } from "lucide-react";
import * as React from "react";
import Image from "next/image";
import Menu from "@/components/menu/Menu";

const BurgerNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex cursor-pointer items-center gap-x-2">
            <span className="hidden text-brand sm:block">Меню</span>
            <AlignJustify className="cursor-pointer text-brand" />
          </div>
        </SheetTrigger>
        <SheetContent
          className="flex h-full md:h-[90vh] justify-center pl-12 lg:top-10"
          side="top"
        >
          <SheetClose className="absolute right-1 top-1 flex h-[30px] w-[30px] md:h-[50px] md:w-[50px] items-center justify-center bg-brand transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-8 w-8 text-background" />
            <span className="sr-only">Close</span>
          </SheetClose>
          {/*content*/}
          <div className="flex gap-x-14 pt-3 md:pt-10">
            <div className="hidden md:block">
              <Image
                src="/menu/menu-img.png"
                alt="Танцор"
                width={250}
                height={500}
              />
            </div>
            <Menu containerStyles="w-full" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BurgerNav;
