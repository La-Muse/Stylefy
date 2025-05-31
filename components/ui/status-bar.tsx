export function StatusBar() {
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-white text-sm font-medium text-gray-700">
      <span>19:41</span>
      <div className="flex items-center space-x-2">
        <i className="fas fa-signal"></i>
        <i className="fas fa-wifi"></i>
        <i className="fas fa-battery-three-quarters"></i>
      </div>
    </div>
  )
}
