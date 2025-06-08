"use client";

import type React from "react";
import "./globals.css";
import { Navigation } from "@/src/components/ui/navigation";
import { StatusBar } from "@/src/components/ui/status-bar";
import { useState } from "react";
import Splash from "./splash/page";

// export const metadata: Metadata = {
//   title: "STYLEFY | 骨格ストレート向けファッションアプリ",
//   description: "骨格診断であなたに最適なファッションスタイルを見つけましょう",
//     generator: 'v0.dev'
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNavigation, setShowNavigation] = useState(false);
  const handleSplashComplete = () => {
    setShowNavigation(true);
  };
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="../public/fonts/NotoSansJP-Regular.otf" />
        <link rel="stylesheet" href="../styles/logo.css" />
        <link rel="manifest" href="../public/manifest.json" />
        <link rel="apple-touch-icon" href="../public/icon.png" />
        <meta name="theme-color" content="#b8e986" />
      </head>
      <body className="max-w-[430px] h-screen mx-auto bg-white relative overflow-hidden border border-gray-300 shadow-lg">
        <header>
          <StatusBar />
        </header>
        {/* FIXME: リロードの度にsplashが表示されるため要改善 */}
        {/* <Splash onComplete={handleSplashComplete}> */}
        <main>
          <div className="absolute top-12 left-0 right-0 bottom-14 overflow-y-auto scrollbar-hide">{children}</div>
        </main>
        {/* </Splash> */}
        {/* FIXME: リロードの度にsplashが表示されるため要改善 */}
        {/* <div className={`transition-opacity duration-300 ${showNavigation ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}> */}
        <Navigation />
        {/* </div> */}
      </body>
    </html>
  );
}
