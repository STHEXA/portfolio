import Image from "next/image";
import React from "react";

export default function SlideCard() {
  const cards = [
    {
      img: "/images/home.jpg",
    },
    {
      img: "/images/about.jpg",
    },
    {
      img: "/images/works.jpg",
    },
    {
      img: "/images/contact.jpg",
    },
  ];
  return (
    <div className="w-full h-screen text-center overflow-hidden relative">
      <div
        className="absolute w-[200px] h-[250px] top-[10%] left-[calc(50%-100px)] transform-3d perspective-[1000px]"
        style={{ "--quantity": 4 } as React.CSSProperties}
      >
        {cards.map((card, index) => (
          <div
            key={card.img}
            className="absolute inset-0 translate-z-[550px] rotate-y-[calc((var(--position)-1)*(360/var(--quantity))*1deg)]"
            style={{ "--position": index } as React.CSSProperties}
          >
            <Image
              src={card.img}
              alt=""
              width={200}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
