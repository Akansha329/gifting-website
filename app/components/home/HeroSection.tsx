import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative text-black rounded-2xl overflow-hidden">

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Send Digital Gift Cards Instantly
          </h1>

          <p className="text-lg mb-6 max-w-lg text-black">
            Perfect for birthdays, celebrations, and last-minute surprises.
            Delivered instantly via Email or SMS.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/categories/food"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore Gifts
            </Link>

            <Link
              href="/categories/ecommerce"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              View Deals
            </Link>
          </div>

          {/* TRUST BADGES */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-center">
          <img
            src="/banners/banner1.jpg"
            alt="Gift Cards"
            className="w-80 object-contain"
          />
        </div>
      </div>

      {/* BACKGROUND DECOR */}
      
    </section>
  );
}