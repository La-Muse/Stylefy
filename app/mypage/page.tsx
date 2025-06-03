"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"

interface MyPageScreenProps {
  onUpgrade: () => void
}

export default function MyPagePage({ onUpgrade }: MyPageScreenProps) {
  const favoriteItems = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%82%99%E3%83%BC%E3%82%B7%E3%82%99%E3%83%A5%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%88%E3%82%99%E3%82%B3%E3%83%BC%E3%83%88-0FiNGjPKuHjMs124Vm0SgnP3QNDFlY.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AB%E3%82%B7%E3%82%99%E3%83%A5%E3%82%A2%E3%83%AB%E3%83%86%E3%82%99%E3%83%8B%E3%83%A0-9EbPmASwE48epIbxeS9U0oZOZavuvO.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B7%E3%83%B3%E3%83%95%E3%82%9A%E3%83%AB%E3%83%8B%E3%83%83%E3%83%88-rXKkbVghWOBHDpxulPL2aaBtkPxcCX.png",
  ]

  const settingsItems = [
    { icon: "fas fa-user-circle", label: "アカウント設定" },
    { icon: "fas fa-bell", label: "通知設定" },
    { icon: "fas fa-lock", label: "プライバシー設定" },
    { icon: "fas fa-question-circle", label: "ヘルプ・サポート" },
    { icon: "fas fa-sign-out-alt", label: "ログアウト" },
  ]

  return (
    <div className="h-full">
      <Header title="マイページ" />

      <div className="p-4">
        {/* User profile */}
        <div className="bg-white rounded-sm p-4 mb-4">
          <div className="flex items-center mb-3">
            <div className="w-15 h-15 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-medium">
              A
            </div>
            <div className="ml-3">
              <h2 className="font-semibold text-lg">Aiko</h2>
              <p className="text-gray-500 text-sm">骨格タイプ: ストレート</p>
              <div className="bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded-full mt-1 inline-block">
                無料プラン
              </div>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-gray-600 text-sm mb-1">アイテム保存容量: 27/30点</p>
            <div className="h-1.5 bg-gray-200 rounded-sm overflow-hidden">
              <div className="w-[90%] h-full bg-gray-600"></div>
            </div>
          </div>
          <Button onClick={onUpgrade} className="w-full">
            プレミアムにアップグレード
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-sm p-4 text-center">
            <i className="fas fa-tshirt text-gray-900 text-2xl mb-2"></i>
            <h3 className="font-semibold mb-1">保存したコーデ</h3>
            <p className="text-gray-900 text-2xl font-bold">27</p>
          </div>
          <div className="bg-white rounded-sm p-4 text-center">
            <i className="fas fa-comment-alt text-gray-900 text-2xl mb-2"></i>
            <h3 className="font-semibold mb-1">相談履歴</h3>
            <p className="text-gray-900 text-2xl font-bold">12</p>
          </div>
        </div>

        {/* Favorite items */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-3">お気に入りアイテム</h2>
          <div className="grid grid-cols-3 gap-2">
            {favoriteItems.map((item, index) => (
              <img
                key={index}
                src={item || "/placeholder.svg"}
                alt={`お気に入り${index + 1}`}
                className="w-full aspect-square object-cover rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-3">設定</h2>
          <div className="bg-white rounded-sm overflow-hidden">
            {settingsItems.map((item, index) => (
              <button
                key={index}
                className={`w-full p-3 flex items-center text-left hover:bg-gray-50 ${
                  index < settingsItems.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <i className={`${item.icon} text-gray-500 text-xl mr-3`}></i>
                <span className="flex-1">{item.label}</span>
                <i className="fas fa-chevron-right text-gray-400 text-sm"></i>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mb-6">STYLEFY v1.0.0</div>
      </div>
    </div>
  )
}
