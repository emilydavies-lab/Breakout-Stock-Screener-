import Image from "next/image";
import { routes } from "@/data/site";
import Button from "./Button";
import FeatureIcons from "./FeatureIcons";
import { MarkerUnderline } from "./HandDrawn";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative bg-sky lg:h-[42.4375rem] lg:overflow-hidden">
      <div className="relative z-10 px-5 pt-6 pb-10 md:px-8 md:pt-10 md:pb-12 lg:mx-auto lg:h-full lg:w-[64rem] lg:p-0">
        <h1
          id="hero-title"
          className="headline text-[3rem] leading-[0.92] md:text-[4.5rem] lg:absolute lg:top-[9rem] lg:left-[3.125rem] lg:text-[3.75rem] lg:leading-[0.915]"
        >
          Cereal
          <br />
          for a Brighter
          <br />
          B.C.
        </h1>
        <span
          aria-hidden="true"
          className="mt-6 block h-[5px] w-8 bg-ink lg:absolute lg:top-[20.375rem] lg:left-[3.125rem] lg:mt-0 lg:h-[0.3125rem] lg:w-[2rem]"
        />
        <p className="mt-5 max-w-[22rem] text-base leading-[1.45] text-ink/85 lg:absolute lg:top-[21.75rem] lg:left-[3.125rem] lg:mt-0 lg:max-w-none lg:text-[1rem] lg:leading-[1.4375rem]">
          Limited edition cereal collectibles
          <br className="hidden sm:inline" /> and XL boxes for a crunchier,
          <br className="hidden sm:inline" /> more vibrant election season.
        </p>
        <div className="mt-7 flex flex-col items-start gap-3 lg:mt-0 lg:contents">
          <Button
            href={routes.collectibles}
            className="h-12 px-7 text-[0.9375rem] lg:absolute lg:top-[27.5rem] lg:left-[3.125rem] lg:h-[2.5rem] lg:w-[13.6875rem] lg:px-0 lg:text-[0.90625rem]"
          >
            Shop the Collection
          </Button>
          <Button
            href={routes.xlBoxes}
            variant="outline"
            className="h-12 px-7 text-[0.9375rem] lg:absolute lg:top-[30.625rem] lg:left-[3.125rem] lg:h-[2.5625rem] lg:w-[11.6875rem] lg:px-0 lg:text-[0.90625rem]"
          >
            Shop XL Boxes
          </Button>
        </div>
        <FeatureIcons className="mt-10 max-w-[26rem] lg:absolute lg:top-[37.5rem] lg:left-[1rem] lg:mt-0 lg:max-w-none" />

        {/* Handwritten annotation (desktop only) */}
        <div
          aria-hidden="true"
          className="absolute top-[9.1875rem] left-[56rem] hidden origin-top-left -rotate-12 lg:block"
        >
          <p className="font-hand text-[1.3125rem] leading-[1.375rem] font-medium whitespace-nowrap text-ink">
            Different
            <br />
            Flavours.
            <br />A Brighter B.C.
          </p>
          <MarkerUnderline weight={7} className="-mt-[0.25rem] ml-[1.375rem] w-[4.75rem] text-ink" />
        </div>
      </div>

      <div className="relative aspect-[4/5] md:aspect-square lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/images/hero-vancouver.jpg"
          alt="Two people on the Vancouver seawall holding up Rice Eby's and Lorne Pops cereal boxes, with the city and mountains behind them"
          fill
          preload
          sizes="100vw"
          quality={85}
          className="object-cover object-[80%_50%] lg:object-center"
        />
      </div>
    </section>
  );
}
