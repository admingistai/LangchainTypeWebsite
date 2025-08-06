import { Card, CardContent } from "@/components/ui/card"
import { placeholderAssets } from "@/data/placeholderAssets"
import { Quote } from "lucide-react"

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What our customers say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading organizations are transforming their operations with Kore.ai
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {placeholderAssets.testimonials.map((testimonial, index) => (
            <Card key={testimonial.company} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-500 mb-6" />
                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.company.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
