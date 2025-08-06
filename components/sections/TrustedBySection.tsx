import { PlaceholderLogo } from "@/components/common/PlaceholderLogo"
import { placeholderAssets } from "@/data/placeholderAssets"

export const TrustedBySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by leading enterprises</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of organizations that rely on Gist Answers to transform their operations with AI
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {placeholderAssets.logos.companies.map((company, index) => (
            <div key={company.name} className="hover:scale-105 transition-transform duration-300">
              <PlaceholderLogo
                name={company.name}
                initials={company.placeholder}
                className="w-24 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
