'use client';

import { useState } from "react";
import type { deals } from "@/app/data/gifts";

type Props = {
  gift: typeof deals[number];
};


export default function GiftClient({ gift } : Props) {
  const [amount, setAmount] = useState(500);
  const [qty, setQty] = useState(1);
  const [type, setType] = useState<"self" | "gift">("self");

  const preset = [250, 500, 1000, 2000];
  const total = amount * qty;

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 text-black">

      {/* LEFT */}
      <div className="border rounded-2xl p-6 gap-3 space-y-3">
        <img
          src={`/deals/${gift.slug}.jpeg`}
          alt={gift.title}
          className="w-full h-64 object-contain mb-4"
        />

        <h1 className="text-2xl font-bold">{gift.title}</h1>
        <p className="text-gray-600 mt-2">{gift.description}</p>

        <p className="mt-4 text-sm text-gray-500">
          Instant Delivery | Secure Payment
        </p>
      </div>

      {/* RIGHT */}
      <div className="space-y-6 gap-3 px-2">
        <div>
          <p className="font-semibold mb-2">Select Amount</p>

          <div className="flex gap-2 flex-wrap">
            {preset.map((p) => (
              <button
                key={p}
                onClick={() => setAmount(p)}
                className={`px-4 py-2 border rounded ${
                  amount === p ? "bg-blue-600 text-white" : ""
                }`}
              >
                ₹{p}
              </button>
            ))}
          </div>

          <input
            type="number"
            value={amount}
            min={250}
            onChange={(e) => setAmount(Math.max(250, Number(e.target.value)))}
            className="mt-3 border p-2 w-full rounded"
          />
        </div>

        <div>
          <p className="font-semibold mb-2">Quantity</p>
          <input
            type="number"
            value={qty}
            min={1}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
            className="border p-2 w-24 rounded"
          />
        </div>

        <div>
          <p className="font-semibold mb-2">Delivery</p>
          <div className="flex gap-2">
            <button
              onClick={() => setType("self")}
              className={`px-4 py-2 border rounded ${
                type === "self" ? "bg-blue-600 text-white" : ""
              }`}
            >
              For Myself
            </button>

            <button
              onClick={() => setType("gift")}
              className={`px-4 py-2 border rounded ${
                type === "gift" ? "bg-blue-600 text-white" : ""
              }`}
            >
              Send as Gift
            </button>
          </div>
        </div>

        {type === "gift" && (
          <div className="space-y-3 border p-4 rounded-lg">
            <input placeholder="Recipient Name" className="w-full border p-2 rounded" />
            <input placeholder="Recipient Email" className="w-full border p-2 rounded" />
            <textarea placeholder="Message" className="w-full border p-2 rounded" />
          </div>
        )}

        <div className="text-xl font-bold">Total: ₹{total}</div>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
}