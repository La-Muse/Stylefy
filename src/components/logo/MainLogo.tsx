export const MainLogo = ({ size = "large" }: { size?: "small" | "medium" | "large" }) => {
  const sizeClasses = {
    small: "text-xl tracking-[3px]",
    medium: "text-2xl tracking-[4px]",
    large: "text-4xl tracking-[6px]",
  };

  return (
    <div className="text-center">
      <div className={`font-light text-gray-900 uppercase ${sizeClasses[size]} relative inline-block`}>
        STYLEFY
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
      </div>
      {size === "large" && (
        <p className="text-gray-500 text-xs tracking-wider uppercase font-light mt-4">Sophisticated Wardrobe</p>
      )}
    </div>
  );
};
