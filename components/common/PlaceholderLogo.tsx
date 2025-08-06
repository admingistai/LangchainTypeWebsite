interface PlaceholderLogoProps {
  name: string
  initials: string
  className?: string
}

export const PlaceholderLogo = ({ name, initials, className = "" }: PlaceholderLogoProps) => {
  return (
    <div
      className={`flex items-center justify-center w-32 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg ${className}`}
    >
      <span className="text-xl font-bold text-gray-700" title={name}>
        {initials}
      </span>
    </div>
  )
}
