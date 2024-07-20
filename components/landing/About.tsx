"use client";
import AboutImages from "@/components/AboutImages";
import useIsMobile from "@/hooks/UseIsMobile";
import AboutImagesMobile from "@/components/AboutImagesMobile";

const aboutContent = [
  {
    id: "1",
    title: "1Мир, любовь и единство",
    description:
      "Все преподаватели нашей школы — действующие танцоры. Мы систематически выезжаем за пределы нашего города и страны для пополнения багажа знаний и опыта, что позволяет нам находить новые пути развития и техники преподавания. Также, мы любим принимать гостей в стенах «10th Avenue» и часто приглашаем топовых танцоров из разных стран для проведения мастер-классов.",
    image: "/about/first.png",
  },
  {
    id: "2",
    title: "2Мир, любовь и единство",
    description:
      "2Все преподаватели нашей школы — действующие танцоры. Мы систематически выезжаем за пределы нашего города и страны для пополнения багажа знаний и опыта, что позволяет нам находить новые пути развития и техники преподавания. Также, мы любим принимать гостей в стенах «10th Avenue» и часто приглашаем топовых танцоров из разных стран для проведения мастер-классов.",
    image: "/about/second.png",
  },
  {
    id: "3",
    title: "3Мир, любовь и единство",
    description:
      "3Все преподаватели нашей школы — действующие танцоры. Мы систематически выезжаем за пределы нашего города и страны для пополнения багажа знаний и опыта, что позволяет нам находить новые пути развития и техники преподавания. Также, мы любим принимать гостей в стенах «10th Avenue» и часто приглашаем топовых танцоров из разных стран для проведения мастер-классов.",
    image: "/about/third.png",
  },
];

const About = () => {
  const { isMobile } = useIsMobile(768);
  return (
    <section>
      <div className="container">
        <h2 className="mb-4 text-2xl font-bold md:text-4xl">ДОМ - это ...</h2>
        <div className="flex flex-col gap-6">
          {isMobile ? (
            <AboutImagesMobile content={aboutContent} />
          ) : (
            <AboutImages content={aboutContent} />
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
