"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"

interface DiagnosisScreenProps {
  onNext: () => void
  onBack: () => void
}

type BodyType = "straight" | "wave" | "natural" | null

export function DiagnosisScreen({ onNext, onBack }: DiagnosisScreenProps) {
  const [selectedType, setSelectedType] = useState<BodyType>(null)

  const bodyTypes = [
    {
      id: "straight",
      title: "ストレート",
      description: "直線的でスマートなシルエット",
      tags: ["ハリのある素材", "縦ライン", "すっきり"],
      icon: (
        <div className="flex justify-center items-center">
          <div className="w-0.5 h-11 bg-gray-900 mx-1.5"></div>
          <div className="w-0.5 h-11 bg-gray-900 mx-1.5"></div>
        </div>
      ),
    },
    {
      id: "wave",
      title: "ウェーブ",
      description: "メリハリのある女性らしいシルエット",
      tags: ["柔らかい素材", "曲線美", "優美"],
      icon: (
        <div className="flex justify-center items-center">
          <div className="w-0.5 h-11 bg-gray-900 mx-1.5 rounded-sm transform -rotate-2"></div>
          <div className="w-0.5 h-11 bg-gray-900 mx-1.5 rounded-sm transform rotate-2"></div>
        </div>
      ),
    },
    {
      id: "natural",
      title: "ナチュラル",
      description: "丸みを帯びた柔らかなシルエット",
      tags: ["自然素材", "ゆったり", "柔らか"],
      icon: (
        <div className="flex justify-center items-center">
          <div className="w-1 h-11 bg-gray-900 rounded-full transform -rotate-3"></div>
          <div className="w-1 h-11 bg-gray-900 rounded-full transform rotate-3"></div>
        </div>
      ),
    },
  ]

  return (
    <div className="h-full">
      <Header title="骨格診断" onBack={onBack} />

      <div className="p-4">
        {/* Progress bar */}
        <div className="h-1 bg-gray-200 rounded-sm overflow-hidden mb-4">
          <div className="w-1/3 h-full bg-gray-900"></div>
        </div>

        <h2 className="text-xl font-semibold text-center mb-4">あなたの骨格タイプは？</h2>

        <div className="space-y-4">
          {bodyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id as BodyType)}
              className="w-full p-4 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                  {type.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-lg mb-1">{type.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {type.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-900 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 ml-3 flex items-center justify-center ${
                    selectedType === type.id ? "border-gray-900 bg-gray-900" : "border-gray-300"
                  }`}
                >
                  {selectedType === type.id && <i className="fas fa-check text-white text-xs"></i>}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-2 mt-6">
          <Button variant="outline" onClick={onBack} className="flex-1">
            戻る
          </Button>
          <Button onClick={onNext} disabled={!selectedType} className="flex-1">
            次へ
          </Button>
        </div>
      </div>
    </div>
  )
}
