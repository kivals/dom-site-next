import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="sm:min-w-[150px]"
        src="/logo2.png"
        alt="Логотип сайта танцевальной студии ДОМ"
        width={100}
        height={100}
        priority
      />
    </Link>
  );
};

export default Logo;
