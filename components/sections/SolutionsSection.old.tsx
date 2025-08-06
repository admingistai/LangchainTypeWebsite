import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceholderImage } from "@/components/common/PlaceholderImage"
import { ArrowRight, Zap, Users, Cog } from "lucide-react"

export const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "AI for Work",
      description:
        "Empower your workforce with intelligent assistants that enhance productivity, automate routine tasks, and provide instant access to information.",
      features: ["Employee Self-Service", "Knowledge Management", "Task Automation", "Decision Support"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "AI for Process",
      description:
        "Transform business processes with intelligent automation that adapts, learns, and optimizes workflows in real-time.",
      features: ["Process Automation", "Workflow Optimization", "Document Processing", "Compliance Monitoring"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI for Service",
      description:
        "Deliver exceptional customer experiences with AI-powered service agents that understand context and provide personalized support.",
      features: ["Customer Support", "Service Automation", "Omnichannel Experience", "Predictive Analytics"],
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Enterprise AI Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform every aspect of your business operations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={solution.title} className="h-full hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {solution.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                <div className="mb-8">
                  <PlaceholderImage title={`${solution.title} Demo`} className="rounded-lg" />
                </div>

                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
