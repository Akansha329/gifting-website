type Props = {
 title: string;
 price: string;
 tag: string;
};

export default function VoucherCard({ title, price, tag }: Props) {
  return (
  <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition">

  {/* Placeholder for image */}
  <div className="h-32 bg-gray-200 rounded mb-3"></div>

      <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
        {tag}
      </span>

      <h3 className="font-semibold mt-2">{title}</h3>
      <p className="text-gray-500">{price}</p>

      <button className="mt-3 w-full bg-green-500 text-white py-2 rounded">
        Buy Now
      </button>
    </div>
  );
}