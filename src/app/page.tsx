"use client";

import { useRef } from "react";
import NavMenu from "@/components/NavMenu";
import SlideCard from "@/components/SlideCard/SlideCard";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight - target.clientHeight;
    const scrollProgress = scrollTop / scrollHeight;

    // カスタムイベントを発火してSlideCardに回転情報を伝える
    window.dispatchEvent(
      new CustomEvent("scrollRotate", {
        detail: { progress: scrollProgress },
      })
    );
  };

  return (
    <div className="flex h-screen">
      {/* 左側 - 回転カードアニメーション */}
      <div className="w-1/2 relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <SlideCard />
      </div>

      {/* 右側 - スクロール可能なコンテンツ */}
      <div
        ref={scrollRef}
        className="w-1/2 overflow-y-auto bg-white"
        onScroll={handleScroll}
      >
        <div className="p-8 space-y-8">
          <header className="text-center py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              STHEXAのポートフォリオ
            </h1>
            <p className="text-gray-600 text-lg">
              クリエイティブな作品とプロジェクトをご紹介します
            </p>
          </header>

          <NavMenu />

          {/* セクション1 */}
          <section className="py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                こんにちは。私はSTHEXAです。Web開発からデザインまで、
                幅広い分野でクリエイティブな作品を制作しています。
              </p>
              <p>
                最新の技術とトレンドを常に学び続け、
                ユーザーエクスペリエンスを重視した作品作りを心がけています。
              </p>
            </div>
          </section>

          {/* セクション2 */}
          <section className="py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                <p className="text-sm text-gray-600">
                  React, Next.js, TypeScript
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Design</h3>
                <p className="text-sm text-gray-600">
                  UI/UX, Figma, Adobe Creative Suite
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
                <p className="text-sm text-gray-600">
                  Node.js, Python, Database
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Other</h3>
                <p className="text-sm text-gray-600">Git, Docker, AWS</p>
              </div>
            </div>
          </section>

          {/* セクション3 */}
          <section className="py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recent Works
            </h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Project Alpha
                </h3>
                <p className="text-gray-600 mb-4">
                  モダンなWebアプリケーションの開発プロジェクト。 React +
                  TypeScriptを使用して構築。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    TypeScript
                  </span>
                </div>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Project Beta
                </h3>
                <p className="text-gray-600 mb-4">
                  レスポンシブデザインを重視したコーポレートサイトの制作。
                  アニメーションとインタラクションにこだわりました。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    CSS Animation
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                    JavaScript
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* セクション4 */}
          <section className="py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                プロジェクトのご相談やお仕事のお問い合わせは、
                お気軽にご連絡ください。
              </p>
              <div className="space-y-2 text-gray-600">
                <p>📧 contact@sthexa.com</p>
                <p>🐦 @sthexa_dev</p>
                <p>💼 LinkedIn: STHEXA</p>
              </div>
            </div>
          </section>

          {/* フッター用の余白 */}
          <div className="py-12"></div>
        </div>
      </div>
    </div>
  );
}
