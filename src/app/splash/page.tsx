"use client";

import Splash from "@/src/features/splash/pages/splash_page";

export default function SplashPage() {
  // biome-ignore lint/correctness/noChildrenProp: <explanation>
  return <Splash children={<div>Splash</div>} duration={2000} onComplete={() => {}} />;
}
