import Image from "next/image";
import { routes } from "@/data/site";
import Button from "./Button";

type Props = {
  /** h1 on the XL Boxes page, h2 on the home page. */
  as?: "h1" | "h2";
  /** Show the "Shop XL Boxes" button (home page only). */
  showCta?: boolean;
};

export default function XLBoxesSection({ as: Heading = "h2", showCta = true }: Props) {
  return (
    <section
      id="xl-boxes"
      aria-labelledby="xl-title"
      className="relative bg-xl text-white lg:h-[18.5rem] lg:overflow-hidden"
    >
      <div className="px-5 pt-12 pb-12 md:px-8 md:pt-14 lg:mx-auto lg:h-full lg:w-[64rem] lg:px-[3.125rem] lg:pt-[2.4375rem] lg:pb-0">
        <p className="text-[0.625rem] leading-none font-semibold tracking-[0.17em] uppercase lg:text-[0.59375rem] lg:leading-[0.75rem]">
          Make a Bigger Statement
        </p>
        <Heading
          id="xl-title"
          className="mt-3 font-condensed text-[4.75rem] leading-[0.8] font-bold uppercase md:text-[5.5rem] lg:mt-[0.75rem] lg:text-[5rem]"
        >
          XL Boxes
        </Heading>
        <p className="mt-5 max-w-[24rem] text-[0.9375rem] leading-[1.45] text-white/85 lg:mt-[1.375rem] lg:max-w-none lg:text-[0.9rem] lg:leading-[1.3125rem]">
          Our oversized cereal boxes are perfect for
          <br className="hidden sm:inline" /> rallies, events, markets, photo ops and
          <br className="hidden sm:inline" /> guerrilla marketing in your town.
        </p>
        {showCta && (
          <Button
            href={routes.xlBoxes}
            variant="light"
            className="mt-7 h-12 px-7 text-[0.9375rem] lg:mt-[1.3125rem] lg:h-[2.5rem] lg:w-[11.75rem] lg:px-0 lg:text-[0.90625rem]"
          >
            Shop XL Boxes
          </Button>
        )}
      </div>

      <div className="relative aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[calc(50%-10.1875rem)] lg:aspect-auto">
        <Image
          src="/images/xl-vancouver.jpg"
          alt="Two people carrying giant Rice Eby's and Lorne Pops XL cereal boxes down Granville Street, beside a Good People, Brighter B.C. sign"
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover object-[50%_22%]"
        />
      </div>
    </section>
  );
}
