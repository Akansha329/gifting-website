import { deals } from "@/app/data/gifts";
import VoucherCard from "@/app/components/home/VoucherCard";
import { notFound } from "next/navigation";
import { use } from "react";

type Props = {
  params: { slug: string };
};

const formatTitle = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function CategorySlug({ params }: { params: Promise<{ slug: string }> }) {
  const {slug } = use(params);

  const filtered = deals.filter(
    (item) => item.category === slug
  );

  if (!filtered.length) return notFound();

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-6">
        {formatTitle(slug)}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <VoucherCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}