"use client";

import { useSearchParams } from "next/navigation";
import { deals } from "@/app/data/gifts";
import VoucherCard from "@/app/components/home/VoucherCard";

export default function SearchPage() {
  const params = useSearchParams();
  const query = params.get("q")?.toLowerCase() || "";

  const results = deals.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  return (
    <div className="p-6 text-black">
      <h1 className="text-xl font-bold mb-4 text-black">
        Results for: {query}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((item) => (
          <VoucherCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}