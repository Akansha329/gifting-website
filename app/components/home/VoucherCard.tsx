import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  discount?: string;
};

export default function VoucherCard({ slug, title, discount }: Props) {
  return (
    <div className="group bg-white border rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

    <div className="relative bg-gray-100 h-40 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={`/deals/${slug}.jpeg`}
          alt={title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-lg line-clamp-2">
        {title}
      </h3>

      {/* META */}
      <div className="flex justify-between items-center mt-2 text-sm">
        <span className="text-gray-500">Instant Delivery</span>
        <span className="text-yellow-500">★ 4.5</span>
      </div>

      {/* BUTTON */}
      <Link
        href={`/gifts/${slug}`}
        className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
>
        View Details
      </Link>
    </div>
  );
}