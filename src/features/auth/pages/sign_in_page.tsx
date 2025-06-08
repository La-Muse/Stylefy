"use client";

import StylefyHeader from "@/src/components/header/StylefyHeader";
import { MainLogo } from "@/src/components/logo/MainLogo";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/ui/header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GoogleAuthButton from "../components/button/GoogleAuthButton";
import SignUpNavigationButton from "../components/button/SignUpNavigationButton";
import { MailAddressFormGroup } from "../components/formGroup/MailAddressFormGroup";
import { PasswordFormGroup } from "../components/formGroup/PasswordFormGroup";

export default function SignIn() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState("signup");
  const [isLoading, setIsLoading] = useState(false);

  // ログインフォームの状態
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
    agreedToTerms: false,
  });

  // ログインフォーム送信処理
  // const handleLoginSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   if (!loginForm.email || !loginForm.password) {
  //     setLoginStatus("error");
  //     return;
  //   }
  //   setLoginStatus("success");
  //   // 実際のアプリケーションではここでAPI呼び出しを行います
  //   console.log("Login data:", loginForm);
  // };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep("success");
      setIsLoading(false);
    }, 2000);
  };

  if (currentStep === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header title="ログイン" onBack={() => router.back()} />
        <div className="flex flex-col items-center justify-center px-6 py-12">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-8">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-indigo-600"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <MainLogo size="medium" />

          <div className="text-center mt-8 max-w-sm">
            <h2 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">アカウント作成完了</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              STYLEFYへようこそ。
              <br />
              あなただけのパーソナルスタイリングを
              <br />
              始めましょう。
            </p>

            <Button
              onClick={() => console.log("Navigate to main app")}
              className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-light tracking-wider transition-all duration-300"
            >
              STYLEFYを始める
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <StylefyHeader title="ログイン" onBack={() => {}} centered={true} />
      <div className="px-6 py-8">
        <div className="text-center mt-6 mb-12">
          <MainLogo size="large" />
        </div>
        <div className="max-w-sm mx-auto space-y-6">
          <MailAddressFormGroup
            value={signInForm.email}
            onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
          />
          <PasswordFormGroup
            value={signInForm.password}
            onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
          />
          <div className="text-center pt-6">
            <Button
              onClick={() => console.log("Navigate to main app")}
              variant="outline"
              className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-light tracking-wider transition-all duration-300"
            >
              ログイン
            </Button>
          </div>
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500 font-light tracking-wide">または</span>
            </div>
          </div>
          <GoogleAuthButton handleGoogleAuth={handleGoogleAuth} isLoading={isLoading} />
          <div className="text-center pt-6">
            <SignUpNavigationButton onClick={() => router.push("/signup")} />
          </div>
        </div>

        <div className="text-center mt-16 pb-8">
          <p className="text-xs text-gray-400 tracking-wider">© 2024 STYLEFY. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
