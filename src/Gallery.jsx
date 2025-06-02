// List of image URLs for the gallery
const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function GallerySection() {
  return (
    // Gallery section with padding and background color
    <section className="px-4 py-16 bg-background">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-accent text-center mb-10">
        We hope to see you soon!
      </h2>

      {/* Responsive grid displaying gallery images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
          >
            {/* Gallery image with hover zoom effect */}
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
