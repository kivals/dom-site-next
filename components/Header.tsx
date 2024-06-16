import React from "react";
import Logo from "@/components/Logo";
import BurgerNav from "@/components/BurgerNav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex gap-x-6 items-center justify-between py-2">
          <div className="flex-1">
            <Logo />
          </div>
          {/*phone*/}
          <div className="hidden sm:block">+7 (920) 44-38-28</div>
          <div className="flex">
            <div className="flex">
              <button className="bg-brand text-background w-[8rem] sm:w-[12rem] rounded-l-[5px] py-2 font-semibold tracking-wide">
                Записаться
              </button>
            </div>
            <div className="flex items-center p-3 justify-between border-brand rounded-r-[5px] border-2">
              <BurgerNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
