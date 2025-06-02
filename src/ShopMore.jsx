// Array of product categories with details for each category card
const categories = [
  {
    id: "haircare", // Unique identifier for the category
    title: "Hair Care", // Category title displayed to users
    image: "/images/haircare.jpg", // Image representing the category
    cta: "Discover haircare that loves your curls.", // Call-to-action text
    link: "#haircare", // Link target (placeholder for now, replace with real routes later)
  },
  {
    id: "accessories",
    title: "Accessories",
    image: "/images/accessories-ring.jpg",
    cta: "Add the perfect finishing touch to your look.",
    link: "#accessories",
  },
  {
    id: "novelty",
    title: "Novelty",
    image: "/images/novelty.jpg",
    cta: "Unique finds to brighten your day.",
    link: "#novelty",
  },
];

// Functional component rendering the "Shop More" section with category cards
export default function ShopMore() {
  return (
    <section className="mt-16 max-w-7xl mx-auto px-4">
      {/* Section title */}
      <h2 className="text-3xl font-semibold text-center mb-10 text-accent">
        Shop More
      </h2>

      {/* Responsive grid container for categories */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Map over categories to create a card for each */}
        {categories.map(({ id, title, image, cta, link }) => (
          <a
            key={id} // Unique key for list rendering
            href={link} // Link to category page or section
            className="group block cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white"
          >
            {/* Image container with fixed height */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={image} // Category image source
                alt={title} // Alt text for accessibility
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark overlay appears on hover for better text contrast */}
              <div className="absolute inset-0 group-hover:bg-black/40 transition-opacity duration-500" />
            </div>

            {/* Text content below the image */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{cta}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
