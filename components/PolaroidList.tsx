import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import { getRandomNumber } from "@/lib/utils";

interface Props {
  className?: string;
}

const content = [
  [
    {
      title: "@keryyang",
      image: "/teachers/photo1.jpg",
      text: "Vogue - направление",
      rotate: -getRandomNumber(1, 3),
    },
    {
      title: "@keryyang",
      image: "/teachers/photo1.jpg",
      text: "Vogue - направление",
      rotate: getRandomNumber(1, 2),
    },
  ],
  [
    {
      title: "@keryyang",
      image: "/teachers/photo1.jpg",
      text: "Vogue - направление",
      rotate: -getRandomNumber(2, 4),
    },
    {
      title: "@keryyang",
      image: "/teachers/photo1.jpg",
      text: "Vogue - направление",
      rotate: getRandomNumber(3, 5),
    },
  ],
];

const PolaroidList: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col">
      {content.map((pair, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-6 md:h-[90vh] md:flex-row md:justify-center md:gap-24"
        >
          {pair.map((p, index) => (
            <article
              key={index}
              className="flex flex-col items-center md:odd:self-start md:even:self-end"
            >
              <header className="mb-3 text-brand">{p.title}</header>
              <PolaroidPhoto
                image={p.image}
                text={p.text}
                rotateDegree={p.rotate}
              />
            </article>
          ))}
        </div>
      ))}
    </div>
  );
};

export { PolaroidList };
