import Link from "next/link";
import { deals } from "./data/gifts";
import VoucherCard from "./components/home/VoucherCard";
import HeroSection from "./components/home/HeroSection";

export default function Home() {
  return (
  <div className="space-y-10 text-black">

      {/* HERO */}
   <HeroSection />

    {/* CATEGORIES */}
      <section>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {["food", "fashion", "ecommerce", "travel"].map((cat) => (
           <Link
          key={cat}
           href={`/categories/${cat}`}
          className="bg-gray-100 p-4 rounded-xl text-center hover:bg-gray-200">
           {cat.toUpperCase()}
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Trending</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {deals.slice(0, 6).map((item) => (
            <VoucherCard key={item.slug} {...item} />
          ))}
        </div>
      </section>

    </div>
  );
}