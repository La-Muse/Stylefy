"use client";

import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/ui/header";

export default function Result() {
  return (
    <div className="h-full">
      <Header title="診断結果" centered />

      <div className="p-4">
        <div className="bg-white rounded-md shadow-lg overflow-hidden mb-4">
          {/* Result header with gradient */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 text-center relative">
            <span className="absolute top-4 right-4 bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
              Perfect Match!
            </span>

            <h2 className="text-3xl font-semibold mb-1 tracking-wider">骨格ストレート</h2>
            <p className="text-white/80 text-sm mb-5">あなたの体型診断結果</p>

            <div className="flex justify-center mb-5">
              <div className="w-0.5 h-24 bg-white mx-2" />
              <div className="w-0.5 h-24 bg-white mx-2" />
            </div>

            <div className="bg-white/15 px-5 py-2 rounded-full inline-block">
              <p className="text-white font-medium text-sm">スタイリッシュでエレガントな印象</p>
            </div>
          </div>

          {/* Result content */}
          <div className="p-6">
            <p className="text-gray-700 text-center leading-relaxed mb-6">
              縦のラインが強調される「骨格ストレート」タイプは、ハリのあるしっかりとした素材と直線的なデザインが魅力を引き出します。
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center bg-gray-100 p-4 rounded-md">
                <i className="fas fa-tshirt text-gray-900 text-xl mb-2" />
                <h4 className="font-semibold text-sm mb-1">素材</h4>
                <p className="text-xs text-gray-600 leading-tight">
                  ハリのある素材
                  <br />
                  スムースな素材
                </p>
              </div>
              <div className="text-center bg-gray-100 p-4 rounded-md">
                <i className="fas fa-ruler-vertical text-gray-900 text-xl mb-2" />
                <h4 className="font-semibold text-sm mb-1">シルエット</h4>
                <p className="text-xs text-gray-600 leading-tight">
                  ストレートライン
                  <br />
                  縦長シルエット
                </p>
              </div>
              <div className="text-center bg-gray-100 p-4 rounded-md">
                <i className="fas fa-tags text-gray-900 text-xl mb-2" />
                <h4 className="font-semibold text-sm mb-1">おすすめ</h4>
                <p className="text-xs text-gray-600 leading-tight">
                  テーラードジャケット
                  <br />
                  チェスターコート
                </p>
              </div>
            </div>

            <p className="text-center text-gray-600 text-sm mb-3">
              アカウント登録して、あなた専用の
              <br />
              スタイリングアドバイスを受け取りましょう
            </p>

            <Button className="w-full font-semibold tracking-wide">アカウント登録して詳細を見る</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
