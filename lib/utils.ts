import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type NavItem = {
  label: string;
  link: string;
}

export const navbar: NavItem[] = [
  {
    label: "Works",
    link: "#works"
  },
  {
      label: "Services",
      link: "#services"
  },
  {
      label: "Resume",
      link: "#resume"
  },
  {
      label: "Skills",
      link: "#skills"
  },
  // {
  //     label: "Testimonials",
  //     link: "#testimonials"
  // },
  {
      label: "Contact",
      link: "#contact"
  }
]
