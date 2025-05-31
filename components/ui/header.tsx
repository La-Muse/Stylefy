"use client"

interface HeaderProps {
  title: string
  subtitle?: string
  onBack?: () => void
  centered?: boolean
}

export function Header({ title, subtitle, onBack, centered }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className={`flex items-center ${centered ? "justify-center" : ""}`}>
        {onBack && !centered && (
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mr-3 text-gray-600"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
        )}
        <div className={centered ? "text-center" : ""}>
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
