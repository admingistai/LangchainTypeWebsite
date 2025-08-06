interface PlaceholderImageProps {
  title: string
  aspectRatio?: string
  className?: string
}

export const PlaceholderImage = ({ title, aspectRatio = "16/9", className = "" }: PlaceholderImageProps) => {
  const aspectClass = aspectRatio === "16/9" ? "aspect-video" : `aspect-[${aspectRatio}]`

  return (
    <div
      className={`relative w-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-lg ${aspectClass} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-gray-600 text-sm font-medium">{title}</span>
      </div>
    </div>
  )
}
