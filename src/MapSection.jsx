export default function MapSection() {
  return (
    // Section with background and padding for store location info
    <section className="bg-secondary px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-accent mb-6">Visit Us</h2>

        {/* Invitation text */}
        <p className="text-black mb-10">
          Come by our store to browse products in person, ask for recommendations, or just say hi!
        </p>

        {/* Embedded Google Map showing store location */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-border">
          <iframe
            title="Della's Beauty Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.090031344827!2d-122.420679584679!3d37.77492927975996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b9a3c4c13%3A0x1a02b12f37f4df76!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1627048400563!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
