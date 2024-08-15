import React from "react";

const Description = () => {
  return (
    <section>
      <div className="container mx-auto px-2 md:px-8">
        <div
          className="bg-description bg-cover bg-right bg-no-repeat px-2 py-10 md:bg-contain md:px-3 md:py-20 lg:px-6 lg:py-24">
          <div className="max-w-[400px] md:max-w-[600px]">
            <h2 className="mb-3 text-xl font-bold uppercase leading-6 sm:text-2xl md:mb-6 md:text-6xl">
              Больше, чем танец!
            </h2>
            <p className="text-sm leading-4 sm:text-base md:text-xl">
              Помимо творческой деятельности, мы проводим лекции и мастер классы,
              направленные на расширение и донесение сути настоящей культуры танца
              и ее истинных ценностей. Занимаемся изучением философской и
              этической составляющей танцевальной культуры.
            </p>
          </div>
        </div>
      </div>
    </section>
);
};

export default Description;
