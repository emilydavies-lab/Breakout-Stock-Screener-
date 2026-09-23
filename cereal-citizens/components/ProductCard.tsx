"use client";

import Image from "next/image";
import { useState } from "react";
import { formatPrice, type Product } from "@/data/products";
import { useCart } from "@/lib/cart";
import QuantitySelector from "./QuantitySelector";

export default function ProductCard({ product, className = "" }: { product: Product; className?: string }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const titleId = `${product.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      data-testid={`product-${product.id}`}
      className={`flex gap-4 rounded-[10px] bg-panel p-4 sm:gap-5 lg:gap-[1.125rem] lg:rounded-[0.625rem] lg:py-[0.625rem] lg:pr-[0.75rem] lg:pl-[1.5rem] ${className}`}
    >
      <Image
        src={product.image.src}
        width={product.image.width}
        height={product.image.height}
        alt={product.image.alt}
        sizes="(min-width: 1024px) 8rem, 9rem"
        className="h-auto w-[7.5rem] shrink-0 self-center sm:w-[8.5rem] lg:h-[11.5rem] lg:w-auto"
      />
      <div className="flex min-w-0 flex-1 flex-col pt-3 pb-1 lg:pt-[1.4375rem] lg:pb-[0.8125rem]">
        <h3 id={titleId} className="text-[1.1875rem] leading-tight font-bold tracking-[-0.01em] text-title lg:text-[1.1875rem] lg:leading-[1.4375rem]">
          {product.name}
        </h3>
        <p className="mt-1.5 text-[0.8125rem] leading-snug text-ink/70 lg:mt-[0.3125rem] lg:text-[0.75rem] lg:leading-[1.0625rem]">
          {product.tagline.map((line, i) => (
            <span key={i} className="lg:block">
              {line}
              {i < product.tagline.length - 1 && " "}
            </span>
          ))}
        </p>
        <p className="mt-auto pt-4 text-[1.0625rem] leading-none font-bold text-ink lg:pt-0 lg:text-[1.09375rem] lg:leading-[1.375rem]">
          {formatPrice(product.priceCents, product.currency)}
        </p>
        <div className="mt-3 flex flex-wrap gap-2 lg:mt-[1rem] lg:flex-nowrap lg:gap-[0.625rem]">
          <QuantitySelector value={qty} onChange={setQty} label={product.name} className="lg:w-[3.625rem]" />
          <button
            type="button"
            onClick={() => {
              add(product.id, qty);
              setQty(1);
            }}
            className="h-8 rounded-md bg-navy px-3 text-xs font-semibold whitespace-nowrap text-white hover:bg-[#12283b] lg:h-[2rem] lg:w-[4.1875rem] lg:rounded-[0.375rem] lg:px-0 lg:text-[0.6875rem]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
