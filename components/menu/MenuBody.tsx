import React from "react";
import { ContainerStyles } from "@/types/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

const nav: { name: string; path: string }[] = [
  { name: "О нас", path: "/" },
  { name: "Направления", path: "/" },
  { name: "Преподаватели", path: "/" },
  { name: "Расписание", path: "/" },
  { name: "События", path: "/" },
  { name: "Медиагалерея", path: "/" },
  { name: "Театр", path: "/" },
  { name: "Контакты", path: "/" },
];

const MenuBody = ({ containerStyles }: ContainerStyles) => {
  return (
    <div className={cn("py-2 md:py-5", containerStyles)}>
      <ul className="flex flex-col gap-2 md:gap-4 text-xl md:text-2xl uppercase sm:max-h-[300px] sm:flex-wrap">
        {nav.map((item, index) => (
          <li key={index}>
            <Link
              className="hover:before:animate-shiftLeft hover:after:animate-shiftRight before:bg-left-lines after:bg-right-lines relative font-semibold tracking-wide transition duration-300 before:absolute before:-left-[30px] before:bottom-0 before:top-0 before:hidden before:w-[30px] before:bg-contain before:bg-center before:bg-no-repeat after:absolute after:-right-[30px] after:bottom-0 after:top-0 after:hidden after:w-[30px] after:bg-contain after:bg-center after:bg-no-repeat hover:text-brand hover:before:block hover:after:block"
              href={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBody;
