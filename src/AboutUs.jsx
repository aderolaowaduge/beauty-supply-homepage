export default function AboutUs() {
  return (
    // About Us section of the website
    <section className="bg-secondary text-foreground py-16 px-4 mt-20">
      {/* Container centers content and splits into two columns on larger screens */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Visual: Brand image representing Della's Beauty to create a welcoming feel */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-lg">
          <img
            src="/images/hero-banner-2.jpg"
            alt="Della's Beauty storefront or styled products"
            className="w-full h-full object-cover"
          />
          {/* Overlay to subtly darken the image for better text contrast if needed */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Textual content introducing the brand's mission and values */}
        <div>
          <h2 className="text-4xl font-bold font-brand mb-4 text-accent">About Us</h2>
          <p className="text-base text-black mb-4">
            At Della's Beauty, we're more than a store — we're a celebration of culture, confidence, and community. Our mission is to empower individuals by offering curated beauty products from Black- and women-owned brands.
          </p>
          <p className="text-base text-black">
            Whether you're embracing your curls, trying a bold new look, or finding joy in the little things, Della’s is here to uplift your routine with products that reflect your brilliance.
          </p>
        </div>
      </div>
    </section>
  );
}

