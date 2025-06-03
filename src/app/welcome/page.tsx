"use client";

import { Button } from "@/src/components/ui/button";

export default function WelcomePage() {
  return (
    <div className="flex flex-col h-full">
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%82%99%E3%83%BC%E3%82%B7%E3%82%99%E3%83%A5%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%88%E3%82%99%E3%82%B3%E3%83%BC%E3%83%88-0FiNGjPKuHjMs124Vm0SgnP3QNDFlY.png")',
        }}
      />
      <div className="bg-white -mt-6 p-4 pb-12">
        <h1 className="text-2xl font-light tracking-wider uppercase mt-4 mb-2">
          洗練された
          <br />
          スタイリング
        </h1>
        <p className="text-gray-600 mb-6">骨格診断であなたに最適なファッションスタイルを見つけましょう</p>
        <Button onClick={() => {}} className="w-full mb-3">
          骨格診断をはじめる
        </Button>
        <Button variant="ghost" className="w-full">
          すでにアカウントをお持ちの方
        </Button>
      </div>
    </div>
  );
}
