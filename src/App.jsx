// External libraries
import { motion } from "framer-motion";

// Local styles, mock data, and component imports
import "./index.css";
import Navbar from "./components/Navbar";
import PopularItems from "./PopularItems";
import ShopMore from "./ShopMore";
import AboutUs from "./AboutUs";
import ReviewsCarousel from "./ReviewsCarousel";
import MapSection from "./MapSection";
import GallerySection from "./Gallery";
import Footer from "./Footer";

export default function App() {
  return (
    // Main container for the landing page, sets base background and text colors
    <main className="bg-background text-foreground min-h-screen">
      
      {/* Navigation bar with site links */}
      <Navbar />

      {/* Hero Section: Large visual banner with welcoming message */}
      <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden shadow-lg">
        
        {/* Background image with parallax effect to draw user in */}
        <div
          className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero-banner-2.jpg')`,
            backgroundPosition: "center 80%",
          }}
        >
          {/* Semi-transparent overlay to enhance text readability */}
          <div className="w-full h-full bg-black/50" />
        </div>

        {/* Bottom-centered animated welcome text on top of the hero image */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <motion.div
            className="bg-accent/70 p-10 w-full text-center text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-brand font-bold">
              Welcome to Della's
            </h1>
            <p className="text-lg mt-2">
              A beauty supply haven that celebrates Black and Women-Owned brands
              in hair care, accessories, and all things radiant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showcase of the week’s most popular products */}
      <PopularItems />

      {/* Additional shop categories and promotions */}
      <ShopMore />

      {/* Brand story and mission */}
      <AboutUs />

      {/* Customer testimonials in carousel format */}
      <ReviewsCarousel />

      {/* Location map and store info */}
      <MapSection />

      {/* Visual gallery showcasing products or events */}
      <GallerySection />

      {/* Footer with contact info, links, and social media */}
      <Footer />
    </main>
  );
}
