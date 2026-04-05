import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import VoucherCard from "./components/VoucherCard";
import Footer from "./components/Footer";

const cards = [
  { title: "Amazon Gift Card", price: "₹500", tag: "10% OFF" },
  { title: "Flipkart Voucher", price: "₹1000", tag: "15% OFF" },
  { title: "Myntra Voucher", price: "₹1500", tag: "20% OFF" },
  { title: "Zomato Voucher", price: "₹300", tag: "Save ₹100" },
  { title: "Swiggy Voucher", price: "₹500", tag: "Flat ₹150 OFF" },
  { title: "Netflix Voucher", price: "₹799", tag: "Popular" }
];

function Section({ title } : {title: string}) {
  return (
    <div className="px-6 mt-10">

      <h2 className="text-2xl font-bold text-green-600">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {cards.map((item, index) => (
          <VoucherCard key={index} {...item} />
        ))}
      </div>

    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />
      <HeroSection />
      <Carousel />

      {/* Sections */}
      <Section title="Vouchers with Points 💰" />
      <Section title="Featured Brands 🎉" />
      <Section title="Best Sellers 🔥" />

      <Footer />
    </div>
  );
}