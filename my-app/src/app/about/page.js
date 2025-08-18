import Navbar from "../components/Navbar";
import Image from "next/image";

// Simple SVG icons for visual flair
const WeaveIcon = () => (
  <svg
    className="h-10 w-10 text-gray-700"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.251.023.501.05.75.082a2.25 2.25 0 012.25 2.25v5.714a2.25 2.25 0 00.659 1.591L19 14.5M9.75 3.104l4.281 4.282M14.25 21v-5.714a2.25 2.25 0 00-.659-1.591L9 9.5M14.25 21c-.251-.023-.501-.05-.75-.082a2.25 2.25 0 00-2.25-2.25v-5.714a2.25 2.25 0 01.659-1.591L15 4.5M14.25 21l-4.281-4.282"
    />
  </svg>
);

const PaletteIcon = () => (
  <svg
    className="h-10 w-10 text-gray-700"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-5.304-5.304L4.098 14.6a3.75 3.75 0 000 5.304z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 4.5l-4.5 4.5M12.75 8.25l-1.5-1.5"
    />
  </svg>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <div className="relative h-80 w-full">
          <Image
            src="/sarees/about-hero.jpg" // **IMPORTANT**: Replace with your own beautiful, high-quality image
            alt="A vibrant collection of folded sarees"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-serif text-white tracking-wider text-center px-4">
              A Legacy of Thread & Grace
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-serif text-gray-800 mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe a saree is more than just clothing—it's a piece of art, a
            symbol of grace, and an expression of identity. Our journey began
            with a mission: to share the unparalleled beauty of this iconic
            garment with the world.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
            <div className="text-center md:text-left">
              <PaletteIcon />
              <h3 className="text-2xl font-serif text-gray-800 mt-4 mb-2">
                A Curated Collection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We present a{" "}
                <strong className="font-semibold text-gray-700">
                  hand-picked collection of sarees of vibrant colors, rich
                  textures, and timeless elegance.
                </strong>{" "}
                Each piece is carefully selected for its quality, craftsmanship,
                and the unique story it tells.
              </p>
            </div>
            <div className="text-center md:text-left">
              <WeaveIcon />
              <h3 className="text-2xl font-serif text-gray-800 mt-4 mb-2">
                Tribute to Artistry
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From the lustrous sheen of pure silks to the intricate patterns
                of traditional artisans, our collection is a tribute to the rich
                heritage and artistry behind every thread. We are committed to
                bringing you authentic designs to cherish for years.
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-serif text-gray-800 mb-4">
            Discover Your Style
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Thank you for joining us. We invite you to explore our collection
            and find the perfect saree that resonates with you.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
