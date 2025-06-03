"use client"

import type React from "react"
import "./globals.css"
import { StatusBar } from "@/components/ui/status-bar"
import { Navigation } from "@/components/ui/navigation"
import { useState } from "react"
import Splash from "./splash/page"

// export const metadata: Metadata = {
//   title: "STYLEFY | 骨格ストレート向けファッションアプリ",
//   description: "骨格診断であなたに最適なファッションスタイルを見つけましょう",
//     generator: 'v0.dev'
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  {/* FIXME: リロードの度にsplashが表示されるため要改善 */}
  const [showNavigation, setShowNavigation] = useState(false)
  {/* FIXME: リロードの度にsplashが表示されるため要改善 */}
  const handleSplashComplete = () => {
    setShowNavigation(true)
  }
  return (
    <html lang="ja">
    <body className="max-w-[430px] h-screen mx-auto bg-white relative overflow-hidden border border-gray-300 shadow-lg">
        <header>
          <StatusBar />
        </header>
        {/* FIXME: リロードの度にsplashが表示されるため要改善 */}
        {/* <Splash onComplete={handleSplashComplete}> */}
          <main>
            <div className="absolute top-12 left-0 right-0 bottom-14 overflow-y-auto scrollbar-hide">
              {children}
            </div>
          </main>
        {/* </Splash> */}
        {/* FIXME: リロードの度にsplashが表示されるため要改善 */}
        {/* <div className={`transition-opacity duration-300 ${showNavigation ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}> */}
          <Navigation />
        {/* </div> */}
    </body>
  </html>
  )
}
