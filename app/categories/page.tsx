import { deals } from "@/app/data/gifts";
import Link from "next/link";

const formatTitle = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function CategoriesPage() {
  const categories = Array.from(
    new Set(deals.map((d) => d.category))
  ).map((cat) => ({
    name: formatTitle(cat),
    slug: cat,
    img: "/categories/food.jpg", // Placeholder image for all categories
  }));

  return (
    <div className="space-y-10 p-6 text-black">

      {/* CATEGORY GRID */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="relative rounded-xl overflow-hidden group"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}