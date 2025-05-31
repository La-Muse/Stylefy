import { Header } from "@/components/ui/header"

interface SearchScreenProps {
  onBack: () => void
}

export function SearchScreen({ onBack }: SearchScreenProps) {
  const categories = ["すべて", "トップス", "アウター", "ボトムス", "ワンピース"]

  const items = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%82%99%E3%83%BC%E3%82%B7%E3%82%99%E3%83%A5%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%88%E3%82%99%E3%82%B3%E3%83%BC%E3%83%88-0FiNGjPKuHjMs124Vm0SgnP3QNDFlY.png",
      title: "ベージュコート",
      subtitle: "骨格ストレート向け",
      match: 95,
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AB%E3%82%B7%E3%82%99%E3%83%A5%E3%82%A2%E3%83%AB%E3%83%86%E3%82%99%E3%83%8B%E3%83%A0-9EbPmASwE48epIbxeS9U0oZOZavuvO.png",
      title: "カジュアルデニム",
      subtitle: "骨格ストレート向け",
      match: 92,
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B7%E3%83%B3%E3%83%95%E3%82%9A%E3%83%AB%E3%83%8B%E3%83%83%E3%83%88-rXKkbVghWOBHDpxulPL2aaBtkPxcCX.png",
      title: "シンプルニット",
      subtitle: "骨格ストレート向け",
      match: 90,
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%88%E3%83%AC%E3%83%B3%E3%83%81%E3%82%B3%E3%83%BC%E3%83%88-rz8OtPkzPdecTZHgUSMwwkTNm8TjZt.png",
      title: "トレンチコート",
      subtitle: "骨格ストレート向け",
      match: 88,
    },
  ]

  return (
    <div className="h-full">
      <Header title="コーデ検索" />

      <div className="p-4">
        {/* Search input */}
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full h-11 bg-white border border-gray-300 rounded-sm pl-10 pr-4"
            placeholder="コーディネートを探す"
          />
          <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 mb-4">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                index === 0 ? "bg-gray-900 text-white" : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recommended items */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-3">骨格ストレートさんにおすすめ</h2>
          <div className="grid grid-cols-2 gap-3">
            {items.slice(0, 2).map((item, index) => (
              <div key={index} className="bg-white rounded-sm shadow-sm overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full aspect-[1/1.3] object-cover"
                />
                <div className="p-3">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.subtitle}</p>
                  <span className="inline-block mt-2 bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded-full">
                    マッチ度 {item.match}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular items */}
        <div>
          <h2 className="font-semibold text-lg mb-3">人気のコーディネート</h2>
          <div className="grid grid-cols-2 gap-3">
            {items.slice(2).map((item, index) => (
              <div key={index} className="bg-white rounded-sm shadow-sm overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full aspect-[1/1.3] object-cover"
                />
                <div className="p-3">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.subtitle}</p>
                  <span className="inline-block mt-2 bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded-full">
                    マッチ度 {item.match}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
