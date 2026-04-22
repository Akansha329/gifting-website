import { deals } from "@/app/data/gifts";
import { notFound } from "next/navigation";
import GiftClient from "./GiftClient";
import { use } from "react";

export default function GiftSlug({ params }: { params: Promise<{ slug: string }> }) {
  const {slug } = use(params);
  const gift = deals.find((d) => d.slug === slug);

  if (!gift) return notFound();

  return <GiftClient gift={gift} />;
}