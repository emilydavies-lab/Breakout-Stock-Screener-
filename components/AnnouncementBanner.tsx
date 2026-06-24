import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <div className="border-b border-ink-line bg-paper-dim">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-2.5 text-center sm:px-10">
        <p className="font-body text-[13px] text-ink-soft">
          Introducing Linde Access — institutional grade investing from
          $250,000. Built for Millennial and Gen Z investors.{" "}
          <Link
            href="/linde-access"
            className="font-medium text-ink underline transition-opacity hover:opacity-60"
          >
            Learn more &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
