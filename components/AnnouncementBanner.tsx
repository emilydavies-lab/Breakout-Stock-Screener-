import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <div className="border-b border-ink bg-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-2.5 text-center sm:px-10">
        <p className="font-body text-[13px] text-white">
          Introducing Linde Access — institutional grade investing from
          $250,000. Built for emerging investors.{" "}
          <Link
            href="/linde-access"
            className="font-medium text-white underline transition-opacity hover:opacity-70"
          >
            Learn more &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
