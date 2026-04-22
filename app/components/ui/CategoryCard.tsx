import Link from "next/link";

type PageProps = {
  params: {
    name: string;
    id: string;
    slug: string;
    img: string;
  };
};


export default function CategoryCard({ name, slug, img } : PageProps["params"]) {
  return (
    <Link
      href={`/categories/${slug}`}
      className="relative rounded-xl overflow-hidden group"
    >
      <img
        src={img}
        className="w-full h-36 object-cover group-hover:scale-105 transition"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-white font-semibold">{name}</h3>
      </div>
    </Link>
  );
}