"use client"

import { useState, useEffect } from "react"
import { SplashScreen } from "@/components/screens/splash-screen"
import { WelcomeScreen } from "@/components/screens/welcome-screen"
import { DiagnosisScreen } from "@/components/screens/diagnosis-screen"
import { ResultScreen } from "@/components/screens/result-screen"
import { SignupScreen } from "@/components/screens/signup-screen"
import { HomeScreen } from "@/components/screens/home-screen"
import { SearchScreen } from "@/components/screens/search-screen"
import { TryOnScreen } from "@/components/screens/tryon-screen"
import { MyPageScreen } from "@/components/screens/mypage-screen"
import { PlansScreen } from "@/components/screens/plans-screen"
import { ClosetScreen } from "@/components/screens/closet-screen"
import { StatusBar } from "@/components/ui/status-bar"
import { Navigation } from "@/components/ui/navigation"
import { StorageLimitModal } from "@/components/modals/storage-limit-modal"
import { PlanComparisonModal } from "@/components/modals/plan-comparison-modal"

export type ScreenType =
  | "splash-screen"
  | "welcome-screen"
  | "diagnosis-screen"
  | "result-screen"
  | "signup-screen"
  | "home-screen"
  | "search-screen"
  | "tryon-screen"
  | "mypage-screen"
  | "plans-screen"
  | "closet-screen"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("splash-screen")
  const [previousScreen, setPreviousScreen] = useState<ScreenType>("splash-screen")
  const [showStorageModal, setShowStorageModal] = useState(false)
  const [showPlanModal, setShowPlanModal] = useState(false)

  useEffect(() => {
    // Auto-transition from splash to welcome after 3 seconds
    if (currentScreen === "splash-screen") {
      const timer = setTimeout(() => {
        switchScreen("welcome-screen")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [currentScreen])

  const switchScreen = (screenId: ScreenType) => {
    setPreviousScreen(currentScreen)
    setCurrentScreen(screenId)
  }

  const goBack = () => {
    if (previousScreen) {
      switchScreen(previousScreen)
    }
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash-screen":
        return <SplashScreen />
      case "welcome-screen":
        return <WelcomeScreen onNext={() => switchScreen("diagnosis-screen")} />
      case "diagnosis-screen":
        return <DiagnosisScreen onNext={() => switchScreen("result-screen")} onBack={goBack} />
      case "result-screen":
        return <ResultScreen onNext={() => switchScreen("signup-screen")} onBack={goBack} />
      case "signup-screen":
        return <SignupScreen onNext={() => switchScreen("home-screen")} onBack={goBack} />
      case "home-screen":
        return <HomeScreen onSave={() => setShowStorageModal(true)} />
      case "search-screen":
        return <SearchScreen onBack={goBack} />
      case "tryon-screen":
        return <TryOnScreen onSave={() => setShowStorageModal(true)} />
      case "mypage-screen":
        return <MyPageScreen onUpgrade={() => switchScreen("plans-screen")} />
      case "plans-screen":
        return <PlansScreen onBack={goBack} onCompare={() => setShowPlanModal(true)} />
      case "closet-screen":
        return <ClosetScreen />
      default:
        return <SplashScreen />
    }
  }

  const showNavigation = ["home-screen", "tryon-screen", "closet-screen", "mypage-screen"].includes(currentScreen)

  return (
    <div className="max-w-[430px] h-screen mx-auto bg-white relative overflow-hidden border border-gray-300 shadow-lg">
      <StatusBar />

      <div className="absolute top-12 left-0 right-0 bottom-14 overflow-y-auto scrollbar-hide">{renderScreen()}</div>

      {showNavigation && <Navigation currentScreen={currentScreen} onNavigate={switchScreen} />}

      <StorageLimitModal
        isOpen={showStorageModal}
        onClose={() => setShowStorageModal(false)}
        onUpgrade={() => {
          setShowStorageModal(false)
          switchScreen("plans-screen")
        }}
      />

      <PlanComparisonModal
        isOpen={showPlanModal}
        onClose={() => setShowPlanModal(false)}
        onSelectPremium={() => {
          setShowPlanModal(false)
          // Handle premium selection
        }}
      />
    </div>
  )
}
