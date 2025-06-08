// import Image from "next/image";
import React from "react";

export default function SlideCard() {
  const cards = [
    {
      img: "/images/home.jpg",
      title: "HOME",
      description: "Welcome to my portfolio",
    },
    {
      img: "/images/about.jpg",
      title: "ABOUT",
      description: "Learn more about me",
    },
    {
      img: "/images/works.jpg",
      title: "WORKS",
      description: "View my projects",
    },
    {
      img: "/images/contact.jpg",
      title: "CONTACT",
      description: "Get in touch",
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>

      {/* 3D回転コンテナ */}
      <div
        className="relative"
        style={{
          width: "200px",
          height: "300px",
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div
          className="relative w-full h-full animate-rotate3d"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute w-full h-full rounded-xl overflow-hidden shadow-2xl"
              style={{
                transform: `rotateY(${index * 90}deg) translateZ(150px)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* カード背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"></div>

              {/* 画像があれば表示 */}
              <div className="relative w-full h-2/3 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-6xl opacity-20">
                  {card.title === "HOME" && "🏠"}
                  {card.title === "ABOUT" && "👤"}
                  {card.title === "WORKS" && "💼"}
                  {card.title === "CONTACT" && "📧"}
                </div>
              </div>

              {/* カード情報 */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 装飾的な要素 */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-lg"></div>
    </div>
  );
}
