"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { formatPrice, getProduct } from "@/data/products";
import { useCart } from "@/lib/cart";
import { startCheckout } from "@/lib/checkout";
import QuantitySelector from "./QuantitySelector";
import SmartLink from "./SmartLink";
import { routes } from "@/data/site";
import { CloseIcon } from "./icons";

export default function CartDrawer() {
  const { open, lines, subtotalCents, closeCart, setQuantity, remove } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCart();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      setNotice(null);
      previouslyFocused?.focus?.();
    };
  }, [open, closeCart]);

  if (!open) return null;

  async function onCheckout() {
    setPending(true);
    const result = await startCheckout(lines.map(({ id, quantity }) => ({ id, quantity })));
    setPending(false);
    if (result.ok) window.location.assign(result.redirectUrl);
    else setNotice(result.message);
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close cart"
        tabIndex={-1}
        onClick={closeCart}
        data-testid="cart-overlay"
        className="absolute inset-0 size-full cursor-default bg-ink/40"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="absolute inset-y-0 right-0 flex w-full max-w-[26rem] flex-col bg-paper text-ink"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 id="cart-title" className="font-condensed text-[1.75rem] leading-none font-semibold tracking-[0.05em] uppercase">
            Your Cart
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="-mr-2 grid size-10 place-items-center rounded-md"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-start px-6 py-10">
            <p className="font-hand text-[2rem] leading-none font-medium">Your bowl is empty.</p>
            <SmartLink
              href={routes.collectibles}
              onClick={closeCart}
              className="mt-5 text-sm font-medium underline underline-offset-4"
            >
              Back to the collection
            </SmartLink>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-ink/10 overflow-y-auto px-6" data-testid="cart-lines">
              {lines.map((line) => {
                const product = getProduct(line.id);
                if (!product) return null;
                return (
                  <li key={line.id} className="flex gap-4 py-5" data-testid={`line-${line.id}`}>
                    <Image
                      src={product.image.src}
                      width={product.image.width}
                      height={product.image.height}
                      alt=""
                      sizes="4rem"
                      className="h-24 w-auto shrink-0 rounded-sm"
                    />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-bold text-title">{product.name}</p>
                        <p className="font-semibold tabular-nums" data-testid="line-total">
                          {formatPrice(product.priceCents * line.quantity, product.currency)}
                        </p>
                      </div>
                      <p className="mt-0.5 text-xs text-ink/60">
                        {formatPrice(product.priceCents, product.currency)} each
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <QuantitySelector
                          value={line.quantity}
                          onChange={(q) => setQuantity(line.id, q)}
                          label={product.name}
                        />
                        <button
                          type="button"
                          onClick={() => remove(line.id)}
                          className="text-xs font-medium text-ink/70 underline underline-offset-4 hover:text-ink"
                        >
                          Remove<span className="sr-only"> {product.name}</span>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-ink/10 px-6 pt-5 pb-6">
              <div className="flex items-baseline justify-between">
                <p className="font-semibold">Subtotal</p>
                <p className="text-lg font-bold tabular-nums" data-testid="cart-subtotal">
                  {formatPrice(subtotalCents)}
                </p>
              </div>
              <p className="mt-1 text-xs text-ink/60">Shipping and taxes calculated at checkout.</p>
              <button
                type="button"
                onClick={onCheckout}
                disabled={pending}
                className="mt-5 h-12 w-full rounded-md bg-navy text-sm font-bold tracking-wide text-white uppercase hover:bg-[#12283b] disabled:opacity-60"
              >
                Checkout
              </button>
              <p role="status" className="mt-3 min-h-5 text-center text-xs text-ink/70">
                {notice}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
