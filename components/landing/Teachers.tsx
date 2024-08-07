import React from "react";
import Image from "next/image";
import {PolaroidPhoto} from "@/components/PolaroidPhoto";
import {PolaroidList} from "@/components/PolaroidList";

interface Props {
  className?: string;
}

const Teachers: React.FC<Props> = ({className}) => {
  return (
    <section className="mb-12">
      <div className="container">
        <h2 className="mb-6 text-4xl font-bold uppercase md:text-4xl">
          Наши педагоги
        </h2>
        <PolaroidList />
      </div>
    </section>
  );
};

export {Teachers};
