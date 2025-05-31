"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"

interface PlansScreenProps {
  onBack: () => void
  onCompare: () => void
}

export function PlansScreen({ onBack, onCompare }: PlansScreenProps) {
  const plans = [
    {
      name: "プレミアムプラン",
      price: "¥480",
      period: "/月",
      popular: true,
      trial: "30日間無料",
      features: [
        "AIスタイリスト相談 無制限",
        "バーチャル試着 無制限",
        "アイテム保存容量 無制限",
        "パーソナルLOOKBOOK",
        "詳細な体型パラメータ調整",
        "買い物同行サービス 20%オフ",
      ],
    },
    {
      name: "ライトプラン",
      price: "¥280",
      period: "/月",
      popular: false,
      trial: "30日間無料",
      features: ["AIスタイリスト相談 月10回", "バーチャル試着 月10回", "アイテム保存容量 100点", "パーソナルLOOKBOOK"],
    },
  ]

  return (
    <div className="h-full">
      <Header title="プラン選択" onBack={onBack} />

      <div className="p-4">
        <p className="text-center text-gray-600 mb-4">あなたに最適なプランを選んでください</p>

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-sm p-5 mb-4 relative ${
              plan.popular ? "border-2 border-gray-600" : "border border-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-2 right-3 bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded">
                人気
              </div>
            )}

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl text-gray-900">{plan.name}</h3>
              <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">{plan.trial}</div>
            </div>

            <div className="text-3xl font-bold text-gray-900 my-4">
              {plan.price}
              <span className="text-base font-medium text-gray-600">{plan.period}</span>
            </div>

            <ul className="space-y-3 my-5">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-700">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              className={`w-full ${plan.popular ? "" : "variant-outline"}`}
              variant={plan.popular ? "default" : "outline"}
            >
              このプランを選択
            </Button>
          </div>
        ))}

        <div className="text-center mb-6">
          <Button variant="ghost" onClick={onCompare}>
            プランを比較
          </Button>
        </div>
      </div>
    </div>
  )
}
