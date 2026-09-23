import { xlBoxes } from "@/data/products";
import ProductCard from "./ProductCard";
import { MarkerUnderline } from "./HandDrawn";

export default function XLProductsSection() {
  return (
    <section
      id="xl-shop"
      aria-labelledby="xl-shop-title"
      className="bg-paper px-5 pt-10 pb-14 md:px-8 lg:px-0 lg:pt-[2.5rem] lg:pb-[3.5rem]"
    >
      <div className="lg:mx-auto lg:flex lg:w-[64rem] lg:items-center lg:gap-[1.25rem] lg:pl-[2.25rem]">
        <div className="relative pb-8 lg:w-[10.5rem] lg:shrink-0 lg:pb-[2.5rem]">
          <h2
            id="xl-shop-title"
            className="ml-1 origin-left -rotate-12 pt-4 font-hand text-[2.5rem] leading-[0.95] font-semibold text-ink lg:m-0 lg:text-[2.5rem] lg:leading-[2.4rem]"
          >
            Pick
            <br />
            your box
          </h2>
          <MarkerUnderline
            weight={3.5}
            className="absolute bottom-0 left-6 w-[8.125rem] text-ink lg:left-[0.5rem] lg:w-[8.125rem]"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-0 lg:flex lg:gap-[1rem]">
          {xlBoxes.map((product) => (
            <ProductCard key={product.id} product={product} className="lg:h-[12.75rem] lg:w-[19.75rem]" />
          ))}
        </div>
      </div>
    </section>
  );
}
