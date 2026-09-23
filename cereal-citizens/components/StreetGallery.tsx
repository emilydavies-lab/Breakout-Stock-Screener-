import Image from "next/image";
import { socials } from "@/data/site";
import { InstagramIcon, MapleLeafIcon, TikTokIcon, XIcon } from "./icons";

/* Column positions on the 1024 grid: x21–218, 225–433, 439–639, 645–840. */
const photos = [
  { src: "/images/street-01.jpg", pos: "lg:left-[1.3125rem] lg:w-[12.3125rem]", alt: "A woman holding a Rice Eby's box on the False Creek seawall" },
  { src: "/images/street-02.jpg", pos: "lg:left-[14.0625rem] lg:w-[13rem]", alt: "A man in a cap holding a Lorne Pops box outside Granville Island Public Market" },
  { src: "/images/street-03.jpg", pos: "lg:left-[27.4375rem] lg:w-[12.5rem]", alt: "A woman seen from behind wearing a yellow Cereal Citizens board with a maple leaf, facing the water" },
  { src: "/images/street-04.jpg", pos: "lg:left-[40.3125rem] lg:w-[12.1875rem]", alt: "A smiling man holding a Rice Eby's box on a downtown street" },
];

const socialIcons = { instagram: InstagramIcon, tiktok: TikTokIcon, x: XIcon } as const;

export default function StreetGallery() {
  return (
    <div className="relative bg-paper lg:mx-auto lg:h-[19.4375rem] lg:w-[64rem]">
      <section
        id="in-the-wild"
        aria-label="In the wild"
        className="grid grid-cols-2 gap-1.5 px-1.5 pt-1.5 md:gap-2 md:px-2 md:pt-2 lg:block lg:p-0"
      >
        {photos.map((photo, i) => (
          <figure
            key={photo.src}
            className={`relative m-0 aspect-[7/10] overflow-hidden bg-panel lg:absolute lg:top-[0.5625rem] lg:h-[17.8125rem] lg:aspect-auto ${photo.pos}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 13rem, 50vw"
              className="object-cover"
            />
            {i === 0 && (
              <figcaption className="absolute bottom-4 left-3 origin-bottom-left -rotate-5 font-hand text-[1.3125rem] leading-[1.15] font-medium text-white [text-shadow:0_1px_6px_rgb(0_0_0/0.55)] lg:bottom-[0.875rem] lg:left-[0.6875rem] lg:text-[1.25rem] lg:leading-[1.3125rem]">
                Real People.
                <br />
                Real Places.
                <br />
                Real Conversations.
              </figcaption>
            )}
          </figure>
        ))}
      </section>

      <footer className="px-6 pt-10 pb-12 md:px-8 lg:absolute lg:top-[2.625rem] lg:left-[54.5625rem] lg:p-0">
        <p className="font-hand text-[1.875rem] leading-[1.625rem] font-medium text-ink lg:text-[1.75rem] lg:leading-[1.5rem]">
          Cereal
          <br />
          creates
          <br />
          conversation.
        </p>
        <span aria-hidden="true" className="mt-5 block h-[2px] w-5 bg-ink lg:mt-[1.125rem] lg:h-[0.125rem] lg:w-[1.125rem]" />
        <MapleLeafIcon className="mt-6 size-4 text-ink lg:mt-[1.25rem] lg:size-[1.125rem]" />
        <p className="mt-8 text-xs text-ink/80 lg:mt-[2.25rem] lg:text-[0.6875rem] lg:leading-[0.875rem]">
          {socials.handle}
        </p>
        <ul className="mt-4 flex items-center gap-4 lg:mt-[1rem] lg:gap-[0.75rem]">
          {socials.links.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" aria-label={`${link.label} (opens in a new tab)`} className="block text-ink">
                  <Icon className="size-5 lg:size-[1.125rem]" />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="sr-only">© Cereal Citizens. Parody collectibles made in British Columbia.</p>
      </footer>
    </div>
  );
}
