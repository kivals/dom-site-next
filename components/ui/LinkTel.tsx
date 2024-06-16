import React from "react";
import { ContainerStyles } from "@/types/types";

interface LinkTel {
  hrefTel: string;
  contentTel: string;
}

const LinkTel = ({
  hrefTel,
  contentTel,
  containerStyles,
}: LinkTel & ContainerStyles) => {
  return (
    <a className={containerStyles} href={`tel:${hrefTel}`}>
      {contentTel}
    </a>
  );
};

export default LinkTel;
