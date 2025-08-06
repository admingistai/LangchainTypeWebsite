"use client"

import { Card, CardContent } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { PackageIcon, CheckmarkCircle01Icon } from "@hugeicons/core-free-icons"

export const InstallationBenefits = () => {
  const benefits = [
    {
      title: "Install Widget",
      description: "Quick setup on your website"
    },
    {
      title: "Brand Customization", 
      description: "Match your site's design"
    },
    {
      title: "AI Configuration",
      description: "Tailored to your content"
    }
  ]

  return (
    <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-purple-500/30 rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg" />
      <Card className="!bg-transparent !border-0 !shadow-none">
      
      <CardContent className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <HugeiconsIcon icon={PackageIcon} size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">We'll Handle the Installation</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        {/* Benefits List */}
        <div className="space-y-6 mb-8">
          <p className="text-gray-300 text-center">During your demo call, our expert team will:</p>
          
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <HugeiconsIcon 
                  icon={CheckmarkCircle01Icon} 
                  size={20} 
                  className="text-green-400" 
                />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-400 text-sm italic">No technical expertise required!</p>
        </div>
      </CardContent>
      </Card>
    </div>
  )
}