"use client"

import { Card, CardContent } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { ZapIcon, UserGroupIcon, Settings02Icon } from "@hugeicons/core-free-icons"
import { motion } from "framer-motion"
import { motionVariants, optimizedViewport, getMotionProps } from "@/lib/motion"

export const SolutionsSection = () => {
  const solutions = [
    {
      icon: <HugeiconsIcon icon={UserGroupIcon} size={32} />,
      title: "Content that answers",
      description: "Connect your existing content to power smart, on-brand answers.",
      features: [],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <HugeiconsIcon icon={Settings02Icon} size={32} />,
      title: "Customizable design",
      description: "Choose colors, fonts, and styling to perfectly match your brand identity.",
      features: [],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: <HugeiconsIcon icon={ZapIcon} size={32} />,
      title: "Toward a goal",
      description: "Set clear objectives and success metrics—we'll make sure every answer drives results.",
      features: [],
      gradient: "from-pink-500 to-pink-600",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          {...getMotionProps({
            initial: "initial",
            whileInView: "animate",
            viewport: optimizedViewport,
            variants: motionVariants.fadeUpSlow
          })}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Make it <span className="font-normal bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">yours</span>.
          </h2>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          {...getMotionProps({
            initial: "initial",
            whileInView: "animate",
            viewport: optimizedViewport,
            variants: motionVariants.staggerContainer
          })}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={motionVariants.fadeUp}
              {...getMotionProps({
                initial: "rest",
                whileHover: "hover",
                variants: motionVariants.hoverLift
              })}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className={`h-1 bg-gradient-to-r ${solution.gradient}`} />
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {solution.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}