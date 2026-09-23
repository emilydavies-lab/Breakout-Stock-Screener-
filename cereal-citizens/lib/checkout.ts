export type CheckoutLine = { id: string; quantity: number };

export type CheckoutResult =
  | { ok: true; redirectUrl: string }
  | { ok: false; message: string };

/**
 * The single integration point for payments. Swap the body for a Shopify
 * Storefront cart / Stripe Checkout Session call (see README) and return
 * { ok: true, redirectUrl } to send the shopper to the hosted checkout.
 */
export async function startCheckout(lines: CheckoutLine[]): Promise<CheckoutResult> {
  void lines;
  return { ok: false, message: "Checkout opens soon. Your cart is saved on this page." };
}
