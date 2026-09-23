import { collectibles } from "@/data/products";
import ProductCard from "./ProductCard";
import { MarkerCircle, MarkerUnderline } from "./HandDrawn";

/* Card boxes on the 1024 grid: x208–520 and x535–851, y+24, 204 tall. */
const cardPositions = ["lg:left-[13rem] lg:w-[19.5rem]", "lg:left-[33.4375rem] lg:w-[19.75rem]"];

export default function CollectiblesSection() {
  return (
    <section
      id="collectibles"
      aria-labelledby="collectibles-title"
      className="relative scroll-mt-0 bg-paper px-5 pt-10 pb-12 md:px-8 lg:h-[15.625rem] lg:p-0"
    >
      <div className="relative lg:mx-auto lg:h-full lg:w-[64rem]">
        <div className="flex items-start justify-between gap-4 lg:contents">
          <div className="relative pb-8 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[13rem] lg:p-0">
            <h2
              id="collectibles-title"
              className="ml-1 origin-left -rotate-12 pt-4 font-hand text-[2.5rem] leading-[0.95] font-semibold text-ink lg:absolute lg:top-[4.75rem] lg:left-[2.25rem] lg:m-0 lg:p-0 lg:text-[2.5rem] lg:leading-[2.4rem]"
            >
              The
              <br />
              Collectibles
            </h2>
            <MarkerUnderline
              weight={3.5}
              className="absolute bottom-0 left-6 w-[8.125rem] text-ink lg:top-[7.875rem] lg:bottom-auto lg:left-[3.875rem] lg:w-[8.125rem]"
            />
          </div>

          <div className="relative grid h-[6.5rem] w-[7.75rem] shrink-0 place-items-center text-marker lg:absolute lg:top-[3.8125rem] lg:left-[54.25rem] lg:h-[7rem] lg:w-[8.375rem]">
            <MarkerCircle className="absolute inset-0 size-full" />
            <p className="-rotate-20 text-center font-hand text-[1.875rem] leading-[0.85] font-medium text-ink lg:text-[2.125rem]">
              Limited
              <br />
              <span className="pl-[0.6em]">Edition</span>
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:contents">
          {collectibles.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              className={`lg:absolute lg:top-[1.5rem] lg:h-[12.75rem] ${cardPositions[i]}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
