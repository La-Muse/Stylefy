"use client";

import { Button } from "@/src/components/ui/button";

interface StorageLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => void;
}

export function StorageLimitModal({ isOpen, onClose, onUpgrade }: StorageLimitModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
      <div className="bg-white w-full max-w-[430px] rounded-t-2xl pb-5 transform transition-transform">
        <div className="p-5 border-b border-gray-200 relative">
          <h3 className="text-lg font-semibold text-center">保存容量が制限に近づいています</h3>
          <button type="button" onClick={onClose} className="absolute right-4 top-4 text-2xl text-gray-500">
            &times;
          </button>
        </div>
        <div className="p-5">
          <div className="text-center mb-4">
            <i className="fas fa-exclamation-circle text-5xl text-gray-600" />
          </div>
          <p className="text-center mb-4">
            無料プランの保存容量残りは<strong>3点</strong>です。
            <br />
            プレミアムにアップグレードして、無制限の保存容量をお楽しみください。
          </p>
          <div className="h-1.5 bg-gray-200 rounded-sm overflow-hidden mb-5">
            <div className="w-[90%] h-full bg-gray-600" />
          </div>
          <Button onClick={onUpgrade} className="w-full mb-3">
            プレミアムにアップグレード
          </Button>
          <Button variant="ghost" onClick={onClose} className="w-full">
            後で
          </Button>
        </div>
      </div>
    </div>
  );
}
