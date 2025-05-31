"use client"

import type { ScreenType } from "@/app/page"

interface NavigationProps {
  currentScreen: ScreenType
  onNavigate: (screen: ScreenType) => void
}

export function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home-screen", icon: "fas fa-home", label: "ホーム" },
    { id: "tryon-screen", icon: "fas fa-tshirt", label: "仮装試着" },
    { id: "closet-screen", icon: "fas fa-archive", label: "Myクローゼット" },
    { id: "mypage-screen", icon: "fas fa-user", label: "アカウント" },
  ]

  return (
    <div className="absolute bottom-0 w-full h-14 bg-white flex justify-around items-center border-t border-gray-200">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id as ScreenType)}
          className={`flex flex-col items-center py-1 relative ${
            currentScreen === item.id ? "text-gray-900" : "text-gray-500"
          }`}
        >
          {currentScreen === item.id && (
            <div className="absolute top-0 left-1/4 w-1/2 h-0.5 bg-gray-900 rounded-full" />
          )}
          <i className={`${item.icon} text-xl mb-0.5`}></i>
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </div>
  )
}
