"use client"

import { Button } from "@/components/ui/button"

interface PlanComparisonModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectPremium: () => void
}

export function PlanComparisonModal({ isOpen, onClose, onSelectPremium }: PlanComparisonModalProps) {
  if (!isOpen) return null

  const features = [
    { name: "相談回数", free: "1日5回", light: "月10回", premium: "無制限" },
    { name: "試着回数", free: "1日5回", light: "月10回", premium: "無制限" },
    { name: "アイテム保存容量", free: "30点まで", light: "100点", premium: "無制限" },
    { name: "パーソナルLOOKBOOK", free: false, light: true, premium: true },
    { name: "詳細体型パラメータ", free: false, light: false, premium: true },
    { name: "買い物同行割引", free: false, light: false, premium: "20%オフ" },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
      <div className="bg-white w-full max-w-[430px] rounded-t-2xl pb-5 transform transition-transform">
        <div className="p-5 border-b border-gray-200 relative">
          <h3 className="text-lg font-semibold text-center">プラン比較</h3>
          <button onClick={onClose} className="absolute right-4 top-4 text-2xl text-gray-500">
            &times;
          </button>
        </div>
        <div className="p-5 max-h-[70vh] overflow-y-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-2 font-semibold">機能</th>
                <th className="text-center p-2 font-semibold">無料プラン</th>
                <th className="text-center p-2 font-semibold">ライト</th>
                <th className="text-center p-2 font-semibold">プレミアム</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-2">{feature.name}</td>
                  <td className="text-center p-2">
                    {typeof feature.free === "boolean" ? (
                      <i className={`fas ${feature.free ? "fa-check text-green-500" : "fa-times text-red-500"}`}></i>
                    ) : (
                      feature.free
                    )}
                  </td>
                  <td className="text-center p-2">
                    {typeof feature.light === "boolean" ? (
                      <i className={`fas ${feature.light ? "fa-check text-green-500" : "fa-times text-red-500"}`}></i>
                    ) : (
                      feature.light
                    )}
                  </td>
                  <td className="text-center p-2">
                    {typeof feature.premium === "boolean" ? (
                      <i className={`fas ${feature.premium ? "fa-check text-green-500" : "fa-times text-red-500"}`}></i>
                    ) : (
                      feature.premium
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button onClick={onSelectPremium} className="w-full mt-4">
            プレミアムを選択
          </Button>
        </div>
      </div>
    </div>
  )
}
