import Logo from "@/components/Logo";
import BurgerNav from "@/components/BurgerNav";
import LinkTel from "@/components/ui/LinkTel";

const Header = () => {
  return (
    <header className="mb-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-x-6 py-2">
          <div className="flex-1">
            <Logo />
          </div>
          <LinkTel
            containerStyles="hidden sm:block"
            hrefTel="+79001111111"
            contentTel="+7-900-111-11-11"
          />
          <div className="flex">
            <div className="flex">
              <button className="w-[8rem] rounded-l-[5px] bg-brand py-2 font-semibold tracking-wide text-background sm:w-[12rem]">
                Записаться
              </button>
            </div>
            <div className="flex items-center justify-between rounded-r-[5px] border-2 border-brand p-3">
              <BurgerNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
