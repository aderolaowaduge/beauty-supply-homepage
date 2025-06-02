import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-secondary text-foreground py-12 px-6">
      {/* Footer content grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand info */}
        <div>
          <h3 className="text-2xl font-bold text-accent mb-3">Della's Beauty</h3>
          <p className="text-muted-foreground text-sm">
            Celebrating natural beauty with products that empower and uplift.
          </p>
        </div>

        {/* Shop links */}
        <div>
          <h4 className="font-semibold text-lg text-accent mb-2">Shop</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="#haircare" className="hover:underline">Hair Care</a></li>
            <li><a href="#accessories" className="hover:underline">Accessories</a></li>
            <li><a href="#novelty" className="hover:underline">Novelty</a></li>
          </ul>
        </div>

        {/* Company links */}
        <div>
          <h4 className="font-semibold text-lg text-accent mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#careers" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h4 className="font-semibold text-accent text-lg mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-muted-foreground">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook className="hover:text-accent transition-colors" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram className="hover:text-accent transition-colors" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter className="hover:text-accent transition-colors" />
            </a>
            <a href="mailto:example@email.com" aria-label="Email">
              <Mail className="hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-muted-foreground mt-10">
        © {new Date().getFullYear()} DevbyDerola. All rights reserved.
      </div>
    </footer>
  );
}
