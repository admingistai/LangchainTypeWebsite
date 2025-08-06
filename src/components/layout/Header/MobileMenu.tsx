import { Button } from "@/components/ui/button"
import { navigationItems } from "@/data/navigation"
import { ChevronRight } from "lucide-react"

export const MobileMenu = () => {
  return (
    <div className="flex flex-col space-y-4 mt-8">
      {navigationItems.map((item) => (
        <div key={item.label} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-900">{item.label}</span>
            {item.children && <ChevronRight className="h-4 w-4" />}
          </div>
          {item.children && (
            <div className="pl-4 space-y-2">
              {item.children.map((child) => (
                <a key={child.label} href={child.href} className="block text-sm text-gray-600 hover:text-gray-900">
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="pt-4 border-t space-y-3">
        <Button variant="ghost" className="w-full justify-start">
          Sign In
        </Button>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact us</Button>
      </div>
    </div>
  )
}
