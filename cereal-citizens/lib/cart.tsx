"use client";

import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
import { getProduct } from "@/data/products";

export type CartLine = { id: string; quantity: number };
type State = { lines: CartLine[]; open: boolean };
type Action =
  | { type: "add"; id: string; quantity: number }
  | { type: "set"; id: string; quantity: number }
  | { type: "remove"; id: string }
  | { type: "open" }
  | { type: "close" };

const MAX_QTY = 99;
const clamp = (n: number) => Math.max(1, Math.min(MAX_QTY, Math.floor(n)));

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
      const existing = state.lines.find((l) => l.id === action.id);
      const lines = existing
        ? state.lines.map((l) =>
            l.id === action.id ? { ...l, quantity: clamp(l.quantity + action.quantity) } : l,
          )
        : [...state.lines, { id: action.id, quantity: clamp(action.quantity) }];
      return { lines, open: true };
    }
    case "set":
      return {
        ...state,
        lines: state.lines.map((l) =>
          l.id === action.id ? { ...l, quantity: clamp(action.quantity) } : l,
        ),
      };
    case "remove":
      return { ...state, lines: state.lines.filter((l) => l.id !== action.id) };
    case "open":
      return { ...state, open: true };
    case "close":
      return { ...state, open: false };
  }
}

type CartContextValue = State & {
  count: number;
  subtotalCents: number;
  add: (id: string, quantity: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [], open: false });

  const value = useMemo<CartContextValue>(() => {
    const count = state.lines.reduce((n, l) => n + l.quantity, 0);
    const subtotalCents = state.lines.reduce(
      (sum, l) => sum + (getProduct(l.id)?.priceCents ?? 0) * l.quantity,
      0,
    );
    return {
      ...state,
      count,
      subtotalCents,
      add: (id, quantity) => dispatch({ type: "add", id, quantity }),
      setQuantity: (id, quantity) => dispatch({ type: "set", id, quantity }),
      remove: (id) => dispatch({ type: "remove", id }),
      openCart: () => dispatch({ type: "open" }),
      closeCart: () => dispatch({ type: "close" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
