"use client";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: Props) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300`}
      >
        <div className="p-4 font-bold border-b">Menu</div>

        <ul className="p-4 space-y-4">
          <li className="cursor-pointer hover:text-green-600">Home</li>
          <li className="cursor-pointer hover:text-green-600">Categories</li>
          <li className="cursor-pointer hover:text-green-600">Orders</li>
           <li className="cursor-pointer hover:text-green-600">Profile</li>
          <li className="cursor-pointer hover:text-green-600">Offers</li>
           <li className="cursor-pointer hover:text-green-600">Enquiry</li>
          <li className="cursor-pointer hover:text-green-600">Contact Us</li>
          <li className="cursor-pointer hover:text-green-600">FAQ</li>
        </ul>
      </div>
    </>
  );
}