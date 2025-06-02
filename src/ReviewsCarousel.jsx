import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

// Static review data array with id, reviewer name, text, and star rating
const reviews = [
  {
    id: 1,
    name: "Jasmine R.",
    text: "Absolutely love this shop! Everything I need for my curls is in one place. Highly recommend.",
    stars: 5,
  },
  {
    id: 2,
    name: "Tasha N.",
    text: "Customer service was amazing and I felt so welcomed. Plus, I found the cutest accessories!",
    stars: 4,
  },
  {
    id: 3,
    name: "Marisol G.",
    text: "I appreciate the support for Black-owned brands. I discovered products that actually work for me!",
    stars: 5,
  },
];

export default function ReviewsCarousel() {
  // State to track current review index
  const [index, setIndex] = useState(0);

  // Auto-cycle reviews every 6 seconds using interval, cleanup on unmount
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % reviews.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  // Manual switch handler: cycles forward or backward through reviews, wrapping around
  const handleManualSwitch = (dir) => {
    setIndex((prev) =>
      dir === "next"
        ? (prev + 1) % reviews.length
        : (prev - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section
      className="relative py-24 px-4 text-foreground"
      style={{
        // Background image for the review section
        backgroundImage: "url('/images/hero-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 55%",
      }}
    >
      {/* Semi-transparent dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-60 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-background mb-15">What Our Customers Say</h2>

        <div className="relative">
          {/* AnimatePresence manages smooth transitions between review changes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id} // Unique key to trigger animation on change
              initial={{ opacity: 0, y: 20 }} // Start state for enter animation
              animate={{ opacity: 1, y: 0 }}  // Animate to visible and aligned
              exit={{ opacity: 0, y: -20 }}   // Exit animation state
              transition={{ duration: 0.5 }}  // Animation duration
              className="bg-secondary rounded-xl p-8 shadow-lg relative"
            >
              {/* Display star rating as floating stars above review */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {[...Array(reviews[index].stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-lg italic mb-4">"{reviews[index].text}"</p>
              {/* Reviewer name */}
              <p className="font-semibold text-accent">— {reviews[index].name}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons for manual review switching */}
          <div className="mt-6 flex justify-center gap-6">
            <button
              onClick={() => handleManualSwitch("prev")}
              className="text-background hover:underline font-medium"
            >
              ← Previous
            </button>
            <button
              onClick={() => handleManualSwitch("next")}
              className="text-background hover:underline font-medium"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
