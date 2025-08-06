"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motionVariants, optimizedViewport, getMotionProps } from "@/lib/motion"

export const FAQsSection = () => {

  const faqs = [
    {
      question: "What site platforms does it work with?",
      answer: "Gist Answers is designed to be universally compatible with any website platform. Whether you're using WordPress, Shopify, Wix, or a custom-built site, our lightweight code snippet integrates seamlessly. From e-commerce stores to blogs, corporate sites to SaaS platforms―if it's on the web, Gist Answers can enhance it."
    },
    {
      question: "Is it compliant with privacy regulations?",
      answer: "Privacy is central to our mission. Gist Answers is built to ethically deliver accurate answers and appropriate ads. We minimize data collection, tracking only basic IP information. We are currently undergoing certification for both CCPA and GDPR compliance."
    },
    {
      question: "How easy is installation?",
      answer: "Fast, easy, and simple―Gist Answers takes 45 seconds to install. Simply copy and paste one line into your website and voila. Don't worry if you've never coded before, we'll also give you a video tutorial."
    },
    {
      question: "How customizable is the design?",
      answer: "Our design team will personally tailor your widget to match your site's look and feel. Colors, font, size, style―just let us know."
    },
    {
      question: "How do the answers match my content and tone?",
      answer: "Gist Answers directly connects to your existing knowledge base, documents, and site content. It learns your ideas and tone to generate responses that feel authentic, always promoting your content first."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a3333] to-[#0d2626]">
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
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            <span className="font-normal bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FAQs</span>
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          {...getMotionProps({
            initial: "initial",
            whileInView: "animate",
            viewport: optimizedViewport,
            variants: motionVariants.staggerContainer
          })}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={motionVariants.fadeUp}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 px-8 data-[state=open]:border-purple-500/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-purple-300 transition-colors py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pb-6 pt-0">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}