import React from 'react';
import {Separator} from "@/components/ui/separator";
import LinkTel from "@/components/ui/LinkTel";

const MenuFooter = () => {
  return (
    <footer>
      <Separator className="bg-muted mb-4" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <p className="text-muted">ул. Добролюбова, 53/4 (Бизнес центр «Добролюбов»)</p>
        <div className="flex flex-col gap-3">
          <LinkTel
            hrefTel="+79001111111"
            contentTel="+7-900-111-11-11"
            containerStyles="text-2xl text-nowrap"
          />
          <a className="text-brand" href="mailto:kivals.90@yandex.ru">kivals.90@yandex.ru</a>
        </div>
      </div>
    </footer>
  );
};

export default MenuFooter;