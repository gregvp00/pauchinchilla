// components/navItems.ts

export interface NavItem {
  label: string;
  href: string;
  className?: string;
}

export const navItems: NavItem[] = [
  {
    label: "Portfolio",
    href: "#portfolio",
    className: "",
  },
  {
    label: "Gallery",
    href: "/gallery",
    className: "",
  },
  {
    label: "Contact",
    href: "/",
    className: "",
  },
];
