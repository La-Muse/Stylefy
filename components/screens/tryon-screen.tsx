"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"

interface TryOnScreenProps {
  onSave: () => void
}

export function TryOnScreen({ onSave }: TryOnScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState("トップス")
  const [selectedItem, setSelectedItem] = useState(0)

  const categories = ["トップス", "アウター", "ボトムス", "ワンピース"]
  const items = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%82%99%E3%83%BC%E3%82%B7%E3%82%99%E3%83%A5%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%88%E3%82%99%E3%82%B3%E3%83%BC%E3%83%88-0FiNGjPKuHjMs124Vm0SgnP3QNDFlY.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AB%E3%82%B7%E3%82%99%E3%83%A5%E3%82%A2%E3%83%AB%E3%83%86%E3%82%99%E3%83%8B%E3%83%A0-9EbPmASwE48epIbxeS9U0oZOZavuvO.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B7%E3%83%B3%E3%83%95%E3%82%9A%E3%83%AB%E3%83%8B%E3%83%83%E3%83%88-rXKkbVghWOBHDpxulPL2aaBtkPxcCX.png",
  ]

  return (
    <div className="h-full">
      <Header title="バーチャル試着" subtitle="骨格タイプに合わせた試着を体験" />

      <div className="p-4">
        {/* Item selection */}
        <div className="bg-white rounded-sm p-4 mb-4">
          <h2 className="font-semibold mb-3">試着するアイテムを選択</h2>

          {/* Category tabs */}
          <div className="flex overflow-x-auto scrollbar-hide space-x-2 mb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-2xl text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Item grid */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {items.map((item, index) => (
              <button key={index} onClick={() => setSelectedItem(index)} className="relative">
                <img
                  src={item || "/placeholder.svg"}
                  alt={`アイテム${index + 1}`}
                  className={`w-full aspect-square object-cover rounded-sm ${
                    selectedItem === index ? "border-2 border-gray-900" : ""
                  }`}
                />
                {selectedItem === index && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                )}
              </button>
            ))}
          </div>

          <Button className="w-full">試着する</Button>
        </div>

        {/* Try-on result */}
        <h2 className="font-semibold text-lg mb-3">試着結果</h2>

        <div className="bg-white rounded-sm shadow-sm overflow-hidden mb-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%82%99%E3%83%BC%E3%82%B7%E3%82%99%E3%83%A5%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%88%E3%82%99%E3%82%B3%E3%83%BC%E3%83%88%E8%A9%A6%E7%9D%80-7NMPwEPTEmgLd2xuQAM2J6Ho2Go77v.png"
            alt="試着結果"
            className="w-full h-75 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg">ベージュコート</h3>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
                <i className="far fa-star text-yellow-400"></i>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              このコートは骨格ストレートさんの縦のラインを美しく見せてくれます。ベルトでウエストマークするとさらに魅力を引き出せます。
            </p>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 text-sm h-10">
                <i className="fas fa-share-alt mr-1"></i> シェア
              </Button>
              <Button onClick={onSave} className="flex-1 text-sm h-10">
                <i className="fas fa-heart mr-1"></i> 保存
              </Button>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gray-50 rounded-sm p-4 mb-4">
          <div className="flex items-center">
            <i className="fas fa-lightbulb text-gray-900 text-xl mr-2"></i>
            <div>
              <h3 className="font-semibold">骨格ストレートさんのポイント</h3>
              <p className="text-sm text-gray-700">
                すっきりとした縦のラインを強調すると、よりスタイリッシュに見えます。
              </p>
            </div>
          </div>
        </div>

        {/* Usage info */}
        <div className="text-center text-gray-500 text-xs">本日の試着：2/5回（無料プラン）</div>
      </div>
    </div>
  )
}
