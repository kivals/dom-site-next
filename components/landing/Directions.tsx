import DirectionCarousel from "@/components/DirectionCarousel";

const Directions = () => {
  return (
    <section className="mb-12">
      <div className="container">
        <div className="mb-6 flex-col items-end">
          <h2 className="mb-4 text-4xl font-bold uppercase md:text-4xl">
            Куда пойти
          </h2>
          <p className="max-w-[250px] text-xs">
            Больше 100 действующих групп, 20 направлений для развития,
            творческие команды и технические классы. Как тут не запутаться и
            найти то самое?
          </p>
        </div>
        <DirectionCarousel containerStyles="ml-12" />
      </div>
    </section>
  );
};

export default Directions;
