"use client";

import { Button } from "@/src/components/ui/button";

interface HomeScreenProps {
  onSave: () => void;
}

export default function HomePage() {
  return (
    <div className="h-full">
      <div className="p-4 bg-white border-b border-gray-200">
        <h1 className="text-lg font-light tracking-[2px] uppercase">STYLEFY</h1>
      </div>

      <div className="p-4">
        {/* User info */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-5">
          <div className="flex items-center">
            <div className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-light tracking-wider">
              A
            </div>
            <div className="ml-2">
              <h2 className="font-normal text-sm tracking-wide">Aiko</h2>
            </div>
          </div>
          <div className="bg-gray-100 text-gray-900 text-xs uppercase tracking-wide px-3 py-1 rounded-full">
            骨格ストレート
          </div>
        </div>

        {/* Main featured item */}
        <div className="mb-5">
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%98%E3%82%99%E3%83%BC%E3%82%B7%E3%82%99%E3%83%A5%E3%83%86%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%88%E3%82%99%E3%82%B3%E3%83%BC%E3%83%88-0FiNGjPKuHjMs124Vm0SgnP3QNDFlY.png"
              alt="今日のおすすめコーデ"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white text-gray-900 w-12 h-12 flex flex-col items-center justify-center font-normal tracking-wide">
              <span className="text-base">95%</span>
            </div>
          </div>
          <div className="py-4">
            <h3 className="font-normal text-base mb-2 uppercase tracking-wider">ベージュテーラードコート</h3>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 text-xs h-10 uppercase tracking-wider">
                <i className="fas fa-tshirt mr-1" /> 試着
              </Button>
              <Button className="flex-1 text-xs h-10 uppercase tracking-wider">
                <i className="fas fa-heart mr-1" /> 保存
              </Button>
            </div>
          </div>
        </div>

        {/* AI consultation input */}
        <div className="relative mb-4 border-t border-gray-200 pt-5">
          <input
            type="text"
            className="w-full h-12 bg-white border-0 pl-12 pr-12 text-sm"
            placeholder="AIスタイリストに相談"
          />
          <i className="fas fa-comment-alt absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <button type="button" className="absolute right-1 top-1/2 transform -translate-y-1/2 w-9 h-9 bg-transparent">
            <i className="fas fa-paper-plane text-gray-900" />
          </button>
        </div>

        {/* Storage indicator */}
        <div className="mt-auto border-t border-gray-200 pt-5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-gray-600 uppercase tracking-wider">保存容量</span>
            <span className="text-xs text-gray-600 font-medium">27/30</span>
          </div>
          <div className="h-px bg-gray-300 overflow-hidden">
            <div className="w-[90%] h-full bg-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
}
