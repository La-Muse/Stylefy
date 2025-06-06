"use client";

import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/ui/header";
import { Input } from "@/src/components/ui/input";

export default function SignUp() {
  return (
    <div className="h-full">
      <Header title="アカウント登録" onBack={() => {}} />

      <div className="p-4">
        <p className="text-gray-600 mb-4">骨格ストレートタイプに合わせたパーソナルスタイリングを受け取りましょう</p>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              メールアドレス
            </label>
            <Input type="email" placeholder="example@mail.com" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              パスワード
            </label>
            <Input type="password" placeholder="8文字以上で入力" />
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5 border-2 border-gray-300 rounded mr-2" />
            <p className="text-sm text-gray-600">
              <a href="/terms" className="text-gray-900 underline">
                利用規約
              </a>
              と
              <a href="/privacy" className="text-gray-900 underline">
                プライバシーポリシー
              </a>
              に同意します
            </p>
          </div>

          <Button onClick={() => {}} className="w-full">
            登録する
          </Button>

          <div className="text-center">
            <p className="text-gray-500 text-sm">または</p>
          </div>

          <div className="flex justify-center space-x-3">
            <button
              type="button"
              className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center"
            >
              <i className="fab fa-google text-red-500" />
            </button>
            <button
              type="button"
              className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center"
            >
              <i className="fab fa-apple text-black" />
            </button>
            <button
              type="button"
              className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center"
            >
              <i className="fab fa-facebook-f text-blue-600" />
            </button>
          </div>

          <div className="text-center">
            <Button variant="ghost">すでにアカウントをお持ちの方</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
