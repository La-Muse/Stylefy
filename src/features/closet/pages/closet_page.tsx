"use client";

import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/ui/header";
import { useState } from "react";

export default function Closet() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  const categories = ["すべて", "トップス", "アウター", "ボトムス", "ワンピース"];

  const myClothes = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%82%99%E3%83%BC%E3%82%B7%E3%82%99%E3%83%A5%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%88%E3%82%99%E3%82%B3%E3%83%BC%E3%83%88-0FiNGjPKuHjMs124Vm0SgnP3QNDFlY.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AB%E3%82%B7%E3%82%99%E3%83%A5%E3%82%A2%E3%83%AB%E3%83%86%E3%82%99%E3%83%8B%E3%83%A0-9EbPmASwE48epIbxeS9U0oZOZavuvO.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B7%E3%83%B3%E3%83%95%E3%82%9A%E3%83%AB%E3%83%8B%E3%83%83%E3%83%88-rXKkbVghWOBHDpxulPL2aaBtkPxcCX.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%88%E3%83%AC%E3%83%B3%E3%83%81%E3%82%B3%E3%83%BC%E3%83%88-rz8OtPkzPdecTZHgUSMwwkTNm8TjZt.png",
  ];

  const outfitHistory = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%82%99%E3%83%BC%E3%82%B7%E3%82%99%E3%83%A5%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%88%E3%82%99%E3%82%B3%E3%83%BC%E3%83%88-0FiNGjPKuHjMs124Vm0SgnP3QNDFlY.png",
      title: "お出かけコーデ",
      date: "6月10日",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B7%E3%83%B3%E3%83%95%E3%82%9A%E3%83%AB%E3%83%8B%E3%83%83%E3%83%88-rXKkbVghWOBHDpxulPL2aaBtkPxcCX.png",
      title: "オフィスカジュアル",
      date: "5月28日",
    },
  ];

  return (
    <div className="h-full">
      <Header title="Myクローゼット" />

      <div className="p-4">
        {/* Upload section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">私の服</h2>
          <label className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center cursor-pointer">
            <i className="fas fa-plus" />
            <input type="file" accept="image/*" multiple className="hidden" />
          </label>
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Clothes grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {myClothes.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index} className="relative aspect-square">
              <img
                src={item || "/placeholder.svg"}
                alt={`私の服${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
              <button
                type="button"
                className="absolute bottom-1 right-1 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-md"
              >
                <i className="fas fa-ellipsis-h text-xs" />
              </button>
            </div>
          ))}
          <label className="aspect-square border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center bg-white cursor-pointer">
            <i className="fas fa-plus text-2xl text-gray-500 mb-2" />
            <span className="text-xs text-gray-500">追加</span>
            <input type="file" accept="image/*" multiple className="hidden" />
          </label>
        </div>

        {/* Outfit history */}
        <h2 className="font-semibold text-lg mb-3">過去のコーディネート</h2>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {outfitHistory.map((outfit, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index} className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={outfit.image || "/placeholder.svg"}
                  alt={outfit.title}
                  className="w-full aspect-[1/1.3] object-cover"
                />
                <div className="absolute top-2 right-2 bg-white text-gray-700 text-xs px-2 py-1 rounded-full">
                  {outfit.date}
                </div>
              </div>
              <div className="p-2">
                <p className="text-sm font-medium">{outfit.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Storage info */}
        <div className="bg-gray-100 rounded-sm p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">保存容量</h3>
            <span className="text-sm font-medium">27/30</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-sm overflow-hidden mb-2">
            <div className="w-[90%] h-full bg-gray-600" />
          </div>
          <Button className="w-full text-sm h-10">容量アップグレード</Button>
        </div>
      </div>
    </div>
  );
}
