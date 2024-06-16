import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {AlignJustify, X} from "lucide-react";
import * as React from "react";

const BurgerNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <span className="hidden sm:block text-brand">Меню</span>
            <AlignJustify className="cursor-pointer text-brand" />
          </div>
        </SheetTrigger>
        <SheetContent className="h-[80vh] lg:top-10" side="top">
          <SheetClose className="absolute flex items-center justify-center w-[50px] h-[50px] bg-brand right-1 top-1 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-8 w-8 text-background" />
            <span className="sr-only">Close</span>
          </SheetClose>
          Content
        </SheetContent>
      </Sheet>
    </>

  );
};

export default BurgerNav;