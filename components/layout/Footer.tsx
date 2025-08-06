"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Facebook01Icon, NewTwitterIcon, Linkedin01Icon, YoutubeIcon } from "@hugeicons/core-free-icons"

export const Footer = () => {

  return (
    <footer className="bg-[#0a1a1a] text-white">
      <div className="container mx-auto px-4 py-8">

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Gist Answers. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              {[
                { icon: <HugeiconsIcon icon={Facebook01Icon} size={20} />, href: "#" },
                { icon: <HugeiconsIcon icon={NewTwitterIcon} size={20} />, href: "#" },
                { icon: <HugeiconsIcon icon={Linkedin01Icon} size={20} />, href: "#" },
                { icon: <HugeiconsIcon icon={YoutubeIcon} size={20} />, href: "#" },
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex space-x-6 text-sm">
              <a 
                href="https://prorata.ai/privacy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://prorata.ai/terms/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}