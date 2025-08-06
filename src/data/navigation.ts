export interface NavigationItem {
  label: string
  href?: string
  children?: NavigationItem[]
}

export const navigationItems: NavigationItem[] = [
  {
    label: "AI Solutions",
    children: [
      { label: "AI for Work", href: "/solutions/work" },
      { label: "AI for Service", href: "/solutions/service" },
      { label: "AI for Process", href: "/solutions/process" },
    ],
  },
  {
    label: "Agent Platform",
    children: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Agent Builder", href: "/platform/builder" },
      { label: "Analytics", href: "/platform/analytics" },
    ],
  },
  {
    label: "Agent Marketplace",
    href: "/marketplace",
  },
  {
    label: "Resources",
    children: [
      { label: "Documentation", href: "/resources/docs" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Case Studies", href: "/resources/case-studies" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
]
