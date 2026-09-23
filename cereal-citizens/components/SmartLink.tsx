"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

/**
 * Internal link that stays a plain `#anchor` when the target is on the
 * current page (so CSS smooth scrolling applies) and uses next/link for
 * other routes, which keeps the cart state across page changes.
 */
export default function SmartLink({ href, ...props }: Props) {
  const pathname = usePathname();
  const [path, hash] = href.split("#");
  if (hash !== undefined && (path === "" || path === pathname)) {
    return <a href={`#${hash}`} {...props} />;
  }
  if (!href.startsWith("/")) return <a href={href} {...props} />;
  return <Link href={href} {...props} />;
}
