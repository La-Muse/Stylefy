"use client";

import { Archive, Home, Shirt, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const NavButton = ({
    path,
    icon: Icon,
    label,
  }: {
    path: string;
    icon: React.ComponentType<{ size?: number; fill?: string; className?: string }>;
    label: string;
  }) => {
    const isActive = pathname === path;
    return (
      <button
        type="button"
        onClick={() => router.push(path)}
        className={`flex flex-col items-center justify-center py-2 px-4 relative transition-colors ${
          isActive ? "text-black" : "text-gray-500"
        }`}
      >
        {isActive && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-black rounded-full" />
        )}
        <Icon
          size={24}
          fill={isActive ? "currentColor" : "none"}
          className={`mb-1 ${isActive ? "text-black" : "text-gray-500"}`}
        />
        <span className={`text-xs font-medium ${isActive ? "text-black" : "text-gray-500"}`}>{label}</span>
      </button>
    );
  };

  return (
    <div className=" w-full absolute bottom-0 left-0 right-0 h-16 bg-white flex justify-around items-center border-t border-gray-300 shadow-lg z-50">
      <NavButton path="/" icon={Home} label="ホーム" />
      <NavButton path="/tryon" icon={Shirt} label="仮装試着" />
      <NavButton path="/closet" icon={Archive} label="Myクローゼット" />
      <NavButton path="/mypage" icon={User} label="アカウント" />
    </div>
  );
}
