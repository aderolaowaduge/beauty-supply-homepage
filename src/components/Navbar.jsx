import { Disclosure } from "@headlessui/react";
import { Menu, X } from "lucide-react";

const shopLinks = [
  { name: "Hair Care", href: "#haircare" },
  { name: "Accessories", href: "#accessories" },
  { name: "Novelty", href: "#novelty" },
  { name: "Shop All", href: "#shop-all" },
];

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-xl font-bold font-main">Della's Beauty</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex md:items-center md:space-x-6">
                {/* Shop Hover Dropdown */}
                <div className="relative group">
                  <button className="font-medium hover:underline inline-flex items-center">
                    Shop
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-50">
                    {shopLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-accent hover:text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <a href="#our-story" className="font-medium hover:underline">
                  Our Story
                </a>
                <a href="#contact" className="font-medium hover:underline">
                  Contact Us
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  {open ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <Disclosure.Panel className="md:hidden bg-primary text-primary-foreground px-4 pt-2 pb-4 space-y-3">
            <div>
              <span className="block font-semibold mb-1">Shop</span>
              <div className="ml-3 space-y-1">
                {shopLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block font-medium hover:underline"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="#our-story" className="block font-medium hover:underline">
              Our Story
            </a>
            <a href="#contact" className="block font-medium hover:underline">
              Contact Us
            </a>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
