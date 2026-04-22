import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import "./globals.css";

export const metadata = {
  title: "GiftyGo",
  description: "Gift Card Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">
   <body>
    <Navbar />
    <main className="p-6 max-w-6xl mx-auto">{children}</main>
       <Footer />
        </body>
    </html>
  );
}