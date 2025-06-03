"use client"

import { useEffect, useState } from "react"

interface SplashScreenProps {
  children: React.ReactNode
    duration?: number
    onComplete: () => void
}

export default function Splash({ children, duration = 2000, onComplete }: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // 最小表示時間を設定
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  useEffect(() => {
    if (!isLoading) {
      const fadeTimer = setTimeout(() => {
        setShouldRender(false)
        onComplete()
      }, 500)

      return () => clearTimeout(fadeTimer)
    }
  }, [isLoading])

  if (!shouldRender) {
    return <>{children}</>
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="text-3xl font-light text-gray-900 tracking-[5px] uppercase mb-3">STYLEFY</div>
        <p className="text-gray-500 text-xs tracking-wider uppercase font-normal">Sophisticated Wardrobe</p>
      </div>
    </div>
  )
}
